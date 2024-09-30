import React, { useState } from 'react'
import Toggle from '../Toggle'
import { useDispatch, useSelector } from 'react-redux'
import { cartSlider } from '../../redux/features/cartsliderSlices'
import { CiMenuBurger, CiShoppingCart } from 'react-icons/ci'
import Cart from '../cart/Cart'
import { NavLink } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import '../../../App.css'

const Navbar = () => {
  const dispatch = useDispatch()
  const mode = useSelector((state)=>state.mode.mode)
  const [active, setActive] = useState(false)
  const handleNavActive = () => {
    setActive(!active)
  }
  const content = <>
    <div className={`md:hidden absolute block top-20 left-0 w-full h-full right-0 ${mode ? 'bg-gray-900' : 'bg-gray-200'} transition-colors duration-300 z-50`}>
      <div className='flex justify-center items-center flex-col py-9'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/shop'}>Shop</NavLink>
      </div>
    </div>
  </>
  return (
    <div>
      <div className={`absolute top-0 left-0 w-full h-20 flex justify-between items-center pl-5 lg:pl-7 pr-5 lg:pr-20 border-b-2 ${mode ? 'border-green-500 shadow-sm shadow-green-200' : 'border-gray-300 shadow-md shadow-gray-100'} ${mode ? 'bg-gray-900' : 'bg-gray-200'} transition-all duration-300`}>
        <h1 className='text-2xl'>Tech Hub</h1>
        <div className='hidden md:flex lg:flex flex-1 justify-center items-center text-sm md:text-md lg:text-lg'>
          <NavLink to={'/'} className={`uppercase `}>Home</NavLink>
          <NavLink to={'/shop'} className={`ml-0 md:ml-8 mt-20 md:mt-0 uppercase `}>Shop</NavLink>
        </div>
        <div className='flex justify-center items-center'>
          <Toggle className={``}/>
          <CiShoppingCart className='text-3xl cursor-pointer ml-5' onClick={()=>dispatch(cartSlider())}/>
          <button onClick={handleNavActive} className='flex md:hidden ml-3'>{active ? <FaTimes className='text-xl'/> : <CiMenuBurger className='text-xl'/>}</button>
        </div>
      </div>
      <div>
        {active && content}
      </div>
      <div>
        <Cart />
      </div>
    </div>
  )
}

export default Navbar
