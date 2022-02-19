import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Layout from '../components/global/Layout'
import Moralis from 'moralis'
import { useMoralis } from 'react-moralis'
import Account from '../components/Account'
import { BlogABI as abi } from '../ABI/Blog'
import { ethers } from 'ethers'

const blogStreamContract = '0x0d74e2a84374aa98bd5526287575222c63824744'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

function CreateBlog() {
  const [isLoading, setIsLoading] = useState(null)
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [flowRate, setFlowRate] = useState(0)
  const [fileURL, setFileUrl] = useState(null)

  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading, account } = useMoralis()

  useEffect(() => {
    const connectorId = window.localStorage.getItem('connectorId')
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId })
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
  async function uploadToChain(blogUri, flowrate) {
    const connectorId = window.localStorage.getItem('connectorId')
    const sendOptions = {
      contractAddress: blogStreamContract,
      functionName: 'postBlog',
      abi: abi,
      params: {
        _blogUri: blogUri,
        _flowRate: flowrate
      }
    }
    const transaction = await Moralis.executeFunction(sendOptions)
    console.log('Image Transaction Hash', transaction.hash)
    await transaction.wait()
  }

  async function onChange(e) {
    try {
      const f = e.target.files[0]
      imagecontainer.src = URL.createObjectURL(f)
      const file = new Moralis.File(f.name, f)
      await file.saveIPFS()
      setFileUrl(file.ipfs())
      console.log(file.ipfs())
    } catch (error) {
      console.log('Image Upload Error', error)
    }
  }
  async function createData() {
    if (!value || !title || !fileURL) return
    setIsLoading(true)
    try {
      const metadata = {
        title,
        author: account,
        value,
        imgURL: fileURL,
        flowRate: calculateFlowRate(flowRate),
        createdAt: new Date()
      }
      const blog = new Moralis.File('blog.json', {
        base64: window.btoa(unescape(encodeURIComponent(JSON.stringify(metadata))))
      })
      await blog.saveIPFS()
      console.log('blog', blog.ipfs())
      uploadToChain(blog.ipfs(), calculateFlowRate(flowRate))
    } catch (error) {
      console.log('Blog Error', error)
    }
    setIsLoading(false)
    setFileUrl(null)
    setTitle('')
    setValue('')
  }
  return !isAuthenticated ? (
    <div className='h-screen flex bg-gray-300'>
      <Account
        className='m-auto w-1/4 bg-blue-600 text-white p-4 rounded-xl border'
        showIcon={true}
      />
    </div>
  ) : (
    <Layout>
      <div className='px-4'>
        <div className='my-2 border-2 border-dashed text-center w-fit mx-auto p-5 rounded-lg'>
          <img src='#' id='imagecontainer' className='w-full max-h-32' alt='' />
          <label className='text-xl text-center' htmlFor='image'>
            {fileURL ? 'Uploaded!' : 'Choose an Image'}
          </label>
          <input className='hidden' onChange={onChange} id='image' type='file' />
        </div>
        <div className='mb-4 flex w-full justify-center items-center space-x-2'>
          <label className='block text-gray-700 text-2xl font-bold mb-2' htmlFor='title'>
            Title
          </label>
          <input
            className='shadow appearance-none border rounded w-2/3 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title'
          />

          <label
            className='block text-gray-700 text-2xl whitespace-nowrap font-bold mb-2'
            htmlFor='flowrate'
          >
            Flow Rate
          </label>
          <input
            className='shadow appearance-none border rounded w-1/3 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='title'
            type='number'
            min={0.0000001}
            value={flowRate}
            onChange={(e) => setFlowRate(e.target.value)}
            placeholder='Amount per month in Ether'
          />
        </div>
        <MDEditor height={500} value={value} onChange={setValue} />
        <div className='w-full flex'>
          {isLoading ? (
            <div className='border-2 rounded-full w-24 h-24 mx-auto my-4 border-l border-fuchsia-400 animate-spin' />
          ) : (
            <button
              disabled={value === '' || title === ''}
              className={`mx-auto my-4 w-fit p-4 px-6 rounded-xl border text-white text-xl bg-gradient-to-r from-[#3B82F6] to-[#D946EF] ${
                (value === '' || title === '' || !fileURL) && 'opacity-50 cursor-wait'
              }`}
              onClick={createData}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default CreateBlog
