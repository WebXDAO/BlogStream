import Image from 'next/image'
import { useEffect, useState } from 'react'
import Blog from '../global/Blog'
import Modal from '../Account/Modal'

const BlogCard = ({ link }) => {
  const [linkData, setLinkData] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(link)
        const data = await res.json()
        setLinkData(data)
        console.log(data)
      } catch (error) {
        console.log('card error', link, error)
      }
    }
    fetchData()
  }, [])

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div className='bg-white p-4 rounded-xl col-span-2 w-full h-fit'>
      {linkData ? (
        <div className='flex flex-col space-y-4'>
          <div className='w-full rounded-lg'>
            <Image
              src={linkData.imgURL}
              className='object-contain mx-auto my-4'
              width={1080}
              height={480}
              layout='responsive'
            />
          </div>
          <h4 className='text-2xl lg:text-4xl text-center'>{linkData.title}</h4>
          <button className='bg-blue-500 rounded-lg p-3 mx-auto text-white' onClick={handleOpen}>
            Start Flow at {linkData.flowRate}
          </button>
          <Modal open={open} setOpen={setOpen} children={<Blog link={link} />} blogStyle={true} />
        </div>
      ) : (
        <div className='border-l border-blue-600 w-10 h-10 animate-spin rounded-full' />
      )}
    </div>
  )
}

export default BlogCard
