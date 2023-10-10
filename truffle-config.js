require("dotenv").config();
const { MNEMONIC, PROJECT_ID } = process.env;

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    mumbai: {
      provider: function () {
        return new HDWalletProvider(
          MNEMONIC,
          `https://polygon-mumbai.infura.io/v3/${PROJECT_ID}`
        );
      },
      network_id: 80001,
    },
  },

  mocha: {},

  compilers: {
    solc: {
      version: "0.8.13",
    },
  },
};
