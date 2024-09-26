import React from 'react'
import Toggle from '../Toggle'
import { useDispatch } from 'react-redux'
import { cartSlider } from '../../redux/features/cartsliderSlices'
import { CiShoppingCart } from 'react-icons/ci'
import Cart from '../cart/Cart'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Toggle />
      <button onClick={()=>dispatch(cartSlider())}><CiShoppingCart className='text-2xl'/></button>
      <div>
        <Cart />
      </div>
    </div>
  )
}

export default Navbar
