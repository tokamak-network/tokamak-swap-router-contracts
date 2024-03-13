// Copyright 2024 justin
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import fs from 'fs'
import hre from 'hardhat'
const run = hre.run
const chainName = hre.network.name

let data = JSON.parse(fs.readFileSync(`../state.${chainName}.json`).toString())

const main = async () => {
  console.log('Verifying contract...')
  try {
    await run('verify', {
      address: data['swapRouter02'],
      constructorArgsParams: [
        '0x0000000000000000000000000000000000000000',
        data['v3CoreFactoryAddress'],
        data['nonfungibleTokenPositionManagerAddress'],
        '0x4200000000000000000000000000000000000006',
      ],
    })
    await run('verify:verify', {
      address: data['quoterV2Address'],
      constructorArguments: [data['v3CoreFactoryAddress'], '0x4200000000000000000000000000000000000006'],
    })
  } catch (e) {
    if ((e as any).message.toLowerCase().includes('already verified')) {
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
