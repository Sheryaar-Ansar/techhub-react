import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart } from '../redux/features/cartSlices'

const ProductDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = data.find((product) => product.id == id)
    const imagesSlide = product.images;
    const mode = useSelector((state)=>state.mode.mode)
    const [curr, setCurr] = useState(0);
    const handlePrev = () => {
        setCurr((curr) => curr === 0 ? imagesSlide.length - 1 : curr - 1);
    }
    const handleNext = () => {
        setCurr((curr)=> curr === imagesSlide.length - 1 ? curr = 0 : curr + 1)
    }
    console.log(id)
    console.log(product);
    

    return (
        <div className='mx-auto mt-[70px] pt-[100px]'>
            <div className='pb-5'>
                <div className='flex justify-center items-center w-full'>
                    <div className='relative'>
                        <div className={`overflow-hidden w-[500px] h-[500px] rounded-xl border shadow-md ${mode ? 'border border-green-400 shadow-sm shadow-green-500' : 'border'}`}>
                            <div className={`flex transition-transform ease-out duration-300`} style={{ transform: `translateX(-${curr * 100}%)` }}>
                                {product.images.map((img, index) => (
                                    <img src={img} key={index} />
                                ))}
                            </div>
                        </div>
                            <GrFormPrevious onClick={handlePrev} className='absolute top-56 text-gray-900 text-5xl left-5 cursor-pointer hover:bg-green-400 hover:border-green-400 hover:rounded-lg hover:transition-all hover:ease-out' />
                            <GrFormNext onClick={handleNext} aria-disabled className='absolute top-56 text-gray-900 text-5xl right-5 cursor-pointer hover:bg-green-400 hover:border-green-400 hover:rounded-lg hover:transition-all hover:ease-out'/>
                    </div>
                    <div className='w-[50%] ml-6'>
                        <h1 className='text-4xl font-bold'>{product.name}</h1>
                        <p className='text-2xl mt-5'>PKR {product.price}</p>
                        <p className='uppercase text-sm text-green-400 font-serif'>Price shown before tax</p>
                        <p className='text-xl mt-10 font-bold'>Description: <span className='block text-lg mt-3 font-normal'>{product.desc}</span></p>
                        <button onClick={() => dispatch(addtoCart({ id: product.id, name: product.name, price: product.price.replace(/,/g, ''), img: product.images, qty: 1 }))} className={`mt-7 w-36 h-12 p-3 bg-green-300 text-lg font-semibold ${mode ? 'hover:border hover:border-green-400 hover:shadow-md hover:shadow-green-400 hover:transition-all hover:duration-300' : 'hover:border hover:shadow-md hover:transition-all hover:duration-300'}`}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
