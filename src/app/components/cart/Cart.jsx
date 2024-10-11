import React from 'react'
import AddToCart from './AddToCart'
import { useSelector, useDispatch } from 'react-redux'
import { IoMdClose } from 'react-icons/io';
import { cartSlider } from '../../redux/features/cartsliderSlices';
import { GiShoppingCart } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state)=>state.cart)
    const active = useSelector((state) => state.slider.slider)
    const mode = useSelector((state) => state.mode.mode)
    const dispatch = useDispatch()
    const totalItems = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
    const totalQty = cartItems.reduce((total, item) => total + item.qty * item.price, 0);
    const total = totalQty.toLocaleString()
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate(`/proceed-to-checkout`);
        dispatch(cartSlider())
    }
    // console.log(cartItems);
    

    return (
        <div>
            <div className={`fixed top-0 right-0 w-full md:w-[400px] ${mode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'} h-full transition-all duration-300 ${active ? 'translate-x-0' : 'translate-x-full'} z-50 border rounded-md ${!mode && 'border-gray-300'}`}>
                <div className='flex justify-between items-center p-3'>
                    <span className='text-xl uppercase'>Cart</span>
                    <IoMdClose onClick={() => dispatch(cartSlider())} className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-600 hover:border-red-600 cursor-pointer' />
                </div>
                <hr className='py-1'/>
                <div className='h-[70%] overflow-y-scroll'>
                    {cartItems.length === 0 ? <div className='flex justify-center items-center flex-col'><GiShoppingCart className='text-2xl' /> <h1>Your Cart Is Empty</h1> </div> : cartItems.map((cart) => {
                        return (
                            <AddToCart
                                id={cart.id}
                                img={cart.img}
                                name={cart.name}
                                price={cart.price}
                                qty={cart.qty}
                                key={cart.id}
                            />
                        )
                    })}
                </div>
                {cartItems.length > 0 && (
                    <div className={`h-[30%] bg-black ${!mode ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white'} px-4`}>
                        <div>
                            <div>
                                <h1 className='text-xl font-semibold'>Items: <span className='text-[#767676] text-[16px]'>{totalItems}</span></h1>
                                <h1 className='text-xl font-semibold'>Total Amount: <span className='text-[#767676] text-[16px]'>{total} -/PKR</span></h1>
                            </div>
                            <hr className={`my-1 h-1 w-full ${mode ? 'bg-gray-800' : 'bg-gray-300'} border-0`} />
                            <button onClick={handleCheckout} className='mt-4 w-full text-xl font-normal h-9 bg-green-500 rounded-md cursor-pointer hover:shadow-green-700 hover:shadow-md transition-shadow duration-200'>Checkout</button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Cart
