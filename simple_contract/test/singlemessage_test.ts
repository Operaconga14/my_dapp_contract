const { expect } = require('chai');
import { ethers } from "hardhat";

describe('SingleMessage', () => {
    it('Should update message', async () => {
        const SingleMessage = await ethers.getContractFactory('SingleMessage');
        const singlemessage = await SingleMessage.deploy();

        await singlemessage.deployed();
        expect(await singlemessage.updateMessage('Hello, How are you'));
    })
    it('Should read message', async () => {
        const SingleMessage = await ethers.getContractFactory('SingleMessage');
        const singlemessage = await SingleMessage.deploy();

        await singlemessage.deployed();
        expect(await singlemessage.readMessage());
    })
})