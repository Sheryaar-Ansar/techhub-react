import React from 'react'
import Hero from '../components/home/Hero'
import { arrivalData } from '../components/home/arrivalData'
import SliderHook from '../components/home/Slider'
import { brandedData } from '../components/home/brandedData'

const Home = () => {
  
  return (
    <div className='pt-2 mt-[70px] min-h-screen'>
      <div>
        <div>
          <div>
            <Hero/>
          </div>
          <div>
              <SliderHook productData={arrivalData} title={'New Arrival'}/>
          </div>
          <div>
            <SliderHook productData={brandedData} title={'Branded Products'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home