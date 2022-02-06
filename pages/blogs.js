import BlogCard from '../components/global/BlogCard'
import Layout from '../components/global/Layout'

const Blogs = () => {
  const lnks = [
    'https://ipfs.moralis.io:2053/ipfs/QmbzzckrEpqMUxkWsG9Tm5SYWEyTtqdhMnLGWaR73hW8g6',
    'https://ipfs.moralis.io:2053/ipfs/QmdGXworVtwRC4qwKVHammFePmimvkAYYUuRrSS5yAF4wL',
    'https://ipfs.moralis.io:2053/ipfs/QmciG4YNhgFHQkZZ11N8W4v84QUkLewzepTP2CSyeCann6'
  ]
  return (
    <Layout>
      <div className='py-6 grid grid-cols-2 w-full px-10 md:px-32 lg:px-52 bg-[#FAFAFB] gap-4'>
        {lnks.map((link) => (
          <BlogCard link={link} key={link} />
        ))}
      </div>
    </Layout>
  )
}

export default Blogs
