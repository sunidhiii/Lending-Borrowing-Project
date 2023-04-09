require('@nomiclabs/hardhat-waffle')

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

const privateKey = "80a23ec96849eb42998ea20bc35e064f511767ecbfb434de95b94759402a1e1a";
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  settings: {
    optimizer: {
      enabled: true,
      runs: 20
    }
  },
  paths: {
    sources: './contracts',
    artifacts: '../frontend/src/artifacts',
    tests: './test',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      chainId: 5777,
      url: 'http://127.0.0.1:7545',
    },
    goerli: {
      url: "https://goerli.infura.io/v3/4ad3756007194423a6a5dcabdbf8e53f",
      accounts: [privateKey],
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [privateKey],
    },
    // rinkeby: {
    //   url: process.env.DEPLOY_KEY_RINKEBY,
    //   accounts: [process.env.DEPLOY_ACC_RINKEBY],
    // },
  },
}
