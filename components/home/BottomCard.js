import Bitcoin from '../../public/landingpage/bitcoin.svg'
import Polygon from '../../public/landingpage/polygon.svg'
import Ethereum from '../../public/landingpage/ethereum.svg'
const BottomCard = () => {
  return (
    <div className='flex w-full my-6'>
      <div className='bottom-card mx-auto -z-20 w-[85%] h-80 relative rounded-2xl'>
        <div className='absolute left-1/3 top-10 blur-3xl bg-blend-multiply rounded-full -z-10 bg-[#A222C0] w-32 h-24 opacity-60' />
        <div className='absolute right-32 bottom-10 blur-3xl bg-blend-multiply rounded-full -z-10 bg-[#A222C0] w-32 h-24 opacity-60' />
        <div className='absolute top-1/4 ml-10 md:ml-20 space-y-3'>
          <h6 className='font-nunito font-semibold text-2xl'>Support writers using crypto</h6>
          <p className='text-gray-500 text-sm'>
            Find inspiration has never been easier than it is now.
          </p>
          <button className='bottom-card-button p-3 rounded-lg text-white'>Start exploring</button>
        </div>
        <Bitcoin className='invisible md:visible right-24 top-8 absolute' />
        <Polygon className='invisible md:visible right-0 bottom-0 absolute mb-4 mr-4' />
        <Ethereum className='invisible md:visible right-48 bottom-12 absolute' />
      </div>
    </div>
  )
}

export default BottomCard
