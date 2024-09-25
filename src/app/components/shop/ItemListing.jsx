import React from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../../redux/features/cartSlices'

const ItemListing = ({img, name, price, id}) => {
    const dispatch = useDispatch()
  return (
      <div key={id}>
        <img src={img} alt={name} className='max-w-[400px] '/>
        <h1>{name}</h1>
        <button onClick={()=>dispatch(addtoCart({id: id, name, price, img, qty: 1}))}>Add To Cart</button>
      </div>
  )
}

export default ItemListing
