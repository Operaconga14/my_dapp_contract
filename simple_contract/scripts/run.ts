import { ethers } from "hardhat";

const main = async () => {
    const [owner, deployer] = await ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());
  
    const WavePortal = await ethers.getContractFactory('WavePortal');
    const waveportal = await WavePortal.deploy();
    await waveportal.deployed();

    console.log('Contract deployed to: ', waveportal.address);
    console.log("Contract deployed to: ", owner.address);

};
main()
.then(()=> process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})