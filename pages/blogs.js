import { useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'
import BlogCard from '../components/global/BlogCard'
import Layout from '../components/global/Layout'
import { BlogABI as abi } from '../ABI/Blog'
import Moralis from 'moralis'
import { Framework } from '@superfluid-finance/sdk-core'
import Web3Modal from 'web3modal'
import { Web3Provider } from '@ethersproject/providers'
import { ethers } from 'ethers'

// const superFluidUrl = 'https://polygon-mumbai.infura.io/v3/3957be6fa62146bfb3b79106fc139965'
// const customHttpProvider = new ethers.providers.JsonRpcProvider(superFluidUrl)
const blogStreamContract = '0x0d74e2a84374aa98bd5526287575222c63824744'

function Blogs() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading, account } = useMoralis()
  const [stateUrl, setStateUrl] = useState([])

  useEffect(() => {
    const connectorId = window.localStorage.getItem('connectorId')
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId })
    if (isWeb3Enabled) {
      storeUri()
    }
  }, [isAuthenticated, isWeb3Enabled])

  function calculateFlowRate(amountInEther) {
    if (typeof Number(amountInEther) !== 'number' || isNaN(Number(amountInEther)) === true) {
      console.log(typeof Number(amountInEther))
      alert('You can only calculate a flowRate based on a number')
      return
    } else if (typeof Number(amountInEther) === 'number') {
      const monthlyAmount = ethers.utils.parseEther(amountInEther.toString())
      const calculatedFlowRate = Math.floor(monthlyAmount / 3600 / 24 / 30)
      return calculatedFlowRate
    }
  }

  async function createNewFlow(recipient, flowRate) {
    try {
      const web3Modal = new Web3Modal()
      // const connection = await web3Modal.connect()
      // const provider = new ethers.providers.Web3Provider(connection)
      // const signer = provider.getSigner()
      const web3ModalRawProvider = await web3Modal.connect()
      const web3ModalProvider = new Web3Provider(web3ModalRawProvider, 'any')

      const sf = await Framework.create({
        networkName: 'mumbai',
        provider: web3ModalProvider
      })
      // let amt = calculateFlowRate(flowRate).toString()
      // console.log(amt)
      const web3ModalSigner = sf.createSigner({ web3Provider: web3ModalProvider })
      const USDCx = '0x42bb40bF79730451B11f6De1CbA222F17b87Afd7'
      const createFlowOperation = sf.cfaV1.createFlow({
        flowRate: flowRate.toString(),
        receiver: recipient,
        superToken: USDCx
      })
      console.log('Creating your stream...')
      const result = await createFlowOperation.exec(web3ModalSigner)
      // console.log(result)
      return result
    } catch (err) {
      console.log(err)
    }
  }

  async function deleteFlow(recipient) {
    try {
      const web3Modal = new Web3Modal()
      // const connection = await web3Modal.connect()
      // const provider = new ethers.providers.Web3Provider(connection)
      // const signer = provider.getSigner()
      const web3ModalRawProvider = await web3Modal.connect()
      const web3ModalProvider = new Web3Provider(web3ModalRawProvider, 'any')

      const sf = await Framework.create({
        networkName: 'mumbai',
        provider: web3ModalProvider
      })
      const web3ModalSigner = sf.createSigner({ web3Provider: web3ModalProvider })
      const USDCx = '0x42bb40bF79730451B11f6De1CbA222F17b87Afd7'
      // const MATICx = '0x3aD736904E9e65189c3000c7DD2c8AC8bB7cD4e3'
      const deleteFlowOperation = sf.cfaV1.deleteFlow({
        sender: account,
        receiver: recipient,
        superToken: USDCx
      })
      console.log('Deleting your stream...')
      const result = await deleteFlowOperation.exec(web3ModalSigner)
      console.log(result)
      return result
    } catch (err) {
      console.log('Delete Flow', err)
    }
  }

  async function getUri(blogId) {
    const readOptions = {
      contractAddress: blogStreamContract,
      functionName: 'getBlogUri',
      abi: abi,
      params: {
        _blogId: blogId
      }
    }
    const message = await Moralis.executeFunction(readOptions)
    return message
  }
  async function storeUri() {
    try {
      const readOptions = {
        contractAddress: blogStreamContract,
        functionName: 'getBlogCounter',
        abi: abi
      }
      const blogCount = await Moralis.executeFunction(readOptions)
      const n = parseInt(blogCount, 16)
      console.log('test123', n)
      const links = []
      for (let i = 0; i < n; i++) {
        const url = await getUri(i)
        links.push(url)
      }
      setStateUrl(links)
    } catch (error) {
      console.log('Store URI', error)
    }
  }
  return (
    <Layout>
      <div className='py-6 grid grid-cols-2 w-full px-10 md:px-32 lg:px-52 bg-[#FAFAFB] gap-4'>
        {stateUrl.map((link, index) => (
          <BlogCard
            link={link}
            createNewFlow={createNewFlow}
            key={link + index}
            deleteFlow={deleteFlow}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Blogs
