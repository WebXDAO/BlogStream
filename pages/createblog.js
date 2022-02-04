import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import Layout from '../components/global/Layout'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

function CreateBlog() {
  const [value, setValue] = useState('')
  const [headerImage, setHeaderImage] = useState(null)

  const imageUpload = (e) => {
    const data = new FormData()
    data.append('file', e.target.files[0])
    setHeaderImage(data)
  }
  const handleSubmit = () => {
    //TODO: format image data if needed and then upload to IPFS with text value.
  }

  return (
    <Layout>
      <div className='px-2'>
        <div className='my-2'>
          <label htmlFor='image'>Choose a header file:</label>
          <input onChange={imageUpload} id='image' type='file' />
        </div>
        <MDEditor height={500} value={value} onChange={setValue} />
        <button
          disabled={value === '' || headerImage === null}
          className='mx-auto my-4 w-full p-4 border'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </Layout>
  )
}

export default CreateBlog
