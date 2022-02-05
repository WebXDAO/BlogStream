import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
// import { create as ipfsHttpClient } from 'ipfs-http-client'
import Layout from '../components/global/Layout'
import Moralis from 'moralis'
import { useMoralis } from 'react-moralis'
import Account from '../components/Account'

// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

function CreateBlog() {
  const [isLoading, setIsLoading] = useState(null)
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [fileURL, setFileUrl] = useState(null)

  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading, account } = useMoralis()

  useEffect(() => {
    const connectorId = window.localStorage.getItem('connectorId')
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId })
  }, [isAuthenticated, isWeb3Enabled])

  async function onChange(e) {
    try {
      const f = e.target.files[0]
      imagecontainer.src = URL.createObjectURL(f)
      const file = new Moralis.File(f.name, f)
      await file.saveIPFS()
      setFileUrl(file.ipfs())
    } catch (error) {
      console.log('Image Upload Error', error)
    }
    // try {
    //   const added = await client.add(file, {
    //     progress: (prog) => console.log(`received: ${prog}`)
    //   })
    //   const url = `https://ipfs.infura.io/ipfs/${added.path}`
    //   setFileUrl(url)
    // } catch (error) {
    //   console.log('Error uploading file: ', error)
    // }
  }
  async function createData() {
    //   if (!value || !fileUrl) return
    //   /* first, upload to IPFS */
    //   const data = JSON.stringify({
    //     value,
    //     title,
    //     author: account,
    //     createdAt: new Date(),
    //     image: fileUrl
    //   })
    //   try {
    //     const added = await client.add(data)
    //     const url = `https://ipfs.infura.io/ipfs/${added.path}`
    //     /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
    //     console.log(url)
    //   } catch (error) {
    //     console.log('Error uploading file: ', error)
    //   }
    if (!value || !title || !fileURL) return
    setIsLoading(true)
    try {
      const metadata = {
        title,
        author: account,
        value,
        imgURL: fileURL,
        createdAt: new Date()
      }
      const blog = new Moralis.File('blog.json', { base64: btoa(JSON.stringify(metadata)) })
      await blog.saveIPFS()
      console.log('blog', blog.ipfs())
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
            {imageFile ? 'Image Added!' : 'Choose an Image'}
          </label>
          <input className='hidden' onChange={onChange} id='image' type='file' />
        </div>
        <div className='mb-4 flex justify-center items-center space-x-4 mx-8'>
          <label className='block text-gray-700 text-2xl font-bold mb-2' htmlFor='title'>
            Title
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title'
          />
        </div>
        <MDEditor height={500} value={value} onChange={setValue} />
        <div className='w-full flex'>
          {isLoading ? (
            <div className='border-2 rounded-full w-24 h-24 mx-auto my-4 border-l border-fuchsia-400 animate-spin' />
          ) : (
            <button
              disabled={value === '' || title === ''}
              className='mx-auto my-4 w-fit p-4 px-6 rounded-xl border text-white text-xl bg-gradient-to-r from-[#3B82F6] to-[#D946EF]'
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
