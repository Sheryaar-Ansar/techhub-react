import React from 'react'
import Hero from '../components/home/Hero'
import { arrivalData } from '../components/home/arrivalData'
import { brandedData } from '../components/home/brandedData'
import SliderCard from '../components/home/Slider'

const Home = () => {
  
  return (
    <div className='pt-2 mt-[70px] min-h-screen'>
      <div>
        <div>
          <div>
            <Hero/>
          </div>
          <div>
              <SliderCard productData={arrivalData} title={'New Arrival'}/>
          </div>
          <div>
            <SliderCard productData={brandedData} title={'Branded Products'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home