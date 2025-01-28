import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-slate-200 shadow-md">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center p-3">
        {/* Logo Section */}
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Real</span>
          <span className="text-slate-700"> Estate</span>
        </h1>

        {/* Search Bar - Hidden on Mobile */}
        <form className="hidden sm:flex bg-slate-300 shadow-md items-center rounded-md">
          <input
            className="w-full bg-transparent placeholder:text-slate-700 text-slate-600 text-sm pl-3 pr-28 py-2 outline-none"
            placeholder="Search..."
          />
          <FaSearch className="text-slate-500 mx-2" />
        </form>

        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-slate-200 shadow-md p-4">
          <form className="bg-slate-300 shadow-md flex items-center rounded-md">
            <input
              className="w-full bg-transparent placeholder:text-slate-700 text-slate-600 text-sm pl-3 py-2 outline-none"
              placeholder="Search..."
            />
            <FaSearch className="text-slate-500 mx-2" />
          </form>
        </div>
      )}
    </header>
    </>
  )
}

export default Header




  