import LabTopSVG from '../../public/landingpage/laptop.svg'

const HowItWork = () => {
  return (
    <div className='flex flex-col items-center xl:block w-full mx-auto py-16 px-40'>
      <h1 className='text-3xl pb-20 font-bold'>How it work?</h1>
      <div className='flex flex-col items-center xl:flex-row xl:justify-around'>
        <LabTopSVG />
        <div className='flex w-1/3 pt-10 xl:pt-0 flex-col justify-center items-center'>
          <h2 className='text-xl mb-4 font-bold'>Read Blogs</h2>
          <p className='text-center'>
            Only pay for what you read 😃.And support your favourite writers. Get directly paid for
            what you write.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowItWork
