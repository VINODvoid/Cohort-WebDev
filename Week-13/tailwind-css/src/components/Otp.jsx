import { Clock, Projector } from 'lucide-react'
import React, { useRef } from 'react'
import Button from './Button'

const Otp = () => {
    
    const reference = useRef();
  return (
    <div className='h-screen bg-[#002A5B] text-white'>
        <div className='flex justify-center items-center py-12'>
            <Projector className='m-4'/>
                <span className='text-xl'>Webinar</span>
                <span className='text-xl text-[#41E6D4]' >.gg</span>
        </div>
        <div className='flex justify-center items-center m-4 flex-col'>
            <div className='text-2xl'>
            Check Your Email For A Code
            </div>
            <div className='p-20'>
                <span className='text-gray-200'>
                Please enter the verfication code sent to 
                </span>
                <span className='text-gray-400 p-2'>
                     kalki@dev.com
                </span>
            </div>
            <div className='flex justify-center items-center flex-row' >
                <div className='bg-blue-300 h-[50] w-[45] p-4 m-3 rounded-xl'><input type="text" className='outline-none w-4 h-5'  maxLength={1} ref={reference}/></div>
                <div className='bg-blue-300 h-[50] w-[45] p-4 m-3 rounded-xl'><input type="text" className='h-5 w-4 outline-none' /></div>
                <div className='bg-blue-300 h-[50] w-[45] p-4 m-3 rounded-xl'><input type="text" className='h-5 w-4 outline-none' /></div>
                <div className='bg-blue-300 h-[50] w-[45] p-4 m-3 rounded-xl'><input type="text" className='h-5 w-4 outline-none' /></div>
                <div className='bg-blue-300 h-[50] w-[45] p-4 m-3 rounded-xl'><input type="text" className='h-5 w-4 outline-none' /></div>
                <div className='bg-blue-300 h-[50] w-[45] p-4 m-3 rounded-xl'><input type="text" className='h-5 w-4 outline-none' /></div>
            </div>
            <div className='flex text-gray-300'>
                <Clock className='mx-2 my-4'/>
                <span className='my-4'>9:34</span>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <Button disabled={true}>
                    <span>Verfiy</span>
                    </Button>
                <p>Can't find the email ? Click here to Resend</p>
            </div>

        </div>
    </div>
  )
}

export default Otp