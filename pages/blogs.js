import { useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import BlogCard from '../components/global/BlogCard'
import Layout from '../components/global/Layout'
import { BlogABI as abi } from '../ABI/Blog'
import Moralis from 'moralis'

const blogStreamContract = '0x6293DC62FBda245d33EA22944b9968911657373b'

function Blogs() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading, account } = useMoralis()
  const lnks = []
  useEffect(() => {
    const connectorId = window.localStorage.getItem('connectorId')
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
      enableWeb3({ provider: connectorId })
    }
  }, [isAuthenticated, isWeb3Enabled])

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
    console.log('test Blog', message)
    return message
  }
  async function storeUri() {
    const readOptions = {
      contractAddress: blogStreamContract,
      functionName: 'getBlogCounter',
      abi: abi
    }
    const blogCount = await Moralis.executeFunction(readOptions)
    console.log('test123', blogCount)

    // try{
    //   for(let i=0;i<blogCount;i++){
    //    const res = fetch(getUri(i))
    //    const data = await res.json()
    //    console.log("image link",data.imgUrl)
    //    lnks.push(data.imgUrl)
    //   }
    // } catch(error){
    //   console.log(error)
    // }
  }
  // if (isWeb3Enabled) storeUri()

  return (
    <Layout>
      <div className='py-6 grid grid-cols-2 w-full px-10 md:px-32 lg:px-64 bg-[#FAFAFB] gap-4'>
        {lnks.map((link) => (
          <BlogCard link={link} key={link} />
        ))}
      </div>
    </Layout>
  )
}

export default Blogs
