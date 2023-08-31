require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');



module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    mumbai: {
      provider: () => new HDWalletProvider({
        privateKeys: [process.env.privateKeys],
        providerOrUrl: process.env.PROJECT_ENDPOINT,
      }),
      network_id: 80001,
      networkCheckTimeout: 10000,
      timeoutBlocks: 200
      // gas: 4500000,
      // gasPrice: 10000000000,
    },
  },
  plugins: ['truffle-plugin-verify'],
  api_keys:{
    polygonscan:"8CF62HG6EYZD1UAQ5N3HPV7DF1F9S32R2G"
  },
  compilers: {
    solc: {
      version: "0.8.13"
    },
  },
};
