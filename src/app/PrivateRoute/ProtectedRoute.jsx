import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({children}) => {
  const {isOrderSubmitted} = useAuth()
  const mode = useSelector((state)=>state.mode.mode)
  return isOrderSubmitted ? children : <h1 className={`min-h-screen ${mode ? 'bg-gray-900' : 'bg-gray-200'}`}><Navigate to={'/'} /></h1>
}

export default ProtectedRoute
