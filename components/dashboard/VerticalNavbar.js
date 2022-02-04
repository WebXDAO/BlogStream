import Link from 'next/link'

const icons = [
  { name: 'menu', icon: './dashboard/menu.svg', link: '/dashboard' },
  { name: 'blogs', icon: './dashboard/blogs.svg', link: '#' },
  { name: 'bookmark', icon: './dashboard/bookmark.svg', link: '#' },
  { name: 'wallet', icon: './dashboard/wallet.svg', link: '#' },
  { name: 'notifications', icon: './dashboard/bell.svg', link: '#' },
  { name: 'settings', icon: './dashboard/setting.svg', link: '#' }
]

const VerticalNavbar = () => {
  return (
    <div className='bg-white flex flex-col justify-between items-center p-2 m-5 rounded-md h-[95%]'>
      <Link href='/' passHref>
        <img src='./dashboard/logo.svg' alt='BlogStream' className='w-8 h-8' />
      </Link>
      <div className='flex flex-col items-center gap-4'>
        {icons.map(({ name, icon, link }, index) => (
          <Link href={link} key={name + index} passHref>
            <img src={icon} alt={name} />
          </Link>
        ))}
      </div>
      <div className='flex flex-col items-center gap-2'>
        {/* TODO: replace with image */}
        <div className='w-8 h-8 bg-slate-500 rounded-full'></div>
        <img src='./dashboard/logout.svg' alt='logout' style={{ color: 'gray' }} />
      </div>
    </div>
  )
}

export default VerticalNavbar
