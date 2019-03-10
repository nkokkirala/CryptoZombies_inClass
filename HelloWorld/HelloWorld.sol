pragma solidity ^0.4.25;

contract HelloWorld {
    string public message;
    
    constructor(string initMessage) public {
        message = initMessage;
    }

    function update(string newMessage) public {
        message = newMessage;
    }
}
