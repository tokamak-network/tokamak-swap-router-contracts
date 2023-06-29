# Uniswap Swap Router

[![Tests](https://github.com/Uniswap/swap-router-contracts/workflows/Tests/badge.svg)](https://github.com/Uniswap/swap-router-contracts/actions?query=workflow%3ATests)
[![Lint](https://github.com/Uniswap/swap-router-contracts/workflows/Lint/badge.svg)](https://github.com/Uniswap/swap-router-contracts/actions?query=workflow%3ALint)

This repository contains smart contracts for swapping on the Uniswap V2 and V3 protocols.

## Address on Titan, Titan-Goerli

`0x1316822b9d2EEF86a925b753e8854F24761dA80E`

## compile

After installing the npm package, you should change node_modules/@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol:PoolAddress constant POOL_INIT_CODE_HASH to `0xa598dd2fba360510c5a8f02f44423a4468e902df5857dbce3ca162a43a3a31ff`. After that,
```
npx hardhat compile
```
This will ensure that all Uniswap code on Titan and Titan-Goerli will correctly interoperate with this SwapRouter02 contract.

## deploy

After setting .env file,
```
npx hardhat run scripts/deploy/SwapRouter02.js --network <network name>
```