import React, { useState } from 'react'
import ItemListing from '../components/shop/ItemListing';
import { data } from '../data'
import CategoryList from '../components/shop/CategoryList';
import { useSelector } from 'react-redux';


const Shop = () => {
    const category = useSelector((state) => state.category.category)
    return (
        <div className='mx-auto max-w-screen-2xl mt-[70px] pt-[100px]'>
            <div className='w-full h-full gap-10 pb-20 flex'>
                {/* Category Section */}
                <div className='w-[25%]'>
                    <CategoryList />
                </div>

                {/* Items Section */}

                <div className='w-[75%]'>
                    <div className='flex flex-wrap'>
                        {data.filter((product) => {
                            if (category === 'All') {
                                return product
                            } else {
                                return category === product.category
                            }
                        }).map((product) => (
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
                        {/* {data.length > 0 ? data.map((product) => {
                            return (

                            )
                        }) : <h1>No such Products</h1>} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
