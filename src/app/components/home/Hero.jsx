
import React, { useEffect, useState } from 'react'
import { HeroData } from './HeroData'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const mode = useSelector((state)=>state.mode.mode)

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === HeroData.length - 1 ? 0 : prevSlide + 1
        )
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? HeroData.length - 1 : prevSlide - 1
        )
    }
    useEffect(()=>{
        const timeout = setInterval(nextSlide, 2000)
        return () => clearInterval(timeout)
    },[currentSlide])

    return (
        <div className={`${mode ? 'bg-gray-900' : 'bg-gray-100'} pt-12 mx-auto h-screen flex justify-center items-center`}>
            <div className="relative w-full overflow-hidden">
                <div 
                    className="flex transition-transform duration-700 ease-in-out" 
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {HeroData.map((item) => (
                        <div key={item.id} className="w-full flex-none flex items-center justify-center flex-col md:flex-row px-20">
                            <div className='order-2 md:order-1'>
                                <h1 className="hidden md:block text-sm lg:text-md xl:text-lg text-gray-700 font-semibold mb-2">{item.title1}</h1>
                                <h1 className="hidden md:block md:text-2xl lg:text-2xl xl:text-6xl font-bold text-black">{item.title2}</h1>
                                <h1 className={`hidden md:block md:4xl lg:5xl xl:text-6xl 2xl:text-[200px] font-bold uppercase text-gray-200 ${mode && 'text-gray-500'} whitespace-nowrap z-10`}>
                                    {item.title3}
                                </h1>
                                <button className="mt-8 py-1 px-1 md:py-3 md:px-6 border border-green-400 rounded-md text-sm md:text-lg hover:bg-green-400 transition-all duration-300 ease-out">
                                    Shop By Category
                                </button>
                            </div>

                            <div className="order-1 md:order-2 w-[300px] md:w-[500px] lg:w-[700px] flex justify-start pr-10">
                                <img src={item.img} alt={item.title3} className="w-[300px] md:w-[500px] lg:w-[700px] select-none z-20" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute top-[40%] left-[8%] h-10 w-10 border flex justify-center items-center hover:bg-gray-200 transition-colors ease-in-out duration-300 cursor-pointer">
                    <IoArrowBack className="text-2xl" onClick={prevSlide} />
                </div>
                <div className="absolute top-[40%] right-[10%] h-10 w-10 border flex justify-center items-center hover:bg-gray-200 transition-colors ease-in-out duration-300 cursor-pointer">
                    <IoArrowForward className="text-2xl" onClick={nextSlide} />
                </div>
            </div>
        </div>
    )
}

export default Hero
