// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Token {

    string name;
    string symbol;
    uint8 decimals = 18;
    uint256 totalSupply;

    function getTokenDetails(string memory _name, string memory _symbol, uint256 _totalSupply) public {
        name = _name;
        symbol = _symbol;
        decimals;
        totalSupply = _totalSupply;
    }

    function returnTokenDetails() public view returns (string memory, string memory, uint8, uint256) {
        return (name, symbol, decimals, totalSupply);
    }    
}