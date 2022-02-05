import Image from 'next/image'
const Hero = () => {
  return (
    <div className='w-full h-[95vh] relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full z-10'>
        <div className='flex w-full h-full justify-center'>
          <div className='w-fit p-2 lg:w-1/2 lg:ml-44 lg:py-32 z-10 mx-auto my-auto lg:my-0'>
            <h1 className='py-4 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#D946EF] mb-4'>
              BlogStream
            </h1>
            <div className='text-gray-600 font-nunito mb-4'>
              <p>
                Read Blogs anytime anywhere and pay for what you read.
                <br />
                Get some rare NFTs for your active time.
              </p>
            </div>
            <button
              type='button'
              className='py-2 px-8 text-center text-base font-medium rounded-md text-white bg-gradient-to-r from-[#3B82F6] to-[#FF6DCE] shadow-md'
            >
              Read Blogs
            </button>
          </div>
          <div className='hidden lg:inline-block w-1/2 h-full'>
            <Image
              src='/landingpage/sally.png'
              alt='model'
              height={2160}
              width={2160}
              objectFit='contain'
              layout='intrinsic'
            />
          </div>
        </div>
      </div>
      <div className='absolute top-20 right-1/3 w-40 h-40 -z-10 bg-[#DE2BAE] rounded-full filter blur-3xl' />
      <div className='invisible md:visible  absolute bg-[#1D4ED8] w-56 h-56 top-1/2 -left-10 -z-10 rounded-full filter blur-3xl' />
      <div className='absolute bg-[#2563EB] w-80 h-80 top-1/2 -right-20 -z-10 rounded-full filter blur-3xl' />
    </div>
  )
}

export default Hero
