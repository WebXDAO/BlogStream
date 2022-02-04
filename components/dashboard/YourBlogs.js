import Star from '../../public/dashboard/star.svg'
const YourBlogs = () => {
  const blogs = [
    { title: 'title1', rating: 4 },
    { title: 'title2', rating: 5 }
  ]
  return (
    <div className='bg-white rounded-lg col-span-12 lg:col-span-4 px-4 py-2'>
      <h2 className='my-3 text-xl font-nunito font-extrabold text-[#787878]'>Your Blogs</h2>

      {blogs.map((data, index) => (
        <div key={data.title + index} className='bg-white flex items-center my-4 w-full'>
          <div className='w-14 h-12 bg-blue-300 rounded-lg mr-5'></div>
          <div>
            <h6 className='font-nunito text-sm'>{data.title}</h6>
            <div className='flex'>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return (
                  <Star
                    key={ratingValue + data.title + data.rating}
                    className={`w-3 h-3 ${
                      ratingValue > data.rating ? 'text-gray-400' : 'text-yellow-400'
                    }`}
                  />
                )
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default YourBlogs
