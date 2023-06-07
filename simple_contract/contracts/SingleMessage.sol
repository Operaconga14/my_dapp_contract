// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract SingleMessage {
   string message;

   function updateMessage(string memory _message) public {
    message = _message;
   }

   function readMessage() public view returns (string memory) {
    return message;
   }
}