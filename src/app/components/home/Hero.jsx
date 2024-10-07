import React, { useState } from 'react'
import { HeroData } from './HeroData'


const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

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

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    {HeroData.map((item, index) => (
                        index === currentSlide && (
                            <div key={item.id} className="flex w-full items-center justify-between">
                                <div className="relative w-[60%] pl-10">
                                    <h1 className="text-sm text-gray-700 font-semibold mb-2">{item.title1}</h1>
                                    <h1 className="text-6xl font-bold text-black">{item.title2}</h1>
                                    <h1 className="text-[160px] font-bold uppercase text-gray-200">
                                        {item.title3}
                                    </h1>
                                    <button className="mt-8 py-3 px-6 bg-red-500 text-white rounded-full text-lg hover:bg-red-600 transition-all">
                                        Shop By Category
                                    </button>
                                </div>

                                <div className="w-[40%] flex justify-end pr-10">
                                    <img src={item.img} alt={item.title3} className="w-[500px] z-10" />
                                </div>
                            </div>
                        )
                    ))}
                </div>

                <div className="flex justify-between mt-8">
                    <button
                        onClick={prevSlide}
                        className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Prev
                    </button>
                    <button
                        onClick={nextSlide}
                        className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Hero
