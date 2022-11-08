import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import { AppRoutes } from './routes'


function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <AppRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
