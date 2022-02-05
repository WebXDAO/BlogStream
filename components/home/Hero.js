import Image from 'next/image'
const Hero = () => {
  return (
    <div className='w-full h-screen relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full z-10'>
        <div className='flex w-full h-full justify-center items-center'>
          <div className='w-fit p-2 lg:w-1/2 lg:p-28 z-10 m-auto'>
            <h1 className='py-4 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#D946EF] mb-4'>
              BlogStream
            </h1>
            <div className='text-gray-500 mb-8'>
              <p>
                Read Blogs anytime anywhere and pay for what you read.
                <br />
                Get some rare NFTs for your active time.
              </p>
            </div>
            <button
              type='button'
              className='py-2 px-8 text-center shadow-lg shadow-pink-200 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-l from-fuchsia-400 to-blue-500'
            >
              Read Blogs
            </button>
          </div>
          <div className='hidden lg:inline-block w-1/2 p-10 lg:p-1'>
            <Image
              src='/landingpage/model.svg'
              alt='model'
              height={720}
              width={1080}
              layout='responsive'
            />
          </div>
        </div>
      </div>
      <div className='absolute top-10 right-1/3 w-40 h-40 -z-10 bg-pink-500 rounded-full filter blur-3xl' />
      <div className='absolute bg-[#1D4ED8] w-56 h-56 top-1/2 -left-10 -z-10 rounded-full filter blur-3xl' />
      <div className='absolute bg-[#2563EB] w-80 h-80 top-1/2 -right-20 -z-10 rounded-full filter blur-3xl' />
    </div>
  )
}

export default Hero
