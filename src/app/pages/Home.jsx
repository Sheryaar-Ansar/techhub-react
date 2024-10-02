import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/features/cartSlices'

const Home = () => {
  const cartItems = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  console.log(cartItems);
  
  return (
    <div className='pt-[100px] mt-[70px]'>
      <button onClick={()=>dispatch(clearCart())}>Remove Cart Items</button>
    </div>
  )
}

export default Home
