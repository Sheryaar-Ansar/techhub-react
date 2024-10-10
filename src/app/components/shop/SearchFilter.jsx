import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchFilter = ({setSearch}) => {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='flex w-[90%] border border-gray-500 items-center p-3 rounded-md'>
            <label htmlFor="searchIcon"><BiSearch className='text-xl cursor-pointer'/></label>
            <input type="text" placeholder='Search Your Products' id='searchIcon' className='ml-3 w-full h-full outline-none bg-transparent' onChange={(e)=>setSearch(e.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default SearchFilter
