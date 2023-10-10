# Crypto Zombies Smart Contract

This README provides an overview of the Crypto Zombies project, which includes the Solidity smart contract and associated components.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Smart Contract](#smart-contract)

## 1. Introduction

Crypto Zombies is a decentralized application (DApp) built on the Ethereum blockchain. The project allows users to create and collect unique digital zombies, represented as non-fungible tokens (NFTs). These NFT zombies are stored and managed using a Solidity smart contract.

## 2. Prerequisites

Before you get started with Crypto Zombies, ensure you have the following prerequisites:

- Node.js and npm installed
- Truffle framework installed (for local development and testing)
- An Ethereum wallet (e.g., MetaMask) to interact with the DApp

## 3. Installation

To set up the Crypto Zombies project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/agaskrobot/crypto-zombies.git

2. Navigate to the project directory:

   ```bash
   cd crypto-zombies

3. Install the project dependencies:

   ```bash
   npm install

## 4. Usage

To run the Crypto Zombies DApp locally for development purposes, follow these steps:

1. Create new project in infura and paste your PROJECT_ID in .env

2. Compile the smart contract:

   ```bash
   truffle compile

3. Migrate the smart contract to the mumbai network:
   
     ```bash
   truffle migrate --network mumbai

## 5. Smart Contract

The heart of the Crypto Zombies project is the Solidity smart contract, which handles the creation, ownership, and management of zombies. The smart contract can be found in the `contracts` directory.

### Key Functions:

- `createRandomZombie(string memory _name)`: Allows users to create a random zombie with the given name.

- `getZombiesByOwner(address _owner)`: Retrieves a list of zombies owned by a specific Ethereum address.
