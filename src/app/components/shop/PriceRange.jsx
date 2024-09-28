import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { setMinRange } from '../../redux/features/priceSlices'

const PriceRange = () => {
    const [expand, setExpand] = useState(false)
    const minPrice = useSelector((state)=>state.price.minRange);
    const maxPrice = useSelector((state)=>state.price.maxRange);
    const updatedMinPrice = minPrice.toLocaleString()
    const updatedMaxPrice = maxPrice.toLocaleString()
    const dispatch = useDispatch()

    const handleExpand = () => {
        setExpand(!expand)
      }
    const handleMinRange = (e) => {
        dispatch(setMinRange(Number(e.target.value)));
    }
  return (
    <div>
      <div className={`px-8 `}>
          <h1 onClick={handleExpand} className='flex items-center cursor-pointer'>Shop By Price Range<span><IoIosArrowForward className={`${!expand ? 'rotate-0' : 'rotate-90'} transition-transform duration-300 ml-3`} /></span> </h1>
          <hr className={`${expand ? 'hidden' : 'flex'} mt-3`} />
          <div className={`${expand ? 'max-h-[500px]' : 'max-h-[0px]'} overflow-hidden transition-all duration-300`}>
            <div className='mt-6'>
              <input type="range" min={'0'} max={maxPrice} value={minPrice} onChange={handleMinRange} className='w-full accent-green-600'/>
            </div>
            <div className='flex justify-between'>
                <label>{updatedMinPrice} -/PKR</label>
                <label>{updatedMaxPrice} -/PKR</label>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PriceRange
