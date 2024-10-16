import React, { useState } from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addDetails } from '../redux/features/orderSlices'
import { useAuth } from '../context/AuthContext'
import * as Yup from 'yup'

const Checkout = () => {
    const mode = useSelector((state) => state.mode.mode)
    const cartItems = useSelector((state) => state.cart)
    const [showError, setShowError] = useState({})
    const [info, setInfo] = useState({
        name: '',
        email: '',
        number: '',
        address: '',
        city: '',
        zip: '',
        interest: 'cod',
    })
    const validationSchema = Yup.object({
        name: Yup.string().required('First Name is Required!'),
        email: Yup.string().email('Email is not Valid!').required('Email is Required!'),
        number: Yup.string().matches(/^\d{11}$/, 'Phone Number must be 11 digits!').required('Phone Number is Required'),
        address: Yup.string().required('Address is Required!'),
        city: Yup.string().required('City is Required!'),
        zip: Yup.string().matches(/^\d{6}$/, 'Must be 7 digits code!').required('Zip Code is Required!'),
        interest: Yup.string(),
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value, })
    }

    const [billingExpand, setBillingExpand] = useState(true)
    const [shippingExpand, setShippingExpand] = useState(false)
    const [paymentExpand, setPaymentExpand] = useState(false)

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0)

    const { orderPlace } = useAuth()

    const handleBillingExpand = () => {
        setBillingExpand(!billingExpand)
    }
    const handleShippingExpand = () => {
        setShippingExpand(!shippingExpand)
    }
    const handlePaymentExpand = () => {
        setPaymentExpand(!paymentExpand)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(info, { abortEarly: false })
            console.log('data : ', info);
            dispatch(addDetails({ name: info.name, email: info.email, address: info.address, city: info.city, gateway: info.interest }))
            orderPlace()
            navigate('/order-placement')

        } catch (error) {
            const newErrors = {};
            error.inner.forEach((err) => {
                newErrors[err.path] = err.message
            })
            setShowError(newErrors)
            setShippingExpand(true)
            setPaymentExpand(true)
        }
        // console.log('Errors: ', showError);

    }


    return (
        <div className={`mt-[70px] pt-[100px] min-h-screen mx-auto ${mode ? 'bg-gray-900' : 'bg-gray-200'}`}>
            <div >
                {cartItems.length === 0 ? (
                    <div className={`flex justify-center items-center flex-col ${mode ? 'bg-gray-900' : 'bg-gray-200'}`}><GiShoppingCart className='text-2xl' />
                        <h1>Your Cart Is Empty</h1>
                        <button onClick={() => navigate('/shop')} className='w-[250px] h-[45px] bg-green-300 text-md uppercase mt-3 hover:border hover:border-green-300 hover:shadow-md hover:shadow-green-400 transition-all duration-300 ease-in-out'>Continue Shopping</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className='block md:flex justify-around w-full'>
                        <div className={` md:w-[50%] ${mode ? 'bg-gray-800' : 'bg-gray-300'} p-3 rounded-lg border`}>
                            <h1 className='text-3xl uppercase font-bold font-sans'>Checkout</h1>
                            <hr className='my-3' />
                            <div className='ml-5 mt-8'>
                                <div className='border p-3'>
                                    <h1 onClick={handleBillingExpand} className='flex items-center cursor-pointer'>Billing Information <IoIosArrowForward className={`${billingExpand ? 'rotate-90' : 'rotate-0'} transition-all ease-linear ml-3`} /></h1>
                                    <div className={`${billingExpand ? 'max-h-[500px]' : 'max-h-[0px]'} overflow-y-hidden transition-all duration-300 mt-3`}>
                                        <label htmlFor="name">Name <input type="text" name='name' onChange={handleOnChange} value={info.name} placeholder='Enter Name' id='name' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} /> {showError.name && <span className='text-red-500'>{showError.name}</span>}</label>
                                        <label className='block mt-3' htmlFor="email">Email <input type="email" name='email' onChange={handleOnChange} value={info.email} placeholder='Enter Email' id='email' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} />{showError.email && <span className='text-red-500'>{showError.email}</span>}</label>
                                        <label htmlFor="phone" className='mt-3 block'>Phone <input type="number" name='number' onChange={handleOnChange} value={info.number} placeholder='Enter Phone +92' id='phone' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} />{showError.number && <span className='text-red-500'>{showError.number}</span>}</label>
                                    </div>
                                </div>
                                <div className='mt-6 border p-3'>
                                    <h1 onClick={handleShippingExpand} className='flex items-center cursor-pointer'>Shipping Information <IoIosArrowForward className={`${shippingExpand ? 'rotate-90' : 'rotate-0'} transition-all ease-linear ml-3`} /></h1>
                                    <div className={`${shippingExpand ? 'max-h-[500px]' : 'max-h-[0px]'} overflow-y-hidden transition-all duration-300 mt-3`}>

                                        <label htmlFor="address">Address <input type="text" name='address' onChange={handleOnChange} value={info.address} placeholder='Enter Address' id='address' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} />{showError.address && <span className='text-red-500'>{showError.address}</span>}</label>
                                        <label className='block mt-3' htmlFor="city">City <input type="text" name='city' onChange={handleOnChange} value={info.city} placeholder='Enter City Name' id='city' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} />{showError.city && <span className='text-red-500'>{showError.city}</span>}</label>
                                        <label htmlFor="zip" className='block mt-3'>Zip Code <input type="text" maxLength={7} name='zip' onChange={handleOnChange} value={info.zip} placeholder='Enter Zip Code' id='zip' className={`block border p-1 ${mode ? 'bg-gray-700' : ''} transition-all duration-300`} />{showError.zip && <span className='text-red-500'>{showError.zip}</span>}</label>
                                    </div>
                                </div>
                                <div className='mt-6 border p-3 mb-6'>
                                    <h1 onClick={handlePaymentExpand} className='flex items-center cursor-pointer'>Payment Method <IoIosArrowForward className={`${paymentExpand ? 'rotate-90' : 'rotate-0'} transition-all ease-linear ml-3`} /></h1>
                                    <div className={`${paymentExpand ? 'max-h-[500px]' : 'max-h-[0px]'} overflow-y-hidden transition-all duration-300 mt-3`}>
                                        <label htmlFor="interest" className='flex items-center'><input checked readOnly name='interest' value={info.interest} type="radio" id='interest' className='ml-3' />Cash on Delivery</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={` mt-5 md:mt-0 ${mode ? 'bg-gray-800' : 'bg-gray-300'} border p-3 rounded-xl transition-all duration-500`}>
                                <h1 className='text-2xl'>Order Summary</h1>
                                <hr className='my-3' />
                                <div className=''>
                                    {cartItems.map((item) => (
                                        <div key={item.id}>
                                            <div className='flex items-center'>
                                                <img src={item.img} className='w-[80px] h-[80px] rounded-full' />
                                                <div className='ml-2'>
                                                    <h1 className='text-md md:text-lg'>{item.name}</h1>
                                                    <p className='mt-1 text-sm text-green-400'>PKR {item.price.toLocaleString()} x {item.qty}</p>
                                                </div>
                                            </div>
                                            <hr className='my-3' />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className='font-bold'>Total Price: <span className='font-normal'>{totalPrice.toLocaleString()} PKR</span></p>
                                    <button type='submit' className='h-10 w-full bg-green-400 border rounded-lg my-3 hover:shadow-md hover:shadow-green-500 hover:border-green-400 transition-all duration-300 ease-out'>Place Order</button>
                                </div>
                            </div>
                        </div>
                    </form>
                )}

            </div>
        </div>
    )
}

export default Checkout