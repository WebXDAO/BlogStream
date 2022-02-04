const RecentBlogs = () => {
  return (
    <div className='bg-white rounded-lg col-span-12 lg:col-span-8 px-4 py-2'>
      <h2 className='my-3 text-xl font-nunito font-extrabold text-[#787878]'>Recent Blogs</h2>

      <table className='table-auto w-full'>
        <thead className='py-3 border-b'>
          <tr>
            <th className='text-sm font-nunito font-semibold whitespace-nowrap'>S No.</th>
            <th className='text-sm font-nunito font-semibold whitespace-nowrap'>Blog Title</th>
            <th className='text-sm font-nunito font-semibold whitespace-nowrap'>Time</th>
            <th className='text-sm font-nunito font-semibold whitespace-nowrap'>Write</th>
            <th className='text-sm font-nunito font-semibold whitespace-nowrap'>Reading Time</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          <tr>
            <td>1</td>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>1961</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Witchy Woman</td>
            <td>1972</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Shining Star</td>
            <td>1975</td>
            <td>Earth</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RecentBlogs
