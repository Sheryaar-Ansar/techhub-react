import React, { useEffect, useRef, useState } from 'react'
import ItemListing from '../components/shop/ItemListing';
import { data } from '../data'
import CategoryList from '../components/shop/CategoryList';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setItemsPerPage, setNextPage } from '../redux/features/paginationSlices';
import PriceRange from '../components/shop/PriceRange';
import toast, { Toaster } from 'react-hot-toast';
import SearchFilter from '../components/shop/SearchFilter';

const Shop = () => {
    const nextPage = useRef(null)
    const mode = useSelector((state) => state.mode.mode)
    const category = useSelector((state) => state.category.category)
    const currentPage = useSelector((state) => state.pagination.currentPage);
    const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);
    const minPrice = useSelector((state) => state.price.minRange)
    const maxPrice = useSelector((state) => state.price.maxRange)
    const dispatch = useDispatch();
    const [search, setSearch] = useState('')


    const filteredData = data.filter((product) => {
        const isCategory = category === 'All' || product.category === category
        const isPriceRange = product.price.replace(/,/g, '') >= minPrice && product.price.replace(/,/g, '') <= maxPrice
        const isSearch = product.name.toLowerCase().includes(search.toLowerCase())
        return isCategory && isPriceRange && isSearch
    })

    const idxOfFirstItem = (currentPage - 1) * itemsPerPage;
    const idxOfLastItem = currentPage * itemsPerPage;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage)
    const currentItems = filteredData.slice(idxOfFirstItem, idxOfLastItem)
    const ShowingItemsNo = Math.min(currentPage * itemsPerPage, filteredData.length)

    const displayPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button key={i} onClick={() => dispatch(setCurrentPage(i))} className={`h-4 w-4 md:h-6 md:w-6 ${currentPage === i && 'bg-green-400 shadow-sm shadow-green-500 border-green-400 border hover:border hover:border-green-500'} ml-2 md:ml-4 mt-5 p-2 md:p-4 text-md flex justify-center rounded-md items-center md:text-lg hover:border-gray-300 hover:border`}>
                    {i}
                </button>
            )
        }
        return pages;
    }
    const handleItemsPerPage = (e) => {
        dispatch(setCurrentPage(1));
        dispatch(setItemsPerPage(e.target.value))
    }
    const handleToast = (name) => {
        toast.success(`${name} is Added to Cart`)
    }
    useEffect(() => {
        dispatch(setCurrentPage(1))
    }, [category, dispatch, minPrice, maxPrice])

    return (
        <div className={`${mode ? 'bg-gray-900' : 'bg-gray-200'}`}>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className={`mx-auto max-w-screen-2xl mt-[70px] pt-[100px]`} ref={nextPage}>
                <div className='w-full h-full gap-10 pb-20 flex'>
                    {/* Category Section */}
                    <div className='hidden md:w-[25%] md:block'>
                        <div>
                            <CategoryList />
                        </div>
                        <div className='mt-6'>
                            <PriceRange />
                        </div>
                    </div>

                    {/* Items Section */}
                    <div className='w-full md:w-[75%]'>
                        <div>
                            <div>
                                <SearchFilter setSearch={setSearch}/>
                            </div>
                            <div className='flex justify-center items-center mt-10 w-full'>
                                <div className='flex flex-row md:flex md:justify-between md:flex-row md:items-center md:w-[95%]'>
                                    <h1>Showing {ShowingItemsNo} Out of {filteredData.length} </h1>
                                    <select onChange={handleItemsPerPage} className={`${!mode ? 'bg-green-300' : 'bg-green-500'} pr-4 rounded-md ml-6 md:ml-0`}>
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
                        </div>
                        <div className='flex justify-center items-center flex-wrap md:flex md:flex-wrap'>
                            {currentItems.map((product) => (
                                <div className='m-3' key={product.id}>
                                    <ItemListing
                                        img={product.images[0]}
                                        name={product.name}
                                        price={product.price}
                                        id={product.id}
                                        handleToast={handleToast}
                                    />
                                </div>
                            ))
                            }
                        </div>
                        <div className='flex'>
                            <h1 onClick={() => {
                                nextPage.current?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }} className='flex'>{displayPageNumbers()}</h1>

                            {/* <button onClick={()=> dispatch(setCurrentPage(currentPage + 1))}>Next</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
