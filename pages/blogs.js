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
  const {
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
    account,
    isInitialized
  } = useMoralis()
  const lnks = []
  const [stateUrl, setStateUrl] = useState([])
  // const [connector, setConnector] = useState([])
  useEffect(() => {
    const connectorId = window.localStorage.getItem('connectorId')
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId })
    if (isWeb3Enabled) {
      storeUri()
    }
  }, [isAuthenticated, isWeb3Enabled])


  async function createNewFlow(recipient, flowRate) {
    try{
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()
const web3ModalRawProvider = await web3Modal.connect()
const web3ModalProvider = new Web3Provider(web3ModalRawProvider, 'any')

    const sf = await Framework.create({
      networkName: 'mumbai',
      provider: web3ModalProvider
    })
    const web3ModalSigner = sf.createSigner({ web3Provider: web3ModalProvider })
    const USDCx = '0x42bb40bF79730451B11f6De1CbA222F17b87Afd7'
    // const MATICx = '0x3aD736904E9e65189c3000c7DD2c8AC8bB7cD4e3'
    const createFlowOperation = sf.cfaV1.createFlow({
      flowRate: 5,
      receiver: recipient,
      superToken: USDCx
      // userData?: string
    })
    console.log('Creating your stream...')
    const result = await createFlowOperation.exec(signer)
    console.log(result)

    return result}catch(err){console.log(err)}
  }

  async function deleteFlow(recipient){

    const web3Modal = new Web3Modal()
const web3ModalRawProvider = await web3Modal.connect()
const web3ModalProvider = new Web3Provider(web3ModalRawProvider, 'any')

    const sf = await Framework.create({
      networkName: 'matic',
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
    console.log(deleteFlowOperation)
  }

 

  // try {
    
  //   console.log(
  //     `Congrats - you've just created a money stream!
  //     View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
  //     Network: Rinkeby
  //     Super Token: DAIx
  //     Sender: ${account},
  //     Receiver: ${recipient},
  //     FlowRate: ${flowRate}
  //     `
  //   )
  // } catch (error) {
  //   console.log(
  //     "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
  //   )
  //   console.error(error)
  // }


  // if (isInitialized && isAuthenticated && !isWeb3Enabled) {
  //   enableWeb3();
  // }
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
  // getUri(2);
  async function storeUri() {
    const readOptions = {
      contractAddress: blogStreamContract,
      functionName: 'getBlogCounter',
      abi: abi
    }
    const blogCount = await Moralis.executeFunction(readOptions)
    const n = parseInt(blogCount, 16)
    console.log('test123', n)

    // try{
    for (let i = 0; i < n; i++) {
      const url = await getUri(i)
      const res = await fetch(url)
      lnks.push(url)
    }
    setStateUrl(lnks)
    // } catch(error){
    //   console.log(error)
    // }
  }

  console.log(stateUrl)

  console.log('test', lnks)
  return (
    <Layout>
      <div className='py-6 grid grid-cols-2 w-full px-10 md:px-32 lg:px-52 bg-[#FAFAFB] gap-4'>
        {stateUrl.map((link) => (
          <BlogCard link={link} createNewFlow={createNewFlow} key={link} deleteFlow={deleteFlow} />
        ))}
      </div>
    </Layout>
  )
}

export default Blogs
