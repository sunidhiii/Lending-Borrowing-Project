import useSWR from "swr";
import { normalizeToken } from "../../../../utils/normalize"

const NETWORKS = {
  1: "Ethereum Main Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  1337: "Ganache",
  11155111: "Sepolia Test Network"
};


export const handler = (web3, contract) => () => {


  const { data, error, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/supply_assets" : null),
    async () => {

      const supplyAssets = []

      const tokens = await contract.methods.getAllSupportedTokens().call()
      console.log("currentToken", tokens);

      for (let i = 0; i < tokens.length; i++){
        const currentToken = tokens[i]
        const currentTokenObj = await contract.methods.supportedTokens(currentToken).call();

      console.log("currentTokenObj", currentTokenObj);



        const newToken = await normalizeToken(web3, contract, currentTokenObj)

        supplyAssets.push(newToken)


      }

      return supplyAssets
    }
  );

  const targetNetwork = NETWORKS["5"];


  return {
    data,
    error,
    ...rest,
    target: targetNetwork,
    isSupported: data === targetNetwork,
  };
};

/**

web3.eth.net.getId() will return the network id on ganache itself
web3.eth.getChainId() will return the chainId of ganache in metamask.

chainChanged event listens with web3.eth.getChainId()


 */
