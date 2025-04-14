import React, { useState } from 'react'
import { FastForward, Projector } from 'lucide-react'
import Button from './Button'


const EmailVerfication = () => {
    const [isValid , setIsvalid] = useState(true);
  return (
    <div className='bg-[#002A5B] h-screen text-white'>
    <div className='flex justify-center items-center py-12'>
        <Projector className='m-4'/>
        <span className='text-[#41E6D4] text-xl '>Webinaar</span>
        <span className='text-xl'>.gg</span>
     </div>
    <div className=" flex flex-col justify-center items-center">
     
     <div className='flex justify-center items-center flex-col'>
        <p className='text-2xl py-10 '>Lets Get Started</p>
     </div>
     <div className='flex flex-col justify-center items-center p-4' >
        <input type="email" placeholder='Your birth year' className='bg-[#193F6A] p-4 rounded-lg m-4' onChange={(e)=>{
            e.target.value;
            setIsvalid(false)
        }}/>
        <Button disabled={isValid} onClick={()=>{
         console.log("button clicked")
        }}>Continue </Button>
     </div>
    </div>
    </div>
  )
}

export default EmailVerfication