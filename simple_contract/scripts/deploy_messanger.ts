import { ethers } from "hardhat";

async function messager() {
    const [deployer] = await ethers.getSigners();

    const Messanger = await ethers.getContractFactory('Messanger');
    const messanger = await Messanger.deploy();

    console.log("Messanger.address", messanger.address);
}
messager()
.then(()=> process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})