const {expect} = require('chai');
import { ethers } from 'hardhat'

describe('Storage', () => {
    it('Should update data', async function() {
        const Storage = await ethers.getContractFactory('Storage');
        const storage = await Storage.deploy();

        await storage.deployed();
        expect(await storage.updateData(10));
    })
    it('Should readData', async () => {
        const Storage = await ethers.getContractFactory('Storage');
        const storage = await Storage.deploy();

        await storage.deployed();
        expect(await storage.readData());
    })
})
