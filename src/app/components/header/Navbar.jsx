import React, { useState } from 'react'
import Toggle from '../Toggle'
import { useDispatch, useSelector } from 'react-redux'
import { cartSlider } from '../../redux/features/cartsliderSlices'
import { CiMenuBurger, CiShoppingCart } from 'react-icons/ci'
import Cart from '../cart/Cart'
import { NavLink } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import '../../../App.css'
import logo from '../../../assets/logo.png.png'

const Navbar = () => {
  const dispatch = useDispatch()
  const mode = useSelector((state)=>state.mode.mode)
  const cartItems = useSelector((state)=>state.cart)
  const [active, setActive] = useState(false)
  const handleNavActive = () => {
    setActive(!active)
  }
  const handleNavbarClose = () => {
    setActive(false)
  }
  const NavigateToHome = () => {
    window.location.href='/';
  }
  
  const content = <>
    <div className={`md:hidden absolute block top-20 left-0 w-full h-full right-0 ${mode ? 'bg-gray-900' : 'bg-gray-200'} transition-colors duration-300 z-50`}>
      <div className='flex justify-center items-center flex-col py-9'>
        <NavLink to={'/'} onClick={handleNavbarClose}>Home</NavLink>
        <NavLink to={'/shop'} className={'mt-5'} onClick={handleNavbarClose}>Shop</NavLink>
        <NavLink to={'/contact'} className={'mt-5'} onClick={handleNavbarClose}>Contact Us</NavLink>
      </div>
    </div>
  </>
  return (
    <div>
      {/* ${mode ? 'border-green-500 shadow-sm shadow-green-200' : 'border-gray-300 shadow-md shadow-gray-100'} */}
      <div className={`absolute top-0 left-0 w-full h-20 flex justify-between items-center pl-5 lg:pl-7 pr-5 lg:pr-20 ${mode ? 'bg-gray-900' : 'bg-gray-200'} transition-all duration-300`}>
        <button onClick={NavigateToHome} className='mt-5'><img src={logo} className='w-[200px] h-[200px]' /></button>
        <div className='hidden md:flex lg:flex flex-1 justify-center items-center text-sm md:text-md'>
          <NavLink to={'/'} className={`uppercase font-bold`}>Home</NavLink>
          <NavLink to={'/shop'} className={`ml-0 md:ml-8 mt-20 md:mt-0 uppercase font-bold`}>Shop</NavLink>
          <NavLink to={'/contact'} className={`ml-0 md:ml-8 mt-20 md:mt-0 uppercase font-bold`}>Contact Us</NavLink>
        </div>
        <div className='flex justify-center items-center'>
          <Toggle/>
          <h1 className='flex cursor-pointer' onClick={()=>dispatch(cartSlider())}><CiShoppingCart className='text-3xl ml-5'/><span className='bg-green-300 rounded-full h-5 w-5 flex justify-center items-center text-sm -ml-3 font-medium'>{cartItems.length}</span> </h1>
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
