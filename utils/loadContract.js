import LendingAndBorrowing from '../abis/LendingAndBorrowing.json'


export const loadContract = async (contractName, web3) => {
 const NETWORK_ID = await web3.eth.net.getId();
 const Artifact = LendingAndBorrowing;
 const lendingBorrowing = LendingAndBorrowing.networks[NETWORK_ID]

  let contract = null;

  try {

    // console.log("lendingBorrowing", lendingBorrowing.address);

    contract = new web3.eth.Contract(
     Artifact.abi,
     lendingBorrowing.address
    );

    // console.log("contract", contract);

  }
  catch (err) {
   console.log("This is the error")
    console.error(err);
  }

  return contract;
};
