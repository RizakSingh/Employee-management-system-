import React from 'react'


const Header = () => {
 
  return (
    <div className='flex items-end p-8 justify-between text-white bg-black'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>rizakdeep singh</span> </h1>
      <button 
      className='px-5 rounded-sm py-2 bg-red-600  hover:bg-red-700 transition-all font-medium'>Logout</button>
    </div>
  )
}

export default Header
