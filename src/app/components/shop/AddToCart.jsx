import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { cartDecrement, cartIncrement, removeCart } from '../../redux/features/cartSlices'

const AddToCart = ({ id, img, name, price, qty, totalQty, totalItems }) => {
    const dispatch = useDispatch();
    const total = totalQty.toLocaleString()
    return (
        <div>
            <div key={id} className='flex justify-center items-center mb-4 shadow-md relative'>
                <div className='flex justify-center items-center'>
                    <img src={img} alt={name} className='w-[60px] h-[60px] rounded-md' />
                </div>
                <div>
                    <h1>{name}</h1>
                    <div className='flex'>
                        <p>{price.toLocaleString()}-/PKR</p>
                        <div className='flex justify-center items-center gap-1 absolute right-7'>
                            <AiOutlineMinus onClick={()=>dispatch(qty > 1 ? cartDecrement({id: id}) : dispatch(removeCart(id)))} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all cursor-pointer' />
                            <span>{qty}</span>
                            <AiOutlinePlus onClick={()=>qty >= 1 ? dispatch(cartIncrement({id: id})) : qty = 0} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='absolute top-full bottom-0'>
                    <div>
                        <h1>Items: {totalItems}</h1>
                        <h1>Total Amount: {total}</h1>
                    </div>
                    <hr />
                    <button>Checkout</button>
                </div>
            </div>

        </div>
    )
}

export default AddToCart
