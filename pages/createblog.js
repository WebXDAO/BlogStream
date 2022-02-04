import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import Layout from '../components/global/Layout'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

function CreateBlog() {
  const [fileUrl, setFileUrl] = useState(null)
  const [value, setValue] = useState('')
  const [headerImage, setHeaderImage] = useState(null)

  // const imageUpload = (e) => {
  //   const data = new FormData()
  //   data.append('file', e.target.files[0])
  //   setHeaderImage(data)
  // }
  // const handleSubmit = () => {
  //   //TODO: format image data if needed and then upload to IPFS with text value.
  // }
  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  async function createData() {
    
    if (!value|| !fileUrl) return;
    /* first, upload to IPFS */
    const data = JSON.stringify({
      value,
      image: fileUrl,
    });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      console.log(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  return (
    <Layout>
      <div className='px-2'>
        <div className='my-2'>
          <label htmlFor='image'>Choose a header file:</label>
          <input onChange={onChange} id='image' type='file' />
        </div>
        <MDEditor height={500} value={value} onChange={setValue} />
        <button
          disabled={value === ''}
          className='mx-auto my-4 w-full p-4 border'
          onClick={createData}
        >
          Submit
        </button>
      </div>
    </Layout>
  )
}

export default CreateBlog
