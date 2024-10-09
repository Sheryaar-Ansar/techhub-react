import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const mode = useSelector((state)=>state.mode.mode)
  return (
    <div className={`mx-auto ${mode ? 'bg-gray-900' : 'bg-gray-200'} w-full pt-[100px] pb-[30px]`}>
      <div className='flex justify-center items-center flex-col'>
        <span className='w-full h-[2px] bg-gray-300'></span>
        <div className='mt-3'>
            <h1 className='pointer-events-none hover:text-gray-100 transition-colors ease-out font-mono'>Copyright &copy; 2024 Tech Hub . <span className='pointer-events-none'>All rights reserved.</span> | <span className={`${mode ? 'text-white hover:text-gray-700' : 'text-black hover:text-gray-300'} transition-colors duration-300 ease-in-out`}>Privacy Policy</span> | <span>Terms of Service</span> </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
