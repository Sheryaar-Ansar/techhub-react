import { useState } from 'react'
import Navbar from './app/components/header/Navbar'
import {Routes, Route } from 'react-router-dom'
import Shop from './app/pages/Shop'
import { useSelector } from 'react-redux'
import './App.css'
import Home from './app/pages/Home'
import ProductDetail from './app/pages/ProductDetail'

function App() {
  const mode = useSelector((state)=>state.mode.mode)
  return (
    <div style={mode ?{
      background: 'black',
      color: 'white'
    } : {
      background: 'white',
      color: 'black'
    }} className={`${mode ? 'transition-all duration-700' : 'transition-all duration-200'}`}>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<ProductDetail />} />
        </Routes>
    </div>
  )
}

export default App
