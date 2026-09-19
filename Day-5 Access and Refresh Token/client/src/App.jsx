import React from 'react'
import { RouterProvider  } from 'react-router'
import router from './Routes/AppRoutes'
import AuthContext from './auth/context/Auth Provider'
import AppRoutes from './Routes/AppRoutes'
const App = () => {
  return ( <AppRoutes/> )
}

export default App
