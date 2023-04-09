import ade from "../abis/ADE.json";
import usdt from "../assets/usdt.png";
import eth from "../assets/eth.png";
import { useAccount } from "../components/hooks/web3";

const tokenImages = {
  USDT: usdt,
  ETH: eth,
};

export const normalizeToken = async (web3, contract, currentToken) => {
  const fromWei = (amount, decimals) => {
    // return web3.utils.fromWei(amount);
    return amount / 10 ** parseInt(decimals)
  };

  const toBN = (amount) => {
    return web3.utils.toBN(amount);
  };

  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  var decimals;
  var walletBalance;

  if (
    currentToken.tokenAddress == "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
  ) {
    decimals = "18";

    walletBalance = await web3.eth.getBalance(account);
  } else {
    const tokenInst = new web3.eth.Contract(ade.abi, currentToken.tokenAddress);

    decimals = "6";

    walletBalance = await tokenInst.methods.balanceOf(account).call();
  }

  console.log("Balance", walletBalance);

  const totalSuppliedInContract = await contract.methods
    .getTotalTokenSupplied(currentToken.tokenAddress)
    .call();

  const totalBorrowedInContract = await contract.methods
    .getTotalTokenBorrowed(currentToken.tokenAddress)
    .call();
  const utilizationRate =
    (Number(totalBorrowedInContract) * 100) / Number(totalSuppliedInContract);

  const userTokenBorrowedAmount = await contract.methods
    .tokensBorrowedAmount(currentToken.tokenAddress, account)
    .call();
  const userTokenLentAmount = await contract.methods
    .tokensLentAmount(currentToken.tokenAddress, account)
    .call();

  const userTotalAmountAvailableToWithdrawInDollars = await contract.methods
    .getTokenAvailableToWithdraw(account)
    .call();

  const userTotalAmountAvailableForBorrowInDollars = await contract.methods
    .getTotalAmountAvailableToBorrowUsd(account)
    .call();

  const walletBalanceInDollars = await contract.methods
    .getTokenPriceInUsd(walletBalance, currentToken.tokenAddress)
    .call();
  const totalSuppliedInContractInDollars = await contract.methods
    .getTokenPriceInUsd(totalSuppliedInContract, currentToken.tokenAddress)
    .call();
  const totalBorrowedInContractInDollars = await contract.methods
    .getTokenPriceInUsd(totalBorrowedInContract, currentToken.tokenAddress)
    .call();
  const userTokenBorrowedAmountInDollars = await contract.methods
    .getTokenPriceInUsd(userTokenBorrowedAmount, currentToken.tokenAddress)
    .call();

  const userTokenLentAmountInDollars = await contract.methods
    .getTokenPriceInUsd(userTokenLentAmount, currentToken.tokenAddress)
    .call();

  const availableAmountInContract = toBN(totalSuppliedInContract)
    .sub(toBN(totalBorrowedInContract))
    .toString();

  const availableAmountInContractInDollars = await contract.methods
    .getTokenPriceInUsd(availableAmountInContract, currentToken.tokenAddress)
    .call();

  const result = await contract.methods
    .tokenToUsd(currentToken.tokenAddress)
    .call();
  const price = result[0];
  const decimal = result[1];

  const oneTokenToDollar = parseFloat(price) / 10 ** parseInt(decimal);

  var tokenName;

  if (
    currentToken.tokenAddress == "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
  ) {
    tokenName = "ETH";
  } else {
    tokenName = "USDT";
  }

  return {
    name: tokenName,
    image: tokenImages[tokenName],
    tokenAddress: currentToken.tokenAddress,
    userTotalAmountAvailableToWithdrawInDollars: fromWei(
      userTotalAmountAvailableToWithdrawInDollars, decimals
    ),
    userTotalAmountAvailableForBorrowInDollars: fromWei(
      userTotalAmountAvailableForBorrowInDollars, decimals
    ),
    walletBalance: {
      amount: fromWei(walletBalance, decimals),
      inDollars: fromWei(walletBalanceInDollars, decimals),
    },
    totalSuppliedInContract: {
      amount: fromWei(totalSuppliedInContract, decimals),
      inDollars: fromWei(totalSuppliedInContractInDollars, decimals),
    },
    totalBorrowedInContract: {
      amount: fromWei(totalBorrowedInContract, decimals),
      inDollars: fromWei(totalBorrowedInContractInDollars, decimals),
    },
    availableAmountInContract: {
      amount: fromWei(availableAmountInContract, decimals),
      inDollars: fromWei(availableAmountInContractInDollars, decimals),
    },
    userTokenBorrowedAmount: {
      amount: fromWei(userTokenBorrowedAmount, decimals),
      inDollars: fromWei(userTokenBorrowedAmountInDollars, decimals),
    },
    userTokenLentAmount: {
      amount: fromWei(userTokenLentAmount, decimals),
      inDollars: fromWei(userTokenLentAmountInDollars, decimals),
    },
    LTV: currentToken.LTV/100,
    borrowAPYRate: currentToken.interestRate/100,
    utilizationRate: utilizationRate,
    oneTokenToDollar,
    decimals:decimals,
  };
};
