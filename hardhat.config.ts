import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import dotenv from 'dotenv'
import 'dotenv/config'
import 'hardhat-typechain'
import 'hardhat-watcher'
dotenv.config()

const DEFAULT_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    thanossepolia: {
      url: `https://rpc.thanos-sepolia.tokamak.network`,
      chainId: 111551119090,
    },
    thanossepolianightly:{
	    url: 'https://rpc.thanos-sepolia-nightly.tokamak.network',
	    chainId: 111551118282,
    },
    titansepolia:{
      url: `https://rpc.titan-sepolia.tokamak.network`,
      chainId: 55007
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    arbitrumRinkeby: {
      url: `https://rinkeby.arbitrum.io/rpc`,
    },
    arbitrum: {
      url: `https://arb1.arbitrum.io/rpc`,
    },
    optimismKovan: {
      url: `https://kovan.optimism.io`,
    },
    optimism: {
      url: `https://mainnet.optimism.io`,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      thanossepolia: "xxdfasdfadsfsdfsd9x",
      thanossepolianightly: "xxdfasdfadsfsdfsd9x",
      titansepolia: process.env.ETHERSCAN_API_KEY,
      
    },
    customChains: [
      {
        network: 'thanossepolia',
        chainId: 111551119090,
        urls: {
          apiURL: 'https://explorer.thanos-sepolia.tokamak.network/api',
          browserURL: 'https://explorer.thanos-sepolia.tokamak.network/',
        },
      },
      {
        network: 'thanossepolianightly',
        chainId: 111551118282,
        urls: {
          apiURL: 'https://explorer.thanos-sepolia-nightly.tokamak.network/api',
          browserURL: 'https://explorer.thanos-sepolia-nightly.tokamak.network/',
        },
      },
      {
        network: 'titansepolia',
        chainId: 55007,
        urls: {
          apiURL: 'https://explorer.titan-sepolia.tokamak.network/api',
          browserURL: 'https://explorer.titan-sepolia.tokamak.network/',
        }
      }
    ],
  },
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
  },
  watcher: {
    test: {
      tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
      files: ['./test/**/*'],
      verbose: true,
    },
  },
}
