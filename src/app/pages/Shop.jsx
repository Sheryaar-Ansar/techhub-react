// import React, { useEffect, useState } from 'react'
// import ItemListing from '../components/shop/ItemListing';
// import { data } from '../data'
// import CategoryList from '../components/shop/CategoryList';
// import { useDispatch, useSelector } from 'react-redux';
// import Pagination from '../components/shop/Pagination';
// import { setCurrentPage, setNextPage } from '../redux/features/paginationSlices';


// const Shop = () => {
//     const category = useSelector((state) => state.category.category)
//     const currentPage = useSelector((state)=>state.pagination.currentPage);
//     const itemsPerPage = useSelector((state)=>state.pagination.itemsPerPage);
//     const dispatch= useDispatch();

//     const filteredData = data.filter((product)=>{
//         if(category==='All'){
//             return product;
//         }else{
//             return category === product.category
//         }
//     })

//     const idxOfFirstItem = currentPage * itemsPerPage;
//     const idxOfLastItem = idxOfFirstItem - itemsPerPage;
//     const totalPages = Math.ceil(filteredData.length / itemsPerPage)
//     const currentItems = filteredData.slice(idxOfLastItem, idxOfFirstItem)

//     const displayPageNumbers = () => {
//         const pages = [];
//         for(let i=1; i <= totalPages; i++){
//             pages.push(
//                 <button key={i} onClick={()=>dispatch(setCurrentPage(i))}>
//                     {i}
//                 </button>
//             )
//         }        
//         return pages;
//     }    
//     useEffect(()=>{
//         dispatch(setCurrentPage(1))
//     },[category, dispatch])

//     return (
//         <div className='mx-auto max-w-screen-2xl mt-[70px] pt-[100px]'>
//             <div className='w-full h-full gap-10 pb-20 flex'>
//                 {/* Category Section */}
//                 <div className='w-[25%]'>
//                     <CategoryList />
//                 </div>

//                 {/* Items Section */}

//                  <div className='w-[75%]'>
//                     <div className='flex flex-wrap'>
//                         {currentItems.map((product) => (
//                             <div className='m-3' key={product.id}>
//                                 <ItemListing
//                                     img={product.images[0]}
//                                     name={product.name}
//                                     price={product.price}
//                                     id={product.id}
//                                 />
//                             </div>
//                         ))
//                         }
//                     </div>
//                     <div>
//                         {displayPageNumbers()}
//                         <button onClick={()=> dispatch(setCurrentPage(currentPage + 1))}>Next</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Shop



import React, { useEffect } from 'react';
import ItemListing from '../components/shop/ItemListing';
import { data } from '../data';
import CategoryList from '../components/shop/CategoryList';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setNextPage } from '../redux/features/paginationSlices';

const Shop = () => {
    const category = useSelector((state) => state.category.category);
    const currentPage = useSelector((state) => state.pagination.currentPage);
    const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);
    const dispatch = useDispatch();

    // Step 1: Filter the data based on the selected category
    const filteredData = data.filter((product) => {
        if (category === 'All') {
            return true; // Return all items when 'All' category is selected
        } else {
            return category === product.category;
        }
    });

    // Step 2: Calculate total pages and items for the current page
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const idxOfLastItem = currentPage * itemsPerPage;
    const idxOfFirstItem = idxOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(idxOfFirstItem, idxOfLastItem);

    // Step 3: Reset the current page when category changes
    useEffect(() => {
        dispatch(setCurrentPage(1)); // Reset to page 1 when category changes
    }, [filteredData, dispatch]);

    // Step 4: Render pagination buttons
    const displayPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => dispatch(setCurrentPage(currentPage +i))} // Update current page
                    className={`px-2 py-1 m-1 ${i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="mx-auto max-w-screen-2xl mt-[70px] pt-[100px]">
            <div className="w-full h-full gap-10 pb-20 flex">
                {/* Category Section */}
                <div className="w-[25%]">
                    <CategoryList />
                </div>

                {/* Items Section */}
                <div className="w-[75%]">
                    <div className="flex flex-wrap">
                        {currentItems.length > 0 ? (
                            currentItems.map((product) => (
                                <div className="m-3" key={product.id}>
                                    <ItemListing
                                        img={product.images[0]}
                                        name={product.name}
                                        price={product.price}
                                        id={product.id}
                                    />
                                </div>
                            ))
                        ) : (
                            <p>No products found in this category.</p>
                        )}
                    </div>

                    {/* Pagination Controls */}
                    <div className="mt-4">
                        {totalPages > 1 && displayPageNumbers()} {/* Render only if more than one page */}
                        <button
                            onClick={() => dispatch(setNextPage())}
                            disabled={currentPage >= totalPages} // Disable if on the last page
                            className={`ml-2 px-3 py-2 ${currentPage >= totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
