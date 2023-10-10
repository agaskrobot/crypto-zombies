const CryptoZombies = artifacts.require("ZombieOwnership");

module.exports = function(deployer) {
  deployer.deploy(CryptoZombies);
};
