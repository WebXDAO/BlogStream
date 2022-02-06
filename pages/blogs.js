import BlogCard from '../components/global/BlogCard'
import Layout from '../components/global/Layout'
import {BlogABI as abi} from '../ABI/Blog'
import Moralis from 'moralis'
import { useMoralis } from 'react-moralis'
import { useEffect, useState } from 'react'

const blogStreamContract = "0xd8f853912c0903cd8890ab8795210f462321f68f";

function Blogs(){
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading, account, isInitialized } = useMoralis()
  const lnks = []
  const[stateUrl, setStateUrl] = useState([])
  // const [connector, setConnector] = useState([])
  useEffect(() => {
    const connectorId = window.localStorage.getItem('connectorId')
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId })
      if(isWeb3Enabled){
        storeUri()
        }
  }, [isAuthenticated, isWeb3Enabled])
 
  // if (isInitialized && isAuthenticated && !isWeb3Enabled) {
  //   enableWeb3();
  // }
  async function getUri(blogId){
    const readOptions = {
      contractAddress: blogStreamContract,
      functionName: "getBlogUri",
      abi: abi,
      params: {
        _blogId: blogId,
      },
    }
    const message = await Moralis.executeFunction(readOptions);
    return message
  }
  // getUri(2);
async function storeUri(){
  const readOptions = {
    contractAddress: blogStreamContract,
    functionName: "getBlogCounter",
    abi: abi,
}
const blogCount = await Moralis.executeFunction(readOptions);
const n = parseInt(blogCount,16)
console.log("test123",n)

// try{
  for(let i=0;i<n;i++){
    const url =await getUri(i)
    const res = await fetch(url)
    lnks.push(url)
  }
  setStateUrl(lnks)
// } catch(error){
//   console.log(error)
// }

}

 console.log(stateUrl)

  console.log("test",lnks)
  return (
    <Layout>
      <div className='py-6 grid grid-cols-2 w-full px-10 md:px-32 lg:px-52 bg-[#FAFAFB] gap-4'>
        {stateUrl.map((link) => (
          <BlogCard link={link} key={link} />
        ))}
        
      </div>
    </Layout>
  )
}



export default Blogs