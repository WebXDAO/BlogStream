import Account from '../Account'

const ButtonCard = ({ data }) => {
  if (data.title === 'Connect to Wallet')
    return (
      <div className='col-span-12 md:col-span-4 bg-white p-10 cursor-pointer drop-shadow-lg flex justify-between items-center rounded-xl'>
        <Account showIcon={true} />
      </div>
    )
  const { icon: Icon, title, func } = data
  return (
    <button
      onClick={func}
      className='col-span-12 md:col-span-4 bg-white p-10 cursor-pointer drop-shadow-lg flex justify-between items-center rounded-xl'
    >
      <h1 className='text-2xl font-semibold font-nunito'>{title}</h1>
      <Icon className='w-12 h-12' />
    </button>
  )
}

export default ButtonCard
