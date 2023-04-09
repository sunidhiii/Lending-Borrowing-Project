// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import './utils/Ownable.sol';
import './interfaces/IERC20.sol';
import './interfaces/Aggregator.sol';
import './library/LendingHelper.sol';

contract LendingAndBorrowing is Ownable {
    using LendingHelper for address;

    uint256 public LIQUIDATION_THRESHOLD = 8000; // 80% (Multipled by 100 for precision values)

    struct SupportedTokens {
        address tokenAddress;       // address of the token. 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE for eth
        uint256 LTV;                // Multiply by 100 for precision values
        uint256 interestRate;       // Multiply by 100 for precision values
        address tokenUsdPriceFeed;  // chainlink pricefeed contract address
        bool supported;             // if the token is supported or not
    }

    // Array of supports tokens [Dai, Eth]
    address[] public supportedTokenList;
    mapping(address => SupportedTokens) public supportedTokens;

    // Tokens sent as a reciept of lending
    IERC20 public aToken;

    address public ETHAddress = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE; // use this for ETH Address

    address[] public lenders;
    address[] public borrowers;

    // (tokenAddres: (userAddr : amount))
    mapping(address => mapping(address => uint256)) public tokensLentAmount;
    mapping(address => mapping(address => uint256)) public tokensBorrowedAmount;

    // (noOfTokensLent[1,2,3,4]: (userAddr: tokenAddres))
    mapping(uint256 => mapping(address => address)) public tokensLent;
    mapping(uint256 => mapping(address => address)) public tokensBorrowed;

    uint256 public noOfTokensLent = 0;
    uint256 public noOfTokensBorrowed = 0;

    event Withdraw(
        address sender,
        uint256 amount,
        uint256 tokenToWithdrawUsd,
        uint256 availableToWithdraw,
        uint256 totalAmountLentUsd,
        uint256 aTokenToRemove
    );
    event PayDebt(
        address sender,
        int256 index,
        uint256 tokenAmountBorrowed,
        uint256 totalTokenAmountToCollectFromUser,
        address[] borrowers
    );
    event Borrow(
        address sender,
        uint256 amountUsd,
        uint256 totalAmountAvailableForBorrowUsd,
        bool userPresent,
        int256 userIndex,
        address[] borrowers,
        uint256 currentUserTokenBorrowedAmount
    );
    event Supply(
        address sender,
        address[] lenders,
        uint256 currentUserTokenLentAmount
    );
    event Liquidation(
        address indexed account,
        address indexed liquidator,
        uint256 collateralLiquidated,
        uint256 lastCollateralRatio
    );

    constructor(address _aToken) {
        aToken = IERC20(_aToken);
    }

    function lend(address _tokenAddress, uint256 _amount) external payable {
        require(
            supportedTokens[_tokenAddress].supported,
            "Token not supported"
        );

        uint256 amount = 0;
        if (_tokenAddress != ETHAddress) {
            amount = _amount;
            require(amount > 0, "Amount must be greater than 0");
            IERC20(_tokenAddress).transferFrom(
                msg.sender,
                address(this),
                amount
            );
        } else {
            amount = msg.value;
            require(amount > 0, "Value must be greater than 0");
        }

        (bool userPresent, int256 userIndex) = msg.sender.isUserPresentIn(
            lenders
        );

        if (userPresent) {
            _updateUserTokensBorrowedOrLent(
                _tokenAddress,
                amount,
                userIndex,
                "lenders"
            );
        } else {
            lenders.push(msg.sender);
            tokensLentAmount[_tokenAddress][msg.sender] = amount;
            tokensLent[noOfTokensLent++][msg.sender] = _tokenAddress;
        }

        // Send some tokens to the user equivalent to the token amount lent.
        aToken.mint(msg.sender, getTokenPriceInUsd(amount, _tokenAddress));

        emit Supply(
            msg.sender,
            lenders,
            tokensLentAmount[_tokenAddress][msg.sender]
        );
    }

    function borrow(address _tokenAddress, uint256 _amount) external {
        require(
            supportedTokens[_tokenAddress].supported,
            "Token not supported"
        );
        require(_amount > 0, "Amount must be greater than 0");

        uint256 totalAmountAvailableToBorrowUsd = getTotalAmountAvailableToBorrowUsd(
                msg.sender
            );
        uint256 borrowTokenAmountUsd = getTokenPriceInUsd(
            _amount,
            _tokenAddress
        );

        require(
            borrowTokenAmountUsd <= totalAmountAvailableToBorrowUsd,
            "Insufficient collateral"
        );

        if (_tokenAddress != ETHAddress) {
            IERC20 token = IERC20(_tokenAddress);

            require(
                token.balanceOf(address(this)) >= _amount,
                "Insufficient Token"
            );

            token.transfer(msg.sender, _amount);
        } else {
            require(address(this).balance >= _amount, "Insufficient Coin");

            payable(msg.sender).transfer(_amount);
        }

        //Library function isUserPresentIn
        (bool userPresent, int256 userIndex) = msg.sender.isUserPresentIn(
            borrowers
        );

        if (userPresent) {
            _updateUserTokensBorrowedOrLent(
                _tokenAddress,
                _amount,
                userIndex,
                "borrowers"
            );
        } else {
            borrowers.push(msg.sender);
            tokensBorrowedAmount[_tokenAddress][msg.sender] = _amount;
            tokensBorrowed[noOfTokensBorrowed++][msg.sender] = _tokenAddress;
        }

        emit Borrow(
            msg.sender,
            borrowTokenAmountUsd,
            totalAmountAvailableToBorrowUsd,
            userPresent,
            userIndex,
            borrowers,
            tokensBorrowedAmount[_tokenAddress][msg.sender]
        );
    }

    function payDebt(address _tokenAddress, uint256 _amount) external payable {
        require(
            supportedTokens[_tokenAddress].supported,
            "Token not supported"
        );

        uint256 amount = 0;
        if (_tokenAddress != ETHAddress) {
            amount = _amount;
        } else {
            amount = msg.value;
        }

        require(amount > 0, "Amount must be greater than 0");

        int256 index = msg.sender.indexOf(borrowers);

        require(index >= 0, "User not present in borrowers list");

        uint256 tokenBorrowed = tokensBorrowedAmount[_tokenAddress][msg.sender];

        require(tokenBorrowed > 0, "No debt to pay");

        if (_tokenAddress != ETHAddress) {
            IERC20 token = IERC20(_tokenAddress);

            token.transferFrom(
                msg.sender,
                address(this),
                _amount + interest(_tokenAddress, tokenBorrowed)
            );
        }

        tokensBorrowedAmount[_tokenAddress][msg.sender] -= _amount;

        // Checking if all total amount borrowed by a user = 0, then remove the user from borrowers list;
        if (getTotalAmountBorrowedUsd(msg.sender) == 0) {
            borrowers[uint256(index)] = borrowers[borrowers.length - 1];
            borrowers.pop();
        }

        emit PayDebt(
            msg.sender,
            index,
            tokenBorrowed,
            _amount + interest(_tokenAddress, tokenBorrowed),
            borrowers
        );
    }

    function withdraw(address _tokenAddress, uint256 _amount) external {
        require(
            supportedTokens[_tokenAddress].supported,
            "Token not supported"
        );

        require(_amount > 0, "Amount must be greater than 0");

        require(
            msg.sender.indexOf(lenders) >= 0,
            "User not present in lenders list"
        );

        uint totalTokenSuppliedInContract = getTotalTokenSupplied(
            _tokenAddress
        );
        uint totalTokenBorrowedInContract = getTotalTokenBorrowed(
            _tokenAddress
        );

        require(
            _amount <=
                (totalTokenSuppliedInContract - totalTokenBorrowedInContract),
            "Insufficient token supplied"
        );

        uint256 availableToWithdraw = getTokenAvailableToWithdraw(msg.sender);
        uint256 tokenToWithdrawUsd = getTokenPriceInUsd(_amount, _tokenAddress);

        require(
            tokenToWithdrawUsd <= availableToWithdraw,
            "Insufficient token available to withdraw"
        );

        uint256 aTokenToRemove = tokenToWithdrawUsd;
        uint256 aTokenBalance = aToken.balanceOf(msg.sender);

        if (aTokenToRemove <= aTokenBalance) {
            aToken.transferFrom(msg.sender, address(this), aTokenToRemove);
            aToken.burn(address(this), aTokenToRemove);
        } else {
            aToken.transferFrom(msg.sender, address(this), aTokenBalance);
            aToken.burn(address(this), aTokenBalance);
        }

        if (_tokenAddress != ETHAddress) {
            payable(msg.sender).transfer(_amount);
        } else {
            IERC20(_tokenAddress).transfer(msg.sender, _amount);
        }

        tokensLentAmount[_tokenAddress][msg.sender] -= _amount;

        if (getTotalAmountLentUsd(msg.sender) <= 0) {
            lenders[uint256(msg.sender.indexOf(lenders))] = lenders[
                lenders.length - 1
            ];
            lenders.pop();
        }

        emit Withdraw(
            msg.sender,
            _amount,
            tokenToWithdrawUsd,
            availableToWithdraw,
            getTotalAmountLentUsd(msg.sender),
            aTokenToRemove
        );
    }

    function liquidate(address _user, address _token, uint256 _amountToLiquidate) external {
        uint256 totalCollateral =  tokensLentAmount[_token][_user];
        uint256 totalBorrowed = tokensBorrowedAmount[_token][_user];

        uint256 totalCollateralValue = getTokenPriceInUsd(totalCollateral, _token);
        uint256 totalBorrowedValue = getTokenPriceInUsd(totalBorrowed, _token);

        require(totalCollateralValue > 0 && totalBorrowedValue > 0, "No collateral or debt to liquidate");
    
        uint256 collateralRatio = (totalCollateralValue * LIQUIDATION_THRESHOLD / 10000) / totalBorrowedValue;

        // Check if collateral ratio puts account below liquidation
        require(
            collateralRatio < LIQUIDATION_THRESHOLD,
            "Account not below liq threshold"
        );

        // Transfer aTokens to liquidator
        uint256 aTokenToRemove = getTokenPriceInUsd(_amountToLiquidate, _token);
        aToken.mint(msg.sender, aTokenToRemove);

        // Check if liquidator has enough tokens to liquidate
        if (_token != ETHAddress) {
            require(
                IERC20(_token).balanceOf(msg.sender) >= _amountToLiquidate,
                "Not enough tokens to liquidate"
            );
            IERC20(_token).transferFrom(msg.sender, address(this), _amountToLiquidate);
        } 

        // Transfer collateral to liquidator
        // uint256 tokenPrice = getTokenPriceInUsd(_amountToLiquidate, _token);

        emit Liquidation(
            _user,
            msg.sender,
            totalCollateral,
            collateralRatio
        );
    
    }

    // Admin Functions

    function addSupportedToken(
        address _tokenAddress,
        uint256 _LTV,
        uint256 _interestRate,
        address _tokenToUsdPriceFeed,
        bool _supported
    ) external onlyOwner {
        if (_supported) {
            require(
                !supportedTokens[_tokenAddress].supported,
                "Token already supported"
            );

            supportedTokens[_tokenAddress] = SupportedTokens({
                tokenAddress: _tokenAddress,
                LTV: _LTV,
                interestRate: _interestRate,
                tokenUsdPriceFeed: _tokenToUsdPriceFeed,
                supported: _supported
            });

            supportedTokenList.push(_tokenAddress);
        } else {
            require(
                supportedTokens[_tokenAddress].supported,
                "Token not in supported list"
            );
            supportedTokens[_tokenAddress].supported = false;

            int256 index = _tokenAddress.indexOf(supportedTokenList);
            
            supportedTokenList[uint256(index)] = supportedTokenList[
                supportedTokenList.length - 1
            ];
            supportedTokenList.pop();
            
        }
    }

    function updateLiquidationThreshold(uint256 _newThreshold)
        external
        onlyOwner
    {
        require(
            _newThreshold > 0,
            "Invalid liquidation threshold"
        );
        LIQUIDATION_THRESHOLD = _newThreshold;
    }

    // View Functions

    function getAllSupportedTokens() public view returns (address[] memory) {
        return supportedTokenList;
    }

    function getAllLenders() public view returns (address[] memory) {
        return lenders;
    }

    function getAllBorrowers() public view returns (address[] memory) {
        return borrowers;
    }

    function getTokenAvailableToWithdraw(
        address user
    ) public view returns (uint256) {
        uint256 totalAmountBorrowedUsd = getTotalAmountBorrowedUsd(user);

        uint remainingCollateral = 0;

        if (totalAmountBorrowedUsd > 0) {
            remainingCollateral = getRemainingCollateralUsd(user);
        } else {
            remainingCollateral = getTotalAmountLentUsd(user);
        }

        if (remainingCollateral < totalAmountBorrowedUsd) {
            return 0;
        }

        return remainingCollateral - totalAmountBorrowedUsd;
    }

    function getRemainingCollateralUsd(
        address _user
    ) public view returns (uint256) {
        uint256 remainingCollateralUsd = 0;
        for (uint256 i = 0; i < noOfTokensLent; i++) {
            address userLentTokenAddressFound = tokensLent[i][_user];

            if (
                userLentTokenAddressFound !=
                0x0000000000000000000000000000000000000000
            ) {
                uint256 tokenAmountLentUsd = getTokenPriceInUsd(
                    tokensLentAmount[userLentTokenAddressFound][_user],
                    userLentTokenAddressFound
                );

                remainingCollateralUsd +=
                    (tokenAmountLentUsd *
                        supportedTokens[userLentTokenAddressFound].LTV) /
                    10000;
            }
        }
        return remainingCollateralUsd;
    }

    function getTotalAmountBorrowedUsd(
        address _user
    ) public view returns (uint256) {
        uint256 totalAmountBorrowed = 0;

        for (uint256 i = 0; i < noOfTokensBorrowed; i++) {
            address userBorrowedTokenAddressFound = tokensBorrowed[i][_user];

            if (
                userBorrowedTokenAddressFound !=
                0x0000000000000000000000000000000000000000
            ) {

                uint256 tokenAmountBorrowedInDollars = getTokenPriceInUsd(
                    tokensBorrowedAmount[userBorrowedTokenAddressFound][_user],
                    userBorrowedTokenAddressFound
                );

                totalAmountBorrowed += tokenAmountBorrowedInDollars;
            }
        }
        return totalAmountBorrowed;
    }

    function getTotalAmountLentUsd(address _user) public view returns (uint256) {
        uint256 totalAmountLent = 0;
        for (uint256 i = 0; i < noOfTokensLent; i++) {
            if (
                tokensLent[i][_user] !=
                0x0000000000000000000000000000000000000000
            ) {
                uint256 tokenAmountLent = tokensLentAmount[tokensLent[i][_user]][
                    _user
                ];

                uint256 tokenAmountLentUsd = getTokenPriceInUsd(
                    tokenAmountLent,
                    tokensLent[i][_user]
                );

                totalAmountLent += tokenAmountLentUsd;
            }
        }
        return totalAmountLent;
    }

    function interest(
        address _tokenAddress,
        uint256 _tokenBorrowed
    ) public view returns (uint256) {
        return
            (_tokenBorrowed * supportedTokens[_tokenAddress].interestRate) /
            10000;
    }

    function getTotalAmountAvailableToBorrowUsd(
        address _user
    ) public view returns (uint256) {
        // uint256 totalAvailableToBorrow = 0;

        uint256 totalCollateralToBorrow = 0;
        uint256 totalCollateralAlreadyBorrowed = 0;

        // for (uint256 i = 0; i < lenders.length; i++) {
        //     address currentLender = lenders[i];
        // if (currentLender == user) {
        for (uint256 i = 0; i < supportedTokenList.length; i++) {
            address token = supportedTokenList[i];
            uint256 tokenAmountLent = tokensLentAmount[token][_user];
            uint256 tokenAmountLentUsd = getTokenPriceInUsd(
                tokenAmountLent,
                token
            );
            uint256 availableUsd = (tokenAmountLentUsd *
                supportedTokens[token].LTV) / 10000;

            totalCollateralToBorrow += availableUsd;
            //         }
            //     }
        }

        // for (uint256 i = 0; i < borrowers.length; i++) {
        //     address currentBorrower = borrowers[i];
        //     if (currentBorrower == user) {
        for (uint256 i = 0; i < supportedTokenList.length; i++) {
            address token = supportedTokenList[i];
            uint256 tokenAmountBorrowed = tokensBorrowedAmount[token][_user];
            uint256 tokenAmountBorrowedUsd = getTokenPriceInUsd(
                tokenAmountBorrowed,
                token
            );

            totalCollateralAlreadyBorrowed += tokenAmountBorrowedUsd;
            //     }
            // }
        }

        return totalCollateralToBorrow - totalCollateralAlreadyBorrowed;
    }

    function getTokenPriceInUsd(
        uint256 _amount,
        address _tokenAddress
    ) public view returns (uint256) {
        (uint256 usdPerToken, ) = tokenToUsd(_tokenAddress);
        uint256 totalAmountInUsd = (_amount * (usdPerToken * 10 ** 10))/ 10 ** 18;
        return totalAmountInUsd;
    }

    function tokenToUsd(address _token) public view returns (uint256, uint256) {
        address _priceFeed = supportedTokens[_token].tokenUsdPriceFeed;
        AggregatorV3Interface priceFeed = AggregatorV3Interface(_priceFeed);

        (, int256 price, , , ) = priceFeed.latestRoundData();

        uint256 decimals = priceFeed.decimals();

        return (uint256(price), decimals);
    }

    function hasLentOrBorrowedToken(
        address _currentUser,
        address _tokenAddress,
        uint256 _noOfTokenslentOrBorrowed,
        string memory _tokensLentOrBorrowed
    ) public view returns (bool) {
        if (_noOfTokenslentOrBorrowed > 0) {
            if (
                keccak256(abi.encodePacked(_tokensLentOrBorrowed)) ==
                keccak256(abi.encodePacked("tokensLent"))
            ) {
                for (uint256 i = 0; i < noOfTokensLent; i++) {
                    address tokenAddressFound = tokensLent[i][_currentUser];
                    if (tokenAddressFound == _tokenAddress) {
                        return true;
                    }
                }
            } else if (
                keccak256(abi.encodePacked(_tokensLentOrBorrowed)) ==
                keccak256(abi.encodePacked("tokensBorrowed"))
            ) {
                for (uint256 i = 0; i < noOfTokensBorrowed; i++) {
                    address tokenAddressFound = tokensBorrowed[i][_currentUser];
                    if (tokenAddressFound == _tokenAddress) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    function getTotalTokenSupplied(
        address _tokenAddres
    ) public view returns (uint256) {
        uint256 totalTokenSupplied = 0;
        if (lenders.length > 0) {
            for (uint256 i = 0; i < lenders.length; i++) {
                totalTokenSupplied += tokensLentAmount[_tokenAddres][lenders[i]];
            }
        }

        return totalTokenSupplied;
    }

    function getTotalTokenBorrowed(
        address _tokenAddres
    ) public view returns (uint256) {
        uint256 totalTokenBorrowed = 0;
        if (borrowers.length > 0) {
            for (uint256 i = 0; i < borrowers.length; i++) {
                totalTokenBorrowed += tokensBorrowedAmount[_tokenAddres][
                    borrowers[i]
                ];
            }
        }
        return totalTokenBorrowed;
    }

    // Private Functions

    function _updateUserTokensBorrowedOrLent(
        address _tokenAddres,
        uint256 _amount,
        int256 userIndex,
        string memory lendersOrBorrowers
    ) private {
        if (
            keccak256(abi.encodePacked(lendersOrBorrowers)) ==
            keccak256(abi.encodePacked("lenders"))
        ) {
            address currentUser = lenders[uint256(userIndex)];

            if (
                hasLentOrBorrowedToken(
                    currentUser,
                    _tokenAddres,
                    noOfTokensLent,
                    "tokensLent"
                )
            ) {
                tokensLentAmount[_tokenAddres][currentUser] += _amount;
            } else {
                tokensLent[noOfTokensLent++][currentUser] = _tokenAddres;
                tokensLentAmount[_tokenAddres][currentUser] = _amount;
            }
        } else if (
            keccak256(abi.encodePacked(lendersOrBorrowers)) ==
            keccak256(abi.encodePacked("borrowers"))
        ) {
            address currentUser = borrowers[uint256(userIndex)];

            if (
                hasLentOrBorrowedToken(
                    currentUser,
                    _tokenAddres,
                    noOfTokensBorrowed,
                    "tokensBorrowed"
                )
            ) {
                tokensBorrowedAmount[_tokenAddres][currentUser] += _amount;
            } else {
                tokensBorrowed[noOfTokensBorrowed++][
                    currentUser
                ] = _tokenAddres;
                tokensBorrowedAmount[_tokenAddres][currentUser] = _amount;
            }
        }
    }
}
