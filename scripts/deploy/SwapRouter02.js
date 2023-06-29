
const ethers = require("ethers")
require('dotenv').config()

const hre = require("hardhat");

/*
WETH9 deployed to 0x04C91015CC8910B031F2399E04802b51bf6582A1
UniswapV3Factory deployed to 0x79d6318807A4d031eC4a896e3A079E115399fbcD

SwapRouter deployed to 0x477935284f9310d036C3DAABdc751E94C404fcCB
NFTDescriptor deployed to 0xE32B142dBb6cAE60447284D598530677cA1505f0
NonfungibleTokenPositionDescriptor deployed to 0x95AC058b12C1A43368758C0dda2a12ceFe6ad5f7
NonfungiblePositionManager deployed to 0x6A4514861c59Eb3F046Be89D47dD3123B159E768
Quoter deployed to 0xAC49B1F2Bf9AaC284609abF5eb1b90f352b18a77
QuoterV2 deployed to 0xD073E3ad1B4603cF6B5AA9aFc11B31529A2D213D
TickLens deployed to 0xCf1AADc5E8e7e8bC52204f06F1414FBA99e6f932
UniswapInterfaceMulticall deployed to 0x4D2cfb9300f58225057c9c139B459c2B64bA5681
*/

const _factoryV2 = "0x0000000000000000000000000000000000000000";
const factoryV3 = "0x8C2351935011CfEccA4Ea08403F127FB782754AC";
const _positionManager = "0x324d7015E30e7C231e4aC155546b8AbfEAB00977";
const _WETH9 = "0x4200000000000000000000000000000000000006";

const SwapRouter02Artifact = require("../../artifacts/contracts/SwapRouter02.sol/SwapRouter02.json");

async function main() {

  const accounts = await hre.ethers.getSigners();
  const deployer = accounts[0];
  providers = hre.ethers.provider;

  console.log("deployer", deployer.address);

  //=============== SwapRouter02
  const SwapRouter02 = new hre.ethers.ContractFactory(SwapRouter02Artifact.abi, SwapRouter02Artifact.bytecode, deployer);
  const swapRouter02 = await SwapRouter02.deploy(_factoryV2, factoryV3, _positionManager, _WETH9);
  await swapRouter02.deployed();
  console.log(`SwapRouter02 deployed to ${swapRouter02.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});