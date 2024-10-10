import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Slick-react.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const SliderCard = ({title, productData}) => {
    const mode = useSelector((state) => state.mode.mode)
    const navigate = useNavigate()
    let settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    const handleDetails = (id) => {
        navigate(`/shop/${id}`)
        // console.log(id);
        
    }
    return (
        <div className={`${mode ? 'bg-gray-900' : 'bg-gray-200'} pt-[150px]`}>
            <div data-aos='fade-up' data-aos-anchor-placement='top bottom'>
                <div  className={`w-[100%] flex justify-center items-center`}>
                   
                        <span className='h-[3px] bg-gray-400 w-[30%]'></span>
                        <h1 className='text-md md:text-2xl uppercase font-bold ml-1'>{title}</h1>
                        <span className='h-[3px] bg-gray-400 w-[30%] ml-1'></span>
                
                </div>
                <div>
                    <div className='slider-container mt-[50px] w-[80%] mx-auto'>
                        <Slider {...settings}>
                            {productData.map((item,idx) => (
                                <div data-aos='zoom-in' key={idx} onClick={()=>handleDetails(item.id)} className={`w-[150px] h-[450px] md:w-[300px] lg:w-[300px] bg-gray-300 ${mode && 'bg-gray-800'} rounded-xl cursor-pointer hover:opacity-55 transition-opacity duration-300 ease-in`}>
                                    <div>
                                        <div>
                                            <img src={item.images[0]} alt={item.desc} className='forResponsive w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] rounded-xl' />
                                        </div>
                                        <div className='mt-5 p-2'>
                                            <div className='flex justify-center items-center'>
                                                <h1 className='font-semibold mx-auto text-lg'>{item.name}</h1>
                                            </div>
                                            <div className='mt-3 flex relative'>
                                                <h1 className='text-green-400'>{item.price} PKR</h1>
                                                <h1 className='absolute right-3 uppercase text-gray-700 font-mono font-semibold'>{item.category}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderCard
