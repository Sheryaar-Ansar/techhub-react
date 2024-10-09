import Navbar from './app/components/header/Navbar'
import { Routes, Route } from 'react-router-dom'
import Shop from './app/pages/Shop'
import { useSelector } from 'react-redux'
import './App.css'
import Home from './app/pages/Home'
import ProductDetail from './app/pages/ProductDetail'
import Checkout from './app/pages/Checkout'
import { Toaster } from 'react-hot-toast'
import OrderPlacement from './app/pages/OrderPlacement'
import Contact from './app/pages/Contact'
import Footer from './app/components/footer/Footer'

function App() {
  const mode = useSelector((state) => state.mode.mode)
  return (
    <div className={`${mode ? 'transition-all duration-500 bg-black text-white' : 'transition-all duration-500 bg-white text-black'}`}>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<ProductDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/proceed-to-checkout' element={<Checkout />} />
        <Route path='/order-placement' element={<OrderPlacement />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
