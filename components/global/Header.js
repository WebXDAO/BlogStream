import Link from 'next/link'
import { useMoralis } from 'react-moralis'
import Logo from '../../public/Logo.svg'
import Account from '../Account'

const Header = () => {
  const { isAuthenticated } = useMoralis()
  return (
    <div className='md:px-10 md:py-3 sticky top-0 bg-white z-50'>
      <div className='pb-2 pt-2 mx-4 md:mx-8 flex items-center justify-between'>
        <Link href={'/'} passHref>
          <a>
            <Logo className='cursor-pointer' />
          </a>
        </Link>
        <div className='hidden lg:inline-block'>
          <a
            href={isAuthenticated ? '/dashboard' : '/'}
            className='text-base md:mx-6 font-medium text-gray-900'
          >
            {isAuthenticated ? 'Dashboard' : 'Home'}
          </a>
          <a href='#' className='text-base md:mx-6 font-medium text-gray-900'>
            About
          </a>
          <a href='#' className='text-base md:mx-6 font-medium text-gray-900'>
            Docs
          </a>
          <a href='#' className='text-base md:mx-6 font-medium text-gray-900'>
            Blogs
          </a>
          <a href='#' className='text-base md:mx-6 font-medium text-gray-900'>
            Contact
          </a>
        </div>
        <div className='mt-3 sm:mt-0 sm:ml-4'>
          <Account connectStyles='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
        </div>
      </div>
    </div>
  )
}

export default Header
