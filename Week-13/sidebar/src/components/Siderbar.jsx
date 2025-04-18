import React from 'react'

const Siderbar = () => {
  return (
    <div className='flex'>
    <div className=' bg-yellow-500 h-screen md:w-96 w-0 duration-1500 transition-all ease-in-out'>Sidebar</div>
    <div className='bg-red-500  flex-1 h-screen'>Content</div>
    </div>
  )
}

export default Siderbar;