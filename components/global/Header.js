import { useEffect, useState } from 'react'
let Web3 = require('web3');

function Header () {

const [address, setAddress] = useState([])
const [web3, setWeb3] = useState([])
  function connectToMetamask() {
    window.ethereum ?
        ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
            setAddress(accounts[0])

            let w3 = new Web3(ethereum)
            setWeb3(w3)

            // console.log("Account", accounts)
            // console.log("Web3", web3)
            // console.log(address)


        }).catch((err) => console.log(err))
        : console.log("Please install MetaMask")
      }
useEffect(() => {
  const checkConnection = async () => {

      // Check if browser is running Metamask
      let web3;
      if (window.ethereum) {
          web3 = new Web3(window.ethereum);
      } else if (window.web3) {
          web3 = new Web3(window.web3.currentProvider);
      };

      if (web3) {
          // Check if User is already connected by retrieving the accounts
          web3.eth.getAccounts()
          .then(async (addr) => {

              // Set User account into state
              setAddress(addr);

              if (addr.length > 0) {
                  // Code here
                  console.log("Current metamask wallet: ", addr)
              }
          });
      }
      
  };

  checkConnection();
}, [])


  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="pb-5 pt-5 mx-8 sm:flex sm:items-center sm:justify-between">
        <img src="./Logo.svg" alt="Blog Stream" />
        <div>
          <a href="#" className="text-base mx-4 font-medium text-gray-900">
            Home
          </a>
          <a href="#" className="text-base mx-4 font-medium text-gray-900">
            About
          </a>
          <a href="#" className="text-base mx-4 font-medium text-gray-900">
            Docs
          </a>
          <a href="#" className="text-base mx-4 font-medium text-gray-900">
            Blogs
          </a>
          <a href="#" className="text-base mx-4 font-medium text-gray-900">
            Contract
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-4">
        {address.length > 0 && <>
                        <span className="text-sm leading-7 font-semibold text-gray-900">
                            Metamask wallet: {address}
                        </span>
                    </>}
        {!address.length > 0 && <><button onClick={connectToMetamask}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Connect Wallet
          </button></>}
        </div>
      </div>
    </div>
  );
};


export default Header;
