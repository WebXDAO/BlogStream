import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useMoralis } from 'react-moralis'
import Account from '../../components/Account'
import Image from 'next/image'

const Blog = ({ link }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis()
  const [blogData, setBlogData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(link)
        const data = await res.json()
        setBlogData(data)
        console.log(data)
      } catch (error) {
        console.log('card error', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const connectorId = window.localStorage.getItem('connectorId')
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId })
  }, [isAuthenticated, isWeb3Enabled])

  return !isAuthenticated ? (
    <div className='h-screen flex bg-gray-300'>
      <Account
        className='m-auto w-1/4 bg-blue-600 text-white p-4 rounded-xl border'
        showIcon={true}
      />
    </div>
  ) : blogData ? (
    <>
      {/* <div className='py-6 grid grid-cols-2 w-full px-10 md:px-32 lg:px-64 gap-4'> */}
      <div className='flex flex-col'>
        <div className='block w-full h-1/2 px-28'>
          <Image
            src={blogData.imgURL}
            className='object-cover mx-auto my-4'
            width={1080}
            height={480}
            layout='responsive'
          />
        </div>
        <h4 className='text-2xl lg:text-4xl text-center my-5'>{blogData.title}</h4>
        <article className='prose-sm mx-auto'>
          <ReactMarkdown plugins={[remarkGfm]}>{blogData.value}</ReactMarkdown>
        </article>
      </div>
    </>
  ) : (
    <div className='flex w-full h-screen'>
      <div className='m-auto rounded-full border-l border-fuchsia-600 animate-spin w-60 h-60' />
    </div>
  )
}

export default Blog
