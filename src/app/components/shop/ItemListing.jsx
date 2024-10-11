import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart } from '../../redux/features/cartSlices'
import { IoIosCart } from 'react-icons/io'
import { FaHeartCircleCheck } from 'react-icons/fa6'
import { ImEye } from 'react-icons/im'
import '../../../App.css'
import { Navigate, useNavigate } from 'react-router-dom'

const ItemListing = ({ img, name, price, id, handleToast }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const mode = useSelector((state) => state.mode.mode)

  const handleViewDetail = () => {
    navigate(`/shop/${id}`)
  }
  const handleAddToCart = () => {
    dispatch(addtoCart({ id: id, name, price: Number(price.replace(/,/g, '')), img, qty: 1 }));
    handleToast(name)
    // console.log(handleToast);
    
  }

  return (
    <div key={id} className={`w-[300px] h-[450px] group border ${mode ? 'border-green-400 shadow-md shadow-green-300 ' : 'bg-gray-300'} shadow-md rounded-lg`}>
      <div className='max-w-[300px] max-h-[300px] relative overflow-y-hidden hover:opacity-50 transition-opacity duration-500'>
        <div className=''>
          <img src={img} alt={name} className='w-[300px] h-[300px] rounded-t-lg' />
        </div>
        <div className={`w-full absolute -bottom-[130px] h-32 py-2 right-0 ${!mode ? 'bg-white' : 'bg-gray-900'} group-hover:bottom-[0px] transition-all duration-500 hover:opacity-100`}>
          <ul className='h-full w-full flex flex-col items-end justify-center gap-2'>
            <li onClick={handleAddToCart} className={`flex justify-end items-center pl-3 cursor-pointer border-b-2 w-full ${!mode ? 'text-gray-300 hover:border-black hover:text-black' : 'text-gray-500 border-gray-500 hover:border-white hover:text-white'} transition-colors ease-linear`}>Add to Cart <IoIosCart className='mx-3' /></li>
            <li onClick={handleViewDetail} className={`flex justify-end items-center pl-3 cursor-pointer border-b-2 w-full ${!mode ? 'text-gray-300 hover:border-black hover:text-black' : 'text-gray-500 border-gray-500 hover:border-white hover:text-white'} transition-colors ease-linear`}>View Details <ImEye className='mx-3' /></li>
            <li className={`flex justify-end items-center pl-3 cursor-pointer border-b-2 w-full ${!mode ? 'text-gray-300 hover:border-black hover:text-black' : 'text-gray-500 border-gray-500 hover:border-white hover:text-white'} transition-colors ease-linear`}>Add to Wishlist <FaHeartCircleCheck className='mx-3' /></li>
          </ul>
        </div>
      </div>
      <div className='w-full py-4 px-1'>
        <div className='w-full'>
          <h1 className='text-xl font-semibold'>{name}</h1>
          <p className='flex justify-end pt-2 text-[#767676] text-[16px]'>{price} -/PKR</p>
        </div>
      </div>
    </div>
  )
}

export default ItemListing
