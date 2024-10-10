import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart } from '../redux/features/cartSlices'
import toast from 'react-hot-toast'

const ProductDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = data.find((product) => product.id == id)
    // const imagesSlide = product.images;
    const mode = useSelector((state) => state.mode.mode)
    const [curr, setCurr] = useState(0);
    const handlePrev = () => {
        setCurr((curr) => curr === 0 ? product.images.length - 1 : curr - 1);
    }
    const handleNext = () => {
        setCurr((curr) => curr === product.images.length - 1 ? curr = 0 : curr + 1)
    }
    // console.log(id)
    // console.log(product);


    return (
        <div className={`mx-auto mt-[70px] pt-[100px] min-h-screen ${mode ? 'bg-gray-900' : 'bg-gray-200'}`}>
            <div className='pb-5'>
                <div className='flex flex-col md:flex md:flex-row justify-center items-center w-full'>
                    <div className='relative ml-0 md:ml-6'>
                        <div className={`overflow-hidden w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-xl border shadow-md ${mode ? 'border border-green-400 shadow-sm shadow-green-500' : 'border'}`}>
                            <div className={`flex transition-transform ease-out duration-300`} style={{ transform: `translateX(-${curr * 100}%)` }}>
                                {product.images.map((img, index) => (
                                    <img src={img} key={index} />
                                ))}
                            </div>
                        </div>
                        <GrFormPrevious onClick={handlePrev} className='absolute top-32 md:top-56 text-gray-900 text-2xl md:text-5xl left-5 cursor-pointer hover:bg-green-400 hover:border-green-400 hover:rounded-lg hover:transition-all hover:ease-out' />
                        <GrFormNext onClick={handleNext} aria-disabled className='absolute top-32 md:top-56 text-gray-900 text-2xl md:text-5xl right-5 md:right-5 cursor-pointer hover:bg-green-400 hover:border-green-400 hover:rounded-lg hover:transition-all hover:ease-out' />
                    </div>
                    <div className='flex justify-center items-center mt-12 md:mt-0'>
                        <div className='w-[250px] ml-6 md:ml-14 lg:ml-14 md:w-auto '>
                            <h1 className='text-2xl md:text-4xl font-bold'>{product.name}</h1>
                            <p className='text-xl md:text-2xl mt-5'>PKR {product.price}</p>
                            <p className='uppercase text-sm text-green-400 font-serif'>Price shown before tax</p>
                            <p className='text-md md:text-xl mt-10 font-bold'>Description: <span className='block text-lg mt-3 font-normal'>{product.desc}</span></p>
                            <div className='flex justify-center md:block'>
                            <button onClick={() => dispatch(addtoCart({ id: product.id, name: product.name, price: product.price.replace(/,/g, ''), img: product.images, qty: 1 })) && toast.success(`${product.name} is Added to Cart`)} className={`mt-7 w-36 h-12 p-3 bg-green-300 text-lg font-semibold ${mode ? 'hover:border hover:border-green-400 hover:shadow-md hover:shadow-green-400 hover:transition-all hover:duration-300' : 'hover:border hover:shadow-md hover:transition-all hover:duration-300'}`}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
