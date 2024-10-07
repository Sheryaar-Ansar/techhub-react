import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { cartDecrement, cartIncrement, removeCart } from '../../redux/features/cartSlices'
import { MdDelete } from 'react-icons/md'
import toast from 'react-hot-toast'

const AddToCart = ({ id, img, name, price, qty }) => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode.mode)

    const handleRemoveCart = () => {
        dispatch(removeCart(id))
        toast(`${name} Removed!`, {
            icon: '🛑',
        })
    }

    return (
        <div className='relative px-3'>
            <div className='z-40 relative'>
                <div key={id} className={`flex mb-4 shadow-md ${mode && 'shadow-sm shadow-green-300'}`}>
                    <div>
                        <img src={img} alt={name} className='w-[60px] h-[60px] rounded-md' />
                    </div>
                    <div className='pl-2'>
                        <div className='flex justify-between items-center w-full'>
                            <h1 className='text-[16px] font-medium'>{name}</h1>
                        </div>
                        <div className='flex '>
                            <p className='text-green-500 text-[16px]'>{price} -/PKR</p>
                            <div className='flex justify-center items-center gap-1 absolute right-7'>
                                <AiOutlineMinus onClick={() => dispatch(qty > 1 ? cartDecrement({ id: id }) : dispatch(removeCart(id))) && toast(`${name} Removed!`, {
                                    icon: '🛑',
                                })} className={`border-2 border-gray-600 text-gray-600 ${mode && 'text-white'} hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-md transition-all cursor-pointer`} />
                                <span>{qty}</span>
                                <AiOutlinePlus onClick={() => qty >= 1 ? dispatch(cartIncrement({ id: id })) : qty = 0} className={`border-2 border-gray-600 text-gray-600 ${mode && 'text-white'} hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-md transition-all cursor-pointer`} />
                                <MdDelete onClick={handleRemoveCart} className='text-red-600 cursor-pointer text-md' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddToCart
