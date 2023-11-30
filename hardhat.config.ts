import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-typechain'
import 'hardhat-watcher'
import 'dotenv/config'
import dotenv from 'dotenv'
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
      //chainId: 1,
      // forking: {
      //   url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      //   blockNumber: 15360000,
      // },
      forking: {
        url: `https://rpc.titan-goerli.tokamak.network`,
      },
    },
    localhost: {
      forking: {
        url: `https://rpc.titan-goerli.tokamak.network`,
      },
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    titangoerli: {
      url: 'https://rpc.titan-goerli.tokamak.network',
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 5050,
      // gasPrice: 250000,
      deploy: ['deploy'],
    },
    titan: {
      url: 'https://rpc.titan.tokamak.network',
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 55004,
      // gasPrice: 250000,
      // deploy: ['deploy_titan'],
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
    holesky: {
      url: `https://ethereum-holesky.publicnode.com`,
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 17000,
      // gasMultiplier: 1.25,
      // gasPrice: 10000000000,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    // apiKey: `${process.env.ETHERSCAN_API_KEY}`
    apiKey: {
      goerli: `${process.env.ETHERSCAN_API_KEY}`,
      titangoerli: `${process.env.ETHERSCAN_API_KEY}`,
      titan: `${process.env.ETHERSCAN_API_KEY}`,
      holesky: `${process.env.ETHERSCAN_API_KEY}`,
    },
    customChains: [
      {
        network: 'titangoerli',
        chainId: 5050,
        urls: {
          apiURL: 'https://explorer.titan-goerli.tokamak.network/api',
          browserURL: 'https://explorer.titan-goerli.tokamak.network',
        },
      },
      {
        network: 'titan',
        chainId: 55004,
        urls: {
          apiURL: 'https://explorer.titan.tokamak.network/api',
          browserURL: 'https://explorer.titan.tokamak.network',
        },
      },
      {
        network: 'holesky',
        chainId: 17000,
        urls: {
          apiURL: 'https://api-holesky.etherscan.io/api',
          browserURL: 'https://holesky.etherscan.io/',
        },
      },
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
