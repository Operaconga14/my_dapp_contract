// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Storage {
    
    uint data;

    function updateData(uint _data) external {
        data = _data;
    }

    function readData() public view returns (uint) {
        return data;
    }
}