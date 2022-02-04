import Blockies from 'react-blockies'
import { useMoralis } from 'react-moralis'

//To show an image with the address -> Will let user add image in future
function Blockie(props) {
  const { account, isAuthenticated } = useMoralis()
  if (!props.address && (!account || !isAuthenticated))
    return <div className='w-10 h-10 bg-gray-400 rounded-full' />

  return (
    <Blockies
      seed={props.currentWallet ? account.toLowerCase() : props.address.toLowerCase()}
      className='rounded-3xl'
      {...props}
    />
  )
}

export default Blockie
