import hre from 'hardhat'
import fs from 'fs'
const run = hre.run
const chainName = hre.network.name

let data = JSON.parse(fs.readFileSync(`deployed.uniswap.${chainName}.json`).toString())

const main = async () => {
  console.log('Verifying contract...')
  try {
    await run('verify', {
      address: data['SwapRouter02'],
      constructorArgsParams: [
        '0x0000000000000000000000000000000000000000',
        data['UniswapV3Factory'],
        data['NonfungiblePositionManager'],
        '0x4200000000000000000000000000000000000006',
      ],
    })
  } catch (e) {
    if (e.message.toLowerCase().includes('already verified')) {
      console.log('Already verified!')
    } else {
      console.log(e)
    }
  }
}
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
