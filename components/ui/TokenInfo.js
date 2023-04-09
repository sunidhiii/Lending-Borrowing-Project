import { todp } from "../../utils/todp";
import { useState } from "react";
import ModalBorrow from "./ModalBorrow";
import ModalSupply from "./ModalSupply";
import ERC20 from "../../abis/ADE.json";
import LARToken from "../../abis/LARToken.json";
import { trackPromise } from "react-promise-tracker";

export default function TokenInfo({
  token,
  actualAvailable,
  web3,
  contract,
  account,
  yourSupplies,
  yourBorrows,
}) {
  const IMAGES = {
    USDT: "https://staging.aave.com/icons/tokens/usdt.svg",
    ETH: "https://staging.aave.com/icons/tokens/eth.svg",
    LAR: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZs8PLHRLaGd4QfIvOYmCg30svx5dHp0y6A&usqp=CAU",
  };

  const [selectedTokenToSupply, setSelectedTokenToSupply] = useState(null);
  const [selectedTokenToBorrow, setSelectedTokenToBorrow] = useState(null);

  const [supplyError, setSupplyError] = useState(null);
  const [supplyResult, setSupplyResult] = useState(null);

  const [borrowingError, setBorrowingError] = useState(null);
  const [borrowingResult, setBorrowingResult] = useState(null);

  const handleCloseModal = () => {
    setSupplyError(null);
    setSupplyResult(null);
    setBorrowingError(null);
    setBorrowingResult(null);
    setSelectedTokenToSupply(null);
    setSelectedTokenToBorrow(null);
  };

  const supplyToken = async (token, value) => {
    let NETWORK_ID = await web3.eth.net.getId();

    if (token.tokenAddress == "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE") {
      try {
        const supplyResult = await trackPromise(
          contract.methods
            .lend(token.tokenAddress, 0)
            .send({
              from: account.data,
              value: web3.utils.toWei(value.toString()),
            })
        );

        setSupplyResult(supplyResult);
      } catch (err) {
        setSupplyError(err);
      }
    } else {
      const tokenInst = new web3.eth.Contract(ERC20.abi, token.tokenAddress);
      // const larToken = new web3.eth.Contract(
      //   ERC20.abi,
      //   LARToken.networks[NETWORK_ID].address
      // );

      const amount = value.toString() * 10 ** token.decimals;

      try {
        await trackPromise(
          tokenInst.methods
            .approve(
              contract.options.address,
              amount
            )
            .send({ from: account.data })
        );

        const supplyResult = await trackPromise(
          contract.methods
            .lend(tokenInst.options.address, amount)
            .send({ from: account.data })
        );

        // const larTokenBalance = await larToken.methods
        //   .balanceOf(account.data)
        //   .call();

        // await trackPromise(
        //   larToken.methods
        //     .approve(contract.options.address, toWei(larTokenBalance))
        //     .send({ from: account.data })
        // );

        setSupplyResult(supplyResult);
      } catch (err) {
        setSupplyError(err);
      }
    }
  };

  const borrowToken = async (token, value) => {
    setBorrowingError(null);
    setBorrowingResult(null);

    value = parseFloat(value).toFixed(12);
    
    const amount = value.toString() * 10 ** token.decimals;

    try {
      const borrowingResult = await trackPromise(
        contract.methods
          .borrow(token.tokenAddress, amount)
          .send({ from: account.data })
      );
      setBorrowingResult(borrowingResult);
    } catch (err) {
      setBorrowingError(err);
    }
  };

  const addTokenToMetamask = async (token) => {
    const tokenAddress = token.tokenAddress;
    const tokenSymbol = token.name;
    const tokenDecimals = token.decimals;
    const tokenImage = IMAGES[token.name];

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        // Added
      } else {
        // Not Added
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addATK = async (token) => {
    let NETWORK_ID = await web3.eth.net.getId();
    const larToken = new web3.eth.Contract(
      ERC20.abi,
      LARToken.networks[NETWORK_ID].address
    );

    const tokenAddress = larToken.options.address;
    const tokenSymbol = "LAR";
    const tokenDecimals = 18;
    const tokenImage = IMAGES["LAR"];

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        // Added
      } else {
        // Not Added
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words px-4 bg-white w-full mb-6 shadow-lg rounded">
      <div className="rounded-t mb-0 py-3 border-0">
        <div className="flex flex-wrap">
          <div className="relative w-full  max-w-full">
            <p className="font-bold text-lg">Your Info</p>
          </div>
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right"></div>
        </div>
      </div>

      <div className="block w-full overflow-x-auto ">
        <div className="flex sm:flex-row flex-col mb-8 pb-2  border-gray-300">
          <div className="flex w-full flex-col">
            <div className="flex w-full py-8 justify-between">
              <p className="text-gray-500 text-sm sm:text-base">
                Wallet Balance
              </p>
              <div className="flex flex-col">
                <p className="font-medium text-sm sm:text-base">
                  {todp(token.walletBalance.amount, 4)} {token.name}
                </p>
                <p className="font-medium text-gray-500 text-sm">
                  ${todp(token.walletBalance.inDollars, 4)}{" "}
                </p>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <p className="text-gray-500 text-sm sm:text-base">
                Available to Supply
              </p>
              <p className="font-medium text-sm sm:text-base">
                {todp(token.walletBalance.amount, 4)} {token.name}
              </p>
            </div>
            <div className="flex w-full py-2 justify-between">
              <p className="text-gray-500 text-sm sm:text-base">
                Available to Borrow
              </p>
              <p className="font-medium text-sm sm:text-base">
                {" "}
                {todp(actualAvailable, 4)} {token.name}
              </p>
            </div>
            <div className="flex w-full pt-8">
              <button
                onClick={() => setSelectedTokenToSupply(token)}
                className="bg-blue-400 text-white p-2 rounded-md text-base"
              >
                Supply
              </button>
              <button
                onClick={() => setSelectedTokenToBorrow(token)}
                className="bg-blue-400 text-white ml-2 p-2 rounded-md text-base"
              >
                Borrow
              </button>
            </div>

            <div className="flex justify-center text-center sm:block sm:p-0 mt-2">
              {selectedTokenToSupply && (
                <ModalSupply
                  token={selectedTokenToSupply}
                  supplyError={supplyError}
                  supplyResult={supplyResult}
                  addATK={addATK}
                  closeModal={handleCloseModal}
                  onSupply={supplyToken}
                />
              )}

              {selectedTokenToBorrow && (
                <ModalBorrow
                  token={selectedTokenToBorrow}
                  closeModal={handleCloseModal}
                  balance={yourSupplies.data?.yourBalance}
                  onBorrow={borrowToken}
                  borrowingError={borrowingError}
                  borrowingResult={borrowingResult}
                  addBorrowedToken={addTokenToMetamask}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
