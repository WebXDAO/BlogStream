import Image from 'next/image'
import { useEffect, useState } from 'react'

const BlogCard = ({ link }) => {
  const [linkData, setLinkData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://ipfs.moralis.io:2053/ipfs/QmdGXworVtwRC4qwKVHammFePmimvkAYYUuRrSS5yAF4wL'
        )
        const data = await res.json()
        setLinkData(data)
        console.log(data)
      } catch (error) {
        console.log('card error', link, error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='bg-white p-4 rounded-xl col-span-2 w-full h-fit'>
      {linkData ? (
        <div className=''>
          <div className='w-full'>
            <Image
              src={linkData.imgURL}
              className='object-contain mx-auto my-4'
              width={1080}
              height={480}
              layout='responsive'
            />
          </div>
          <h4 className='text-2xl lg:text-4xl text-center'>{linkData.title}</h4>
          {/* <article className='prose'>
            <ReactMarkdown plugins={['remark-gfm']}>{linkData.value}</ReactMarkdown>
          </article> */}
        </div>
      ) : (
        <div className='border-l border-blue-600 w-10 h-10 animate-spin rounded-full' />
      )}
    </div>
  )
}

export default BlogCard
