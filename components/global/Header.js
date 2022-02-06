import Link from 'next/link'
import Logo from '../../public/Logo.svg'
import Account from '../Account'

const Header = () => {
  return (
    <div className='md:px-10 md:py-3 sticky top-0 bg-white z-50'>
      <div className='pb-2 pt-2 mx-4 md:mx-8 flex items-center justify-between'>
        <Link href={'/'} passHref>
          <a>
            <Logo className='cursor-pointer' />
          </a>
        </Link>
        <div className='hidden md:inline-block'>
          <a href='#' className='text-base md:mx-5 font-medium text-gray-900'>
            Home
          </a>
          <a href='#' className='text-base md:mx-5 font-medium text-gray-900'>
            About
          </a>
          <a href='#' className='text-base md:mx-5 font-medium text-gray-900'>
            Docs
          </a>
          <a href='#' className='text-base md:mx-5 font-medium text-gray-900'>
            Blogs
          </a>
          <a href='#' className='text-base md:mx-5 font-medium text-gray-900'>
            Contact
          </a>
        </div>
        <div className='mt-3 sm:mt-0 '>
          {/* <button
            type='button'
            className=''
          >
            Connect Wallet
          </button> */}
          <Account connectStyles='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
        </div>
      </div>
    </div>
  )
}

export default Header
