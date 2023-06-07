import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Token', () => {
    it('Should get Token details', async () => {
        const Token = await ethers.getContractFactory('Token');
        const token = await Token.deploy();

        await token.deployed();
        expect(await token.getTokenDetails('Opether', 'OPTH', 10*18,))
    })

    it('Should return Token Details', async () => {
        const Token = await ethers.getContractFactory('Token');
        const token = await Token.deploy();

        await token.deployed()
        expect(await token.returnTokenDetails())
    })
})