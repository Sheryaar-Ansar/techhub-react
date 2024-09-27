import React, { useEffect, useState } from 'react'
import ItemListing from '../components/shop/ItemListing';
import { data } from '../data'
import CategoryList from '../components/shop/CategoryList';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/shop/Pagination';
import { setCurrentPage, setItemsPerPage, setNextPage } from '../redux/features/paginationSlices';


const Shop = () => {
    const category = useSelector((state) => state.category.category)
    const currentPage = useSelector((state) => state.pagination.currentPage);
    const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);
    const dispatch = useDispatch();

    const filteredData = data.filter((product) => {
        if (category === 'All') {
            return product;
        } else {
            return category === product.category
        }
    })

    const idxOfFirstItem = currentPage * itemsPerPage;
    const idxOfLastItem = idxOfFirstItem - itemsPerPage;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage)
    const currentItems = filteredData.slice(idxOfLastItem, idxOfFirstItem)
    const totalItems = itemsPerPage * totalPages;

    const displayPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                    <button key={i} onClick={() => dispatch(setCurrentPage(i))} className={`h-6 w-6 ${currentPage === i && 'bg-green-300 shadow-sm shadow-green-500 border-green-300 border hover:border hover:border-green-500'} ml-4 mt-5 md:p-4 md:text-md flex justify-center rounded-md items-center text-lg hover:border-gray-300 hover:border`}>
                        {i}
                    </button>
            )
        }
        return pages;
    }
    useEffect(() => {
        dispatch(setCurrentPage(1))
    }, [category, dispatch])

    return (
        <div className='mx-auto max-w-screen-2xl mt-[70px] pt-[100px]'>
            <div className='w-full h-full gap-10 pb-20 flex'>
                {/* Category Section */}
                <div className='w-[25%]'>
                    <CategoryList />
                </div>

                {/* Items Section */}
                <div className='w-[75%]'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <h1>Showing {itemsPerPage} Out of {data.length} </h1>
                            <select onChange={(e)=>dispatch(setItemsPerPage(e.target.value))} className='mr-0 md:mr-28 bg-green-300'>
                                <option value="9">9</option>
                                <option value="18">18</option>
                                <option value="27">27</option>
                                <option value="36">36</option>
                                <option value="45">45</option>
                                <option value="54">54</option>
                                <option value="63">63</option>
                                <option value="72">72</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-wrap'>
                        {currentItems.map((product) => (
                            <div className='m-3' key={product.id}>
                                <ItemListing
                                    img={product.images[0]}
                                    name={product.name}
                                    price={product.price}
                                    id={product.id}
                                />
                            </div>
                        ))
                        }
                    </div>
                    <div className='flex'>
                        {displayPageNumbers()}
                        {/* <button onClick={()=> dispatch(setCurrentPage(currentPage + 1))}>Next</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop


