const Header = () => {
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
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
