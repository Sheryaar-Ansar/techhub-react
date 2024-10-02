import { useState } from 'react'
import Navbar from './app/components/header/Navbar'
import { Routes, Route } from 'react-router-dom'
import Shop from './app/pages/Shop'
import { useSelector } from 'react-redux'
import './App.css'
import Home from './app/pages/Home'
import ProductDetail from './app/pages/ProductDetail'
import Checkout from './app/components/cart/Checkout'
import { Toaster } from 'react-hot-toast'

function App() {
  const mode = useSelector((state) => state.mode.mode)
  return (
    <div style={mode ? {
      background: 'black',
      color: 'white'
    } : {
      background: 'white',
      color: 'black'
    }} className={`${mode ? 'transition-all duration-700' : 'transition-all duration-200'}`}>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<ProductDetail />} />
        <Route path='/proceed-to-checkout' element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
