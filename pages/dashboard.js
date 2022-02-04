import InfoCard from '../components/dashboard/InfoCard'
import VerticalNavbar from '../components/dashboard/VerticalNavbar'

const Dashboard = () => {
  const info = [
    {
      name: 'Blogs',
      icon: './dashboard/blogs.svg',
      value: '178+',
      bgcolor: '#5B93FF',
      color: '#030229'
    },
    {
      name: 'Bookmarks',
      icon: './dashboard/bookmark.svg',
      value: '20+',
      bgcolor: '#FFD66B',
      color: '#F2C113'
    },
    {
      name: 'Balance',
      icon: './dashboard/wallet.svg',
      value: '1 MATIC',
      bgcolor: '#FF8F6B',
      color: '#FF8F6B'
    },
    {
      name: 'Stars',
      icon: './dashboard/star.svg',
      value: '12',
      bgcolor: '#605BFF',
      color: '#605BFF'
    }
  ]

  return (
    <div className='bg-[#FAFAFB] grid grid-cols-12 p-2 h-screen'>
      <div className='col-span-1'>
        <VerticalNavbar />
      </div>
      <div className='col-span-11 p-2 my-5 mx-2'>
        <h1 className='font-nunito text-2xl font-semibold text-[#030229]'>Dashboard</h1>
        <div className='grid grid-cols-12 gap-4 mt-5'>
          {info.map((data, index) => (
            <InfoCard data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
