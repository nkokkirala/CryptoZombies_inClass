var HelloEthSalon = artifacts.require("./HelloEthSalon.sol");

contract("HelloEthSalon:GetMessage", function (accounts) {
  it("HelloEthSalon:GetMessage", async function () {
    const contract = await HelloEthSalon.deployed();
    const result = await contract.GetMessage.call();
    assert.isTrue(result === "Hello Ethereum Salon!");
  });
});
