import React, { useEffect, useState } from 'react'
import { data } from '../../data'
import { useDispatch } from 'react-redux'
import { setCategory } from '../../redux/features/categorySlices'
import { IoIosArrowForward } from 'react-icons/io'

const CategoryList = () => {
  const [expand, setExpand] = useState(false);
  const [categories, setCategories] = useState([])
  const dispatch = useDispatch()

  const handleExpand = () => {
    setExpand(!expand)
  }
  const listUniqueCategories = () => {
    const uniqueCategory = [...new Set(data.map((item) => item.category))]
    setCategories(uniqueCategory)

  }
  useEffect(() => {
    listUniqueCategories()
  }, [])
  return (
    <div>
      <div className='px-3'>
        <h1 className='text-2xl font-bold'>Filters</h1>
        <hr className='py-5 mt-3' />
        <div className={`px-5 `}>
          <h1 onClick={handleExpand} className='flex items-center cursor-pointer'>Shop By Category<span><IoIosArrowForward className={`${!expand ? 'rotate-0' : 'rotate-90'} transition-transform duration-300 ml-3`} /></span> </h1>
          <hr className={`${expand ? 'hidden' : 'flex'} mt-3`} />
          <div className={`${expand ? 'max-h-[500px]' : 'max-h-[0px]'} overflow-hidden transition-all duration-300`}>
            <div className='mt-6'>
              <label htmlFor="All"><input type="radio" id='All' name='Category' onClick={() => dispatch(setCategory('All'))} />All</label>
            </div>
            <div>
              {categories.map((category, index) => (
                <label className='block pt-2' htmlFor={category} key={index}><input type="radio" id={category} name={'Category'} onClick={() => dispatch(setCategory(category))} />{category}</label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryList
