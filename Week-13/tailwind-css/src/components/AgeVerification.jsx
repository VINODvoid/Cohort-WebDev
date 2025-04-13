import React from 'react'
import { Projector } from 'lucide-react'

const AgeVerification = () => {
  return (
    <div className='bg-[#002A5B] h-screen text-white'>
    <div className='flex justify-center items-center py-12'>
        <Projector/>
        <span className='text-[#41E6D4] text-xl'>Webinaar</span>
        <span className='text-xl'>.gg</span>
     </div>
    <div className=" flex flex-col justify-center items-center">
     
     <div className='flex justify-center items-center flex-col'>
        <p className='text-2xl py-10 '>Verfiy Your Age</p>
        <p className='text-gray-500'>Please confirm your age. This will not be stored.</p>
     </div>
     <div className='flex flex-col justify-center items-center p-4'>
        <input type="text" placeholder='Your birth year' className='bg-[#193F6A] p-4 rounded-lg m'/>
        <button className='p-2  bg-gray-500 my-8 rounded-lg  '>Continue</button>
     </div>
    </div>
    </div>
  )
}

export default AgeVerification
