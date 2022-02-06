import Link from 'next/link'
import Logout from '../../public/dashboard/logout.svg'
import Blogs from '../../public/dashboard/blogs.svg'
import Bookmark from '../../public/dashboard/bookmark.svg'
import Wallet from '../../public/dashboard/wallet.svg'
import Bell from '../../public/dashboard/bell.svg'
import Setting from '../../public/dashboard/setting.svg'
import Menu from '../../public/dashboard/menu.svg'
import Account from '../Account'

const icons = [
  { name: 'menu', icon: Menu, link: '/dashboard' },
  { name: 'blogs', icon: Blogs, link: '#' },
  { name: 'bookmark', icon: Bookmark, link: '#' },
  { name: 'wallet', icon: Wallet, link: '#' },
  { name: 'notifications', icon: Bell, link: '#' },
  { name: 'settings', icon: Setting, link: '#' }
]

const VerticalNavbar = () => {
  return (
    <div className='bg-white flex flex-col justify-between items-center p-2 md:m-5 min-w-fit rounded-md h-[95%]'>
      <Link href='/'>
        <img src='./dashboard/logo.svg' alt='BlogStream' className='w-8 h-8 cursor-pointer' />
      </Link>
      <div className='flex flex-col items-center gap-4'>
        {icons.map(({ name, icon: Icon, link }, index) => (
          <Link key={name + index} href={link} passHref>
            <a>
              <Icon className='text-gray-400' />
            </a>
          </Link>
        ))}
      </div>
      <div className='flex flex-col items-center gap-2'>
        <Account className={'flex-col-reverse'} addressHide={true} connectStyles={'hidden'} />
      </div>
    </div>
  )
}

export default VerticalNavbar
