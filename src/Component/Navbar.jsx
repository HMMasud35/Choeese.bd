import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoMdSearch } from 'react-icons/io'
import { MdOutgoingMail } from 'react-icons/md'

const Navbar = () => {
  return (
    <header>
      <div className='w-full bg-teal-600'>
        <div className="container">
          <div className='w-full h-12 flex justify-between items-center'>
            <ul className='flex gap-8'>
              <li className='flex items-center text-lg font-semibold text-orange-300 text-shadow-md text-shadow-black'><a href=""></a><BiSolidPhoneCall
               className='mr-2 text-2xl font-normal text-orange-300 drop-shadow-md drop-shadow-black' />01952719635</li>
              <li className='flex items-center text-lg font-semibold text-orange-300 text-shadow-md text-shadow-black'><a href=""></a><MdOutgoingMail className='mr-2 text-2xl font-normal text-orange-300 drop-shadow-md drop-shadow-black' />help@choeese.bd.com</li>
            </ul>
            <div className='flex relative items-center'>
              <button className='absolute drop-shadow-xs drop-shadow-black bg-blue-500 rounded-4xl px-3 pr-6 text-lg active:bg-orange-900 active:z-10 active:pr-3 '>BN</button>
              <button className='absolute drop-shadow-xs drop-shadow-black ml-10 bg-orange-300 rounded-4xl px-3 text-lg active:bg-orange-900 active:z-10  '>EN</button>
            </div>
          </div>
        </div>
      </div>
      <nav className='w-full bg-[#c27306]/40'>
        <div className="container">
          <div className='w-full h-20 flex justify-between items-center'>
            <div>
              <a href="">
                <img src="" alt="" />
                <h3 className='text-4xl font-bold'>Cho<span className='text-blue-800'>EE</span>se</h3>
              </a>
            </div>
            <div className='flex'>
              <div className='relative flex'>
                <input className='border-2 border-gray-500 rounded-4xl pl-5 w-120 h-10 mr-5 outline-0 text-md' type="search" placeholder='Search' /><IoMdSearch className='absolute left-108 top-1 text-3xl' />
              </div>
              <ul className='flex gap-5 items-center'>
                <li className='p-2'><a className='w-full px-3 py-2 rounded-xl text-xl font-semibold hover:bg-amber-700' href="">Home</a></li>
                <li className='p-2'><a className='w-full px-3 py-2 rounded-xl text-xl font-semibold hover:bg-amber-700' href="">Service</a></li>
                <li className='p-2'><a className='w-full px-3 py-2 rounded-xl text-xl font-semibold hover:bg-amber-700' href="">Our Outlate</a></li>
                <li className='p-2'><a className='w-full px-3 py-2 rounded-xl text-xl font-semibold hover:bg-amber-700' href="">About</a></li>
                <button className='px-5 py-2 bg-blue-500 drop-shadow-xs drop-shadow-black rounded-2xl text-xl text-white font-bold cursor-pointer hover:bg-gray-500'>Login</button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar