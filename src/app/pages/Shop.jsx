import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemListing from '../components/shop/ItemListing';
import { data } from '../data'
import AddToCart from '../components/shop/AddToCart';
import { IoMdClose } from 'react-icons/io';
import { cartSlider } from '../redux/features/cartsliderSlices';
import { GiShoppingCart } from 'react-icons/gi';

const Shop = () => {
    const cartItems = useSelector((state) => state.cart);
    const active = useSelector((state) => state.slider.slider)
    const mode = useSelector((state) => state.mode.mode)
    const dispatch = useDispatch()
    const totalItems = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
    const totalQty = cartItems.reduce((total, item) => total + item.qty * item.price, 0);
    const total = totalQty.toLocaleString()


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
            <div className={`fixed top-0 right-0 w-[400px] ${mode ? 'bg-black text-white' : 'bg-white text-black'} h-full transition-all duration-300 ${active ? 'translate-x-0' : 'translate-x-full'} overflow-y-scroll`}>
                <div className='flex justify-between items-center p-3'>
                    <span>Cart</span>
                    <IoMdClose onClick={() => dispatch(cartSlider())} className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer' />
                </div>
                {cartItems.length === 0 ? <div className='flex justify-center items-center flex-col'><GiShoppingCart className='text-2xl'/> <h1>Your Cart Is Empty</h1> </div> : cartItems.map((cart) => {
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
                {cartItems.length > 0 && (
                    <div className={`pd-4 bg-black ${!mode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                        <div>
                            <div>
                                <h1>Items: {totalItems}</h1>
                                <h1>Total Amount: {total} -/PKR</h1>
                            </div>
                            <hr />
                            <button>Checkout</button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Shop
