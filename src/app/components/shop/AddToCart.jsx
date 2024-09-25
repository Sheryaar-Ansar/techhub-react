import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { cartDecrement, cartIncrement, removeCart } from '../../redux/features/cartSlices'
import { MdDelete } from 'react-icons/md'

const AddToCart = ({ id, img, name, price, qty }) => {
    const dispatch = useDispatch();
    return (
        <div className='relative'>
            <div className='z-50'>
                <div key={id} className='flex mb-4 shadow-md'>
                    <div>
                        <img src={img} alt={name} className='w-[60px] h-[60px] rounded-md' />
                    </div>
                    <div>
                        <div className='flex justify-between items-center w-full'>
                            <h1>{name}</h1>
                            <MdDelete  onClick={()=>dispatch(removeCart(id))} className='text-red-600 cursor-pointer absolute right-3 top-7 text-md' />
                        </div>
                        <div className='flex'>
                            <p>{price.toLocaleString()} -/PKR</p>
                            <div className='flex justify-center items-center gap-1 absolute right-7'>
                                <AiOutlineMinus onClick={() => dispatch(qty > 1 ? cartDecrement({ id: id }) : dispatch(removeCart(id)))} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all cursor-pointer' />
                                <span>{qty}</span>
                                <AiOutlinePlus onClick={() => qty >= 1 ? dispatch(cartIncrement({ id: id })) : qty = 0} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddToCart
