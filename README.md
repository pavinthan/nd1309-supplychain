# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## UML diagrams

### Assets

1. Coffee

### Actors

1. Farmer
   The Farmer can harvest coffee beans, process coffee beans, pack coffee palettes, add coffee palettes, ship coffee palettes, and track authenticity.

2. Distributor
   The Distributor can buy coffee palettes and track authenticity.

3. Retailer
   The Retailer can receive coffee palettes and track authenticity.

4. Consumer
   The consumer can buy coffee palettes and track authenticity.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Nodejs: v16.17.0
NPM: 8.11.0
Truffle: v5.5.29 (core: 5.5.29)
Ganache: v7.4.1 (@ganache/cli: 0.5.1, @ganache/core: 0.5.1)
Solidity: ^0.8.16
```

### Installing

> The starter code is written for **Solidity v0.8.16**. At the time of writing, the current Truffle v5 comes with Solidity v0.5 (please refer to Solidity [documentation](https://docs.soliditylang.org/en/v0.8.16/080-breaking-changes.html) for more details). To use this starter code, please run `npm i -g truffle@5.5.29` to install Truffle v5 with Solidity v0.5.16.

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/pavinthan/nd1309-starnotary
```

Change directory to `project-6` folder and install all requisite npm packages (as listed in `package.json`):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder `build\contracts`.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

- [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
- [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
  to make the web faster, safer, and more open.
- [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.

## Authors

See also the list of [contributors](https://github.com/pavinthan/nd1309-starnotary/contributors.md) who participated in this project.

## Acknowledgments

- Solidity
- Ganache
- Truffle
- IPFS
