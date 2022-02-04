const InfoCard = ({ data }) => {
  const { name, icon, value, bgcolor, color } = data
  return (
    <div className='flex col-span-3 bg-white p-3 rounded-md items-center'>
      <div className='w-1/3'>
        <div className={`rounded-full ${bgcolor} bg-blend-lighten bg-opacity-25 p-5`}>{icon}</div>
      </div>
      <div className='w-2/3'>
        <h4>{value}</h4>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default InfoCard
