import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemListing from '../components/shop/ItemListing';
import { data } from '../data'
import AddToCart from '../components/shop/AddToCart';
import { IoMdClose } from 'react-icons/io';
import { cartSlider } from '../redux/features/cartsliderSlices';

const Shop = () => {
    const cartItems = useSelector((state) => state.cart);
    const active = useSelector((state)=>state.slider.slider)
    const mode = useSelector((state)=>state.mode.mode)
    const dispatch = useDispatch()
    
    return (
        <div>
            <div className='flex flex-wrap'>
                {data.length > 0 ? data.map((product) => {
                    return (
                        <div className='m-3'>
                            <ItemListing
                                img={product.images[0]}
                                name={product.name}
                                price={product.price}
                                id={product.id}
                            />
                        </div>
                    )
                }) : <h1>No such Products</h1>}
            </div>
            <div className={`fixed top-0 right-0 w-[400px] ${mode ? 'bg-black text-white' : 'bg-white text-black'} h-full transition-all duration-300 ${active  ?'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex justify-between items-center p-3'>
                    <span>Cart</span>
                    <IoMdClose onClick={()=>dispatch(cartSlider())} className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer' />
                </div>
                {cartItems.length === 0 ? <h1>Empty Cart</h1> : cartItems.map((cart) => {
                    return (
                        <AddToCart
                            id={cart.id}
                            img={cart.img}
                            name={cart.name}
                            price={cart.price}
                            qty={cart.qty}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Shop
