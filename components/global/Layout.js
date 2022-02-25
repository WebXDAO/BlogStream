import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ title = null, children }) => {
  return (
    // <div className="max-w-7xl mx-auto py-2 mb-4 px-4 sm:px-6 lg:py-4 lg:px-8">
    <>
      <Head>
        <title>{title && `${title} |`} Blogstream</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
    // </div>
  )
}

export default Layout
