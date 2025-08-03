import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Subscribe from './components/Subscribe'
import Contact from './components/Contact'
import About from './components/about'
/*import Footer from './components/Footer'*/

// import Lastpage from './components/Lastpage'
// import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
     <BrowserRouter>
      <Navbar />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/subscribe' element={<Subscribe/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}
