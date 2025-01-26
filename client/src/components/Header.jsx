import React from 'react'
import { FaSearch } from 'react-icons/fa'
const Header = () => {
  return (
    <>
      <header className='bg-slate-200 shadow-md'>
        <div className='w-full flex justify-between items-center  max-auto p-3'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className="text-slate-500">Real</span>
            <span className="text-slate-700"> Estate</span>
          </h1>

          <form className="bg-slate-300 shadow-md flex items-center">
            <input
              class="bg-transparent placeholder:text-slate-700 text-slate-600 text-sm  pl-3 pr-28 py-2  outline-none"
      placeholder="search..."
            />
            <FaSearch className="text=slate-500"/>
          </form>
          
        </div>


      </header>
    </>
  )
}

export default Header