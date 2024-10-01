import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const mode = useSelector((state)=>state.mode.mode)
    const [billingExpand, setBillingExpand] = useState(true)
    const [shippingExpand, setShippingExpand] = useState(false)
    const [paymentExpand, setPaymentExpand] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('')
    const cartItems = useSelector((state) => state.cart)
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0)

    const handleBillingExpand = () => {
        setBillingExpand(!billingExpand)
    }
    const handleShippingExpand = () => {
        setShippingExpand(!shippingExpand)
    }
    const handlePaymentExpand = () => {
        setPaymentExpand(!paymentExpand)
    }
    return (
        <div className='mt-[70px] pt-[100px] min-h-screen mx-auto'>
            <div >
                <form className='block md:flex justify-around w-full'>
                    <div className={` md:w-[50%] ${mode ? 'bg-gray-800' : 'bg-gray-100'} p-3 rounded-lg border`}>
                        <h1 className='text-3xl'>Checkout</h1>
                        <hr className='my-3'/>
                        <div className='ml-5 mt-8'>
                            <div className='border p-3'>
                                <h1 onClick={handleBillingExpand} className='flex items-center cursor-pointer'>Billing Information <IoIosArrowForward className={`${billingExpand ? 'rotate-90' : 'rotate-0'} transition-all ease-linear ml-3`} /></h1>
                                {/* <hr className={`${billingExpand ? 'hidden' : 'w-full mt-3'} transition-all duration-500`} /> */}
                                <div className={`${billingExpand ? 'max-h-[500px]' : 'max-h-[0px]'} overflow-y-hidden transition-all duration-300 mt-3`}>

                                    <label htmlFor="name">Name <input type="text" required placeholder='Enter Name' id='name' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} /></label>
                                    <label className='block mt-3' htmlFor="email">Email <input type="email" required placeholder='Enter Email' id='email' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} /></label>
                                    <label htmlFor="phone" className='mt-3 block'>Phone <input type="number" required placeholder='Enter Phone +92' id='phone' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} /></label>

                                </div>
                            </div>
                            <div className='mt-6 border p-3'>
                                <h1 onClick={handleShippingExpand} className='flex items-center cursor-pointer'>Shipping Information <IoIosArrowForward className={`${shippingExpand ? 'rotate-90' : 'rotate-0'} transition-all ease-linear ml-3`} /></h1>
                                {/* <hr className={`${shippingExpand ? 'hidden' : 'w-full mt-3'} transition-all duration-500`} /> */}
                                <div className={`${shippingExpand ? 'max-h-[500px]' : 'max-h-[0px]'} overflow-y-hidden transition-all duration-300 mt-3`}>

                                    <label htmlFor="address">Address <input type="text" required placeholder='Enter Address' id='address' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} /></label>
                                    <label className='block mt-3' htmlFor="city">City <input type="text" required placeholder='Enter City Name' id='city' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} /></label>
                                    <label htmlFor="zip" className='block mt-3'>Zip Code <input type="number" required placeholder='Enter Zip Code' id='zip' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} /></label>

                                </div>
                            </div>
                            <div className='mt-6 border p-3 mb-6'>
                                <h1 onClick={handlePaymentExpand} className='flex items-center cursor-pointer'>Payment Method <IoIosArrowForward className={`${paymentExpand ? 'rotate-90' : 'rotate-0'} transition-all ease-linear ml-3`} /></h1>
                                {/* <hr className={`${paymentExpand ? 'hidden' : 'w-full mt-3'} transition-all duration-500`} /> */}
                                <div className={`${paymentExpand ? 'max-h-[500px]' : 'max-h-[0px]'} overflow-y-hidden transition-all duration-300 mt-3`}>

                                    <label htmlFor="cod" className='flex items-center'><input checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} type="radio" id='cod' name='payment' className='ml-3' />Cash on Delivery</label>
                                    <label className={`flex items-center mt-2`} htmlFor="card"><input checked={paymentMethod === 'dc'} onChange={() => setPaymentMethod('dc')} type="radio" id='card' name='payment' className='ml-3' />Debit Card </label>
                                    {paymentMethod === 'dc' && (
                                        <div className='mt-6 mb-10'>
                                            <h1 className='text-2xl'>Debit Card Information</h1>
                                            <div className='ml-5 mt-5'>
                                                <label htmlFor="cardNumber" >Card Number <input type="number" required placeholder='Enter Card Number' id='cardNumber' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} /></label>
                                                <label htmlFor="cardName" className='block mt-3'>Card Holder Name <input type="text" required placeholder='Enter Card Holder Name' id='cardName' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} /></label>
                                                <div className='flex w-full mt-3'>
                                                    <label htmlFor="expiry" className='w-[50%]'>Expiry Date <input type="number" maxLength={4} required placeholder='MM/YY' id='expiry' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} /></label>
                                                    <label htmlFor="cvv" className='w-[50%]'>CVV <input type="text" maxLength={3} required placeholder='CVV' id='cvv' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} /></label>
                                                </div>
                                            </div>
                                        </div>
                                    )}


                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className={` mt-5 md:mt-0${mode ?'bg-gray-800' :'bg-gray-100'} border p-3 rounded-xl`}>
                            <h1 className='text-2xl'>Order Summary</h1>
                            <hr className='my-3' />
                            <div className=''>
                                {cartItems.map((item) => (
                                    <div>
                                        <div className='flex items-center'>
                                            <img src={item.img} className='w-[80px] h-[80px] rounded-full' />
                                            <div className='ml-2'>
                                                <h1 className='text-md md:text-lg'>{item.name}</h1>
                                                <p className='mt-1 text-sm text-green-400'>PKR {item.price.toLocaleString()} x {item.qty}</p>
                                            </div>
                                        </div>
                                        <hr className='my-3'/>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className='font-bold'>Total Price: <span className='font-normal'>{totalPrice.toLocaleString()} PKR</span></p>
                                <button className='h-10 w-full bg-green-400 border rounded-lg my-3 hover:shadow-md hover:shadow-green-500 hover:border-green-400 transition-all duration-300 ease-out'>Place Order</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout