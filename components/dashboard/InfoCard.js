const InfoCard = ({ data }) => {
  const { name, icon, value, bgcolor, color } = data
  return (
    <div className='flex col-span-12 md:col-span-6 lg:col-span-3 bg-white p-4 rounded-lg justify-center items-center'>
      <div className={`rounded-full ${bgcolor} bg-opacity-20 p-5`}>{icon}</div>
      <div className='ml-5 w-2/3'>
        <h4 className='font-semibold text-lg font-nunito'>{value}</h4>
        <p className='text-[#030229] text-sm'>{name}</p>
      </div>
    </div>
  )
}

export default InfoCard
