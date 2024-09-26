import React, { useEffect, useState } from 'react'
import { data } from '../../data'
import { useDispatch } from 'react-redux'
import { setCategory } from '../../redux/features/categorySlices'
import { IoIosArrowForward } from 'react-icons/io'

const CategoryList = () => {
  const [categories, setCategories] = useState([])
  const [expand, setExpand] = useState(false)
  const dispatch = useDispatch()
  const listUniqueCategories = () => {
    const uniqueCategory = [...new Set(data.map((item) => item.category))]
    setCategories(uniqueCategory)

  }
  const toggleExpand = () => {
    setExpand(!expand)
  }
  useEffect(() => {
    listUniqueCategories()
  }, [])
  return (
    <div>
      <div className=''>
        Categories
        <div>
          <h1 onClick={toggleExpand} className='flex items-center cursor-pointer'>Shop By Category<span><IoIosArrowForward className={`${!expand ? 'rotate-0' : 'rotate-90'} transition-transform duration-300`} /></span> </h1>
          <div className={`absolute ${!expand ? '-top-96' : 'top-30'}`}>
            <div>
              <label htmlFor="All"><input type="radio" id='All' name='Category' onClick={() => dispatch(setCategory('All'))} />All</label>
            </div>
            <div>
              {categories.map((category, index) => (
                <label className='block' htmlFor={category} key={index}><input type="radio" id={category} name={'Category'} onClick={() => dispatch(setCategory(category))} />{category}</label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryList
