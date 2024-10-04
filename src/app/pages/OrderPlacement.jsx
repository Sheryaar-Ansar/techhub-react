import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/features/cartSlices';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { removeDetails } from '../redux/features/orderSlices';

const OrderPlacement = () => {
  const order = useSelector((state) => state.order)
  const cartItems = useSelector((state) => state.cart)
  const mode = useSelector((state)=>state.mode.mode)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  // console.log('order: ', order);

  const showToast = () => {
    const loadingToast = toast.loading('Redirecting to homepage!')

    setTimeout(() => {
      toast.dismiss(loadingToast)
    }, 1000)
  }
  const clearInfo = () => {
    dispatch(clearCart())
    dispatch(removeDetails())
    showToast()
    navigate('/')
  }

  useEffect(() => {
    if (cartItems.length >= 1 || order.length >= 1) {
      const timeOut = setTimeout(clearInfo, 3000)
      return () => clearTimeout(timeOut)
    }else{
      navigate('/')
    }
  }, [])

  return (
    <>
      {(cartItems.length === 0 || order.length === 0) ? <h1>Redirecting to HomePage...</h1> : (
        <div className='mt-[70px] pt-[100px] flex justify-center items-center min-h-screen'>
          <div className={`border px-6 py-10 rounded-lg shadow-md ${mode && 'border-green-400 shadow-green-400'}`}>
            <h1 className='text-green-400 shadow-sm text-xl text-center font-semibold'>Your Order Has Been Sumitted!</h1>
            <hr className='py-4'/>
            <div>
              <h1 className='text-lg font-semibold'>Order Details</h1>
              <hr className='py-3'/>
              <div>
                <p className='font-mono font-semibold'>Buyer Name: <span className='font-normal'>{order[0].name}</span></p>
                <p className='font-mono font-semibold'>Buyer Email: <span className='font-normal'>{order[0].email}</span></p>
                <p className='font-mono font-semibold'>Buyer Shipping Address: <span className='font-normal'>{order[0].address}</span></p>
                <p className='font-mono font-semibold'>Buyer City: <span className='font-normal'>{order[0].city}</span></p>
                <h1 className='font-mono font-semibold'>Selected Products: <span className='font-normal'>{cartItems.map((item) => <p key={item.id}>{item.qty} x {item.name}</p>)}</span> </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>

  )
}

export default OrderPlacement
