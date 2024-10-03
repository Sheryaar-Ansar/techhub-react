import React from 'react'
import toast from 'react-hot-toast'
import { clearCart } from '../redux/features/cartSlices'

const Home = () => {
  
  return (
    <div className='pt-[100px] mt-[70px] min-h-screen'>
      <button onClick={()=>dispatch(clearCart())}>Remove Cart Items</button>
    </div>
  )
}

export default Home
