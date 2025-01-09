

const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-black border-neutral-50 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

        <div className="flex items-center space-x-4">

        <div className="flex items-center px-2 py-2">
        <p className="text-3xl font-bold text-rose-300 text-left">Logo</p>
        </div>

        <span className="text-slate-100 text-2xl">|</span>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
              <li className="flex flex-wrap py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-rose-300 lg:p-0 text-slate-100 text-lg">
              <img 
              src="src/assets/home.png"
              className="h-6 w-5 object-contain mr-1"
              />
                Explore
              </li>
              <li className="flex flex-wrap py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-rose-300 lg:p-0 text-slate-100 text-lg">
              <img 
              src="src/assets/create.png"
              className="h-6 w-5 object-contain mr-1"
              />
                Create
              </li>
              <li className="flex flex-wrap py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-rose-300 lg:p-0 text-slate-100 text-lg">
              <img 
              src="src/assets/edit.png"
              className="h-6 w-5 object-contain mr-1"
              />
                Edit
              </li>
            </ul>
          </div>

          </div>

          <div className="flex items-center lg:order-2">
            <button className="text-black bg-rose-300 hover:bg-rose-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-3xl text-lg px-4 lg:px-12 py-3 lg:py-1 mr-2 focus:outline-none">
              Login
            </button>
          </div>

        </div>
      </nav>
    </header>
  )
};

export default Header;