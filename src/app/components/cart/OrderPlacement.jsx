import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/features/cartSlices';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const OrderPlacement = () => {
    const order = useSelector((state) => state.order)
    const cartItems = useSelector((state)=>state.cart)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log('order: ', order);

    const showToast = () => {
       const loadingToast = toast.loading('Redirecting to homepage!')

       setTimeout(()=>{
        toast.dismiss(loadingToast)
       }, 1000)
    }
    const clearInfo = () => {
        dispatch(clearCart())
        showToast()
        navigate('/')
    }
    
    useEffect(()=>{
        const timeOut = setTimeout(clearInfo, 3000)
        return () => clearTimeout(timeOut)
    },[])

  return (
    <div className='mt-[70px] pt-[100px]'>
      <div>
        <h1>Your Order Has Been Sumitted!</h1>
        <div>
            <h1>Order Details</h1>
            <div>
                <p>Buyer Name: {order[0].name}</p>
                <p>Buyer Email: {order[0].email}</p>
                <p>Buyer Shipping Address: {order[0].address}</p>
                <p>Buyer City: {order[0].city}</p>
                <h1>Selected Products: {cartItems.map((item)=> <p key={item.id}>{item.qty} x {item.name}</p>)} </h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPlacement
