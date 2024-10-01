import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useSelector } from 'react-redux'

const Checkout = () => {
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
                <form className='flex justify-between items-center w-full'>
                    <div>
                        <h1>Checkout</h1>
                        <div>
                            <div>
                                <h1 onClick={handleBillingExpand} className='flex items-center cursor-pointer'>Billing Information <IoIosArrowForward className={`${billingExpand ? 'rotate-90' : 'rotate-0'} transition-all ease-linear`} /></h1>
                                <hr className={`${billingExpand ? 'hidden' : 'w-full mt-3'} transition-all duration-500`} />
                                <div className={`${billingExpand ? 'max-h-[500px]' : 'max-h-[0px]'} overflow-y-hidden transition-all duration-300`}>

                                    <label htmlFor="name">Name <input type="text" required placeholder='Enter Name' id='name' className='block' /></label>
                                    <label className='block' htmlFor="email">Email <input type="email" required placeholder='Enter Email' id='email' className='block' /></label>
                                    <label htmlFor="phone">Phone <input type="number" required placeholder='Enter Phone +92' id='phone' className='block' /></label>

                                </div>
                            </div>
                            <div className='mt-6'>
                                <h1 onClick={handleShippingExpand} className='flex items-center cursor-pointer'>Shipping Information <IoIosArrowForward className={`${shippingExpand ? 'rotate-90' : 'rotate-0'} transition-all ease-linear`} /></h1>
                                <hr className={`${shippingExpand ? 'hidden' : 'w-full mt-3'} transition-all duration-500`} />
                                <div className={`${shippingExpand ? 'max-h-[500px]' : 'max-h-[0px]'} overflow-y-hidden transition-all duration-300`}>

                                    <label htmlFor="address">Address <input type="text" required placeholder='Enter Address' id='address' className='block' /></label>
                                    <label className='block' htmlFor="city">City <input type="text" required placeholder='Enter City Name' id='city' className='block' /></label>
                                    <label htmlFor="zip">Zip Code <input type="number" required placeholder='Enter Zip Code' id='zip' className='block' /></label>

                                </div>
                            </div>
                            <div className='mt-6'>
                                <h1 onClick={handlePaymentExpand} className='flex items-center cursor-pointer'>Payment Method <IoIosArrowForward className={`${paymentExpand ? 'rotate-90' : 'rotate-0'} transition-all ease-linear`} /></h1>
                                <hr className={`${paymentExpand ? 'hidden' : 'w-full mt-3'} transition-all duration-500`} />
                                <div className={`${paymentExpand ? 'max-h-[500px]' : 'max-h-[0px]'} overflow-y-hidden transition-all duration-300`}>

                                    <label htmlFor="cod"><input checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} type="radio" id='cod' name='payment' />Cash on Delivery</label>
                                    <label className={`block`} htmlFor="card"><input checked={paymentMethod === 'dc'} onChange={() => setPaymentMethod('dc')} type="radio" id='card' name='payment' />Debit Card </label>
                                    {paymentMethod === 'dc' && (
                                        <div>
                                            <h1>Debit Card Information</h1>
                                            <div>
                                                <label htmlFor="cardNumber">Card Number <input type="number" required placeholder='Enter Card Number' id='cardNumber' className='block' /></label>
                                                <label htmlFor="cardName">Card Holder Name <input type="text" required placeholder='Enter Card Holder Name' id='cardName' className='block' /></label>
                                                <div>
                                                    <label htmlFor="expiry">Expiry Date <input type="number" maxLength={4} required placeholder='MM/YY' id='expiry' className='block' /></label>
                                                    <label htmlFor="cvv">CVV <input type="text" maxLength={3} required placeholder='CVV' id='cvv' className='block' /></label>
                                                </div>
                                            </div>
                                        </div>
                                    )}


                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Order Summary</h1>
                            <div>
                                {cartItems.map((item) => (
                                    <div className='flex'>
                                        <img src={item.img} className='w-[100px] h-[100px] rounded-full' />
                                        <div>
                                            <h1>{item.name}</h1>
                                            <p>PKR {item.price.toLocaleString()} x {item.qty}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p>Total Price: {totalPrice.toLocaleString()} PKR</p>
                                <button>Place Order</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout