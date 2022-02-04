import { useState } from 'react'
import { useMoralis } from 'react-moralis'

import Blockie from '../global/Blockie'
import Address from './Address'
import ExternalLink from '../../public/externalLink.svg'
import { connectors } from './config'
import { getExplorer } from '../../helpers/networks'
import { getEllipsisTxt } from '../../helpers/formatters'
import Modal from './Modal'
import Wallet from '../../public/dashboard/wallet.svg'

function Account({ showIcon = false }) {
  const { authenticate, isAuthenticated, account, chainId, logout } = useMoralis()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false)

  //When no wallet is connected show modal with wallets to select
  if (!isAuthenticated || !account) {
    return (
      <>
        <div
          className='inline-flex justify-between items-center w-full'
          onClick={() => setIsAuthModalVisible(true)}
        >
          <p className={`${showIcon && 'text-2xl font-semibold'} font-nunito`}>Connect to Wallet</p>
          {showIcon && <Wallet className='w-12 h-12' />}
        </div>
        <Modal
          open={isAuthModalVisible}
          setOpen={setIsAuthModalVisible}
          title={'Connect to Wallet'}
          children={<Wallets setOpen={setIsAuthModalVisible} authenticate={authenticate} />}
        />
      </>
    )
  }

  //When wallet is connected show account data modal
  return (
    <>
      <div
        className={`${
          showIcon ? 'bg-transparent justify-between w-full' : 'w-fit justify-center'
        } flex items-center rounded-xl bg-gray-200 cursor-pointer p-2 h-10`}
        onClick={() => setIsModalVisible(true)}
      >
        <p className={`${showIcon && 'text-2xl'} mr-2 text-green-500`}>
          {getEllipsisTxt(account, 6)}
        </p>
        <Blockie currentWallet scale={showIcon ? 6 : 3} />
      </div>
      <Modal
        open={isModalVisible}
        setOpen={setIsModalVisible}
        title={'Account'}
        children={
          <AccountData
            setOpen={setIsModalVisible}
            logout={logout}
            chainId={chainId}
            account={account}
          />
        }
      />
    </>
  )
}

//Wallets modal component
const Wallets = ({ setOpen, authenticate }) => {
  return (
    <div className='flex flex-wrap justify-start items-center'>
      {connectors.map(({ title, icon, connectorId }, key) => (
        <div
          key={key}
          className='w-1/2 p-4 flex flex-col justify-center items-center cursor-pointer'
          onClick={async () => {
            try {
              await authenticate({ provider: connectorId })
              window.localStorage.setItem('connectorId', connectorId)
              setOpen(false)
            } catch (e) {
              console.error(e)
            }
          }}
        >
          <img src={icon} alt={title} className='w-8 h-8 items-center mb-2' />
          <h1 className='font-nunito'>{title}</h1>
        </div>
      ))}
    </div>
  )
}

//Account data Modal component
const AccountData = ({ setOpen, logout, chainId, account }) => {
  return (
    <>
      <div className='mt-5 sm:mt-6 border p-4 rounded-xl'>
        <Address avatar='left' size={6} copyable style={{ fontSize: '20px' }} />
        <a
          className='inline-flex justify-start items-center gap-1 w-full rounded-md text-sm py-2 text-blue-500 cursor-pointer outline-none border-0'
          href={`${getExplorer(chainId)}/address/${account}`}
          target='_blank'
          rel='noreferrer'
        >
          <ExternalLink className='w-6 h-6' />
          View in Explorer
        </a>
      </div>
      <div className='mt-5 sm:mt-6'>
        <button
          type='button'
          className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
          onClick={async () => {
            await logout()
            window.localStorage.removeItem('connectorId')
            setOpen(false)
          }}
        >
          Disconnect Wallet
        </button>
      </div>
    </>
  )
}

export default Account
