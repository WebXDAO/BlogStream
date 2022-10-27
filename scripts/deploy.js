const hre = require('hardhat')
const fs = require('fs')

async function main() {
  const Blogstream = await hre.ethers.getContractFactory('Blog')
  const blogstream = await Blogstream.deploy()

  await blogstream.deployed()
  console.log('Blog deployed to:', blogstream.address)

  fs.writeFileSync(
    './config.js',
    `export const contractAddress = "${blogstream.address}"
export const ownerAddress = "${blogstream.signer.address}"`
  )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
