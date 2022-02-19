require('@nomiclabs/hardhat-waffle')

//Configured local dev environment
module.exports = {
  solidity: '0.8.4',
  networks: {
    hardhat: {
      chainId: 1337
    },
    //these will be used for deployment later on
    mumbai: {
      url: 'https://rpc-mumbai.matic.today',
      accounts: [process.env.pk]
    }
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   accounts: [process.env.pk]
    // }
  }
}
