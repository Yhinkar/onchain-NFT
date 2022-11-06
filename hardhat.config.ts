import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();


module.exports = {
  solidity:"0.8.10",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: process.env.TESNET_RPC,
      accounts: [process.env.PRIVATE_KEY],
    }
  },

  etherscan: {
    apiKey: process.env.POLYGON_API_KEY
  },
};