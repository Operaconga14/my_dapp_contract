import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts) {
    console.log(account.address);
  }
})

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
     
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: []
    }
  }
};

export default config;
