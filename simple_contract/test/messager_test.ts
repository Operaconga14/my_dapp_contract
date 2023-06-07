import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Messanger', () => {
    it('Should update subject and message', async () => {
        const Messanger = await ethers.getContractFactory('Messanger');
        const messanger = await Messanger.deploy();

        await messanger.deployed();
        expect(await messanger.updateMessage('Hello', 'How are You'));
    }),
    it('Shoud read subject and message', async () => {
        const Messanger = await ethers.getContractFactory('Messanger');
        const messanger = await Messanger.deploy();

        await messanger.deployed();
        expect(await messanger.readMessage());
    })
})