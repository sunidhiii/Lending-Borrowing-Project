import atk from "../abis/USDT.json";
import usdt from "../assets/usdt.png";
import weth from "../assets/weth.svg";
import { useAccount } from "../components/hooks/web3";

const tokenImages = {
  USDT: usdt,
  ETH: weth,
};

export const normalizeToken = async (web3, contract, currentToken) => {
  const fromWei = (amount) => {
    return web3.utils.fromWei(amount);
 };

 const toBN = (amount) => {
  return web3.utils.toBN(amount);
};


 const accounts = await web3.eth.getAccounts();
 const account = accounts[0];


  const tokenInst = new web3.eth.Contract(atk.abi, currentToken.tokenAddress);

  const decimals = await tokenInst.methods.decimals().call()

  const walletBalance = await tokenInst.methods.balanceOf(account).call();

  console.log("walletBalance", walletBalance);

  const totalSuppliedInContract = await contract.methods.getTotalTokenSupplied(currentToken.tokenAddress).call();

  const totalBorrowedInContract = await contract.methods.getTotalTokenBorrowed(currentToken.tokenAddress).call();
  const utilizationRate = (Number(totalBorrowedInContract) * 100) / Number(totalSuppliedInContract);

  const userTokenBorrowedAmount = await contract.methods.tokensBorrowedAmount(currentToken.tokenAddress,account).call();
  const userTokenLentAmount = await contract.methods.tokensLentAmount(currentToken.tokenAddress,account).call();


  const userTotalAmountAvailableToWithdrawInDollars = await contract.methods.getTokenAvailableToWithdraw(account).call();

  const userTotalAmountAvailableForBorrowInDollars = await contract.methods.getTotalAmountAvailableToBorrowUsd(account).call();


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


  const userTokenLentAmountInDollars = await contract.methods.getTokenPriceInUsd(userTokenLentAmount, currentToken.tokenAddress).call();

  const availableAmountInContract = (toBN(totalSuppliedInContract).sub(toBN(totalBorrowedInContract))).toString()

  const availableAmountInContractInDollars = await contract.methods.getTokenPriceInUsd(availableAmountInContract, currentToken.tokenAddress).call();

  const result = await contract.methods.tokenToUsd(currentToken.tokenAddress).call()
  const price = result[0]
  const decimal = result[1]


  const oneTokenToDollar = parseFloat(price) / (10 ** parseInt(decimal))
  
  var tokenName;

  if(currentToken.tokenAddress == '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')
  {
    tokenName = "ETH";
  } else {
    tokenName = "USDT"
  }

  return {
    name: tokenName,
    image: tokenImages[tokenName],
    tokenAddress: currentToken.tokenAddress,
    userTotalAmountAvailableToWithdrawInDollars: fromWei(userTotalAmountAvailableToWithdrawInDollars),
    userTotalAmountAvailableForBorrowInDollars: fromWei(userTotalAmountAvailableForBorrowInDollars),
    walletBalance: {
      amount: fromWei(walletBalance),
      inDollars: fromWei(walletBalanceInDollars),
    },
    totalSuppliedInContract: {
      amount: fromWei(totalSuppliedInContract),
      inDollars: fromWei(totalSuppliedInContractInDollars),
    },
    totalBorrowedInContract: {
      amount: fromWei(totalBorrowedInContract),
      inDollars: fromWei(totalBorrowedInContractInDollars),
    },
    availableAmountInContract: {
      amount: fromWei(availableAmountInContract),
      inDollars: fromWei(availableAmountInContractInDollars),
    },
    userTokenBorrowedAmount: {
      amount: fromWei(userTokenBorrowedAmount),
      inDollars: fromWei(userTokenBorrowedAmountInDollars),
    },
    userTokenLentAmount: {
      amount: fromWei(userTokenLentAmount),
      inDollars: fromWei(userTokenLentAmountInDollars),
    },
    LTV: web3.utils.fromWei(currentToken.LTV),
    borrowAPYRate: web3.utils.fromWei(currentToken.interestRate),
    utilizationRate: utilizationRate,
    oneTokenToDollar,
    decimals
  };
};
