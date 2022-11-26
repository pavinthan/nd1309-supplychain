const HDWalletProvider = require("truffle-hdwallet-provider");

const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();
const infuraKey = fs.readFileSync(".infura").toString().trim();

module.exports = {
	networks: {
		development: {
			host: "127.0.0.1",
			port: 8545,
			network_id: "*", // Match any network id
		},
		rinkeby: {
			provider: () =>
				new HDWalletProvider(
					mnemonic,
					`https://rinkeby.infura.io/v3/${infuraKey}`
				),
			network_id: 4, // rinkeby's id
			gas: 5500000, // rinkeby has a lower block limit than mainnet
			confirmations: 2, // # of confs to wait between deployments. (default: 0)
			timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
			skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
		},
	},
	// Configure your compilers
	compilers: {
		solc: {
			version: "^0.8.16", // Fetch exact version from solc-bin (default: truffle's version)
		},
	},
};
