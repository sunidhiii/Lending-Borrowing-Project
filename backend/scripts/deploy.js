// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  const totaSupply = hre.ethers.utils.parseEther("100000000");

  const TokenContract = await hre.ethers.getContractFactory("Token");
  const token = await TokenContract.deploy(totaSupply);
  await token.deployed();

  console.log(
    `Token with ${ethers.utils.formatEther(
      totaSupply
    )} total supply deployed to ${token.address}`
  );

  const LendingContract = await hre.ethers.getContractFactory("LendingAndBorrowing");
  const lending = await LendingContract.deploy(token.address);
  await lending.deployed();

  console.log(`Lending deployed to ${lending.address}`);

  const minterRole = await token.MINTER_ROLE();

  const setMinter = await token.grantRole(minterRole, lending.address);

  console.log(`${minterRole} role granted to ${lending.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
