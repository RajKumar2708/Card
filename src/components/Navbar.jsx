import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='w-full h-[10vh] flex justify-between items-center border-b border-b-gray-400 p-4 relative'>
      <div>Logo</div>

      <div className='hidden md:flex gap-8'>
        <button>Home</button>
        <button>Blog</button>
        <button>Courses</button>
        <button>About</button>
        <button>Contact</button>
      </div>

      <div className='md:hidden'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-xl'>
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isMenuOpen && (
        <div className='absolute top-[10vh] right-0 w-[50%] bg-white shadow-lg z-50'>
          <div className='flex flex-col items-center'>
            <button className='py-2'>Home</button>
            <button className='py-2'>Blog</button>
            <button className='py-2'>Courses</button>
            <button className='py-2'>About</button>
            <button className='py-2'>Contact</button>
            <button className='bg-[#a247fd] text-white p-3 rounded-md mt-4'>Start For Free</button>
          </div>
        </div>
      )}

      <div className='hidden md:block'>
        <button className='bg-[#a247fd] text-white p-3 rounded-md'>Start For Free</button>
      </div>
    </div>
  )
}

export default Navbar
