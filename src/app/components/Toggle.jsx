import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleToggle } from '../redux/features/toggleSlices'
import day from '../../assets/Toggle/day.png'
import dark from '../../assets/Toggle/night.png'
import sun from '../../assets/Toggle/sun.png'
import moon from '../../assets/Toggle/moon-bg.png'


const Toggle = () => {
    const mode = useSelector((state)=> state.mode.mode)
    const dispatch = useDispatch()

  return (
    <button onClick={()=>dispatch(handleToggle())} className={`h-7 w-14 ${!mode ? 'bg-cover bg-center' : 'bg-cover bg-center'} rounded-2xl transition-all duration-600`} style={!mode ? {backgroundImage: `url(${day})`} : {backgroundImage: `url(${dark})`}}>
        <div className={`relative h-5 w-5 rounded-full bg-white transform transition-transform ${!mode ? 'translate-x-1' : 'translate-x-8'} ${!mode ? 'bg-cover bg-center' : 'bg-gray-700 bg-cover bg-center'} transition-all duration-500`} style={!mode ? {backgroundImage: `url(${sun})`} : {backgroundImage: `url(${moon})`}}>
            
        </div>
    </button>
  )
}

export default Toggle
