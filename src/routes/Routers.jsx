import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Testimonial from '../pages/Testimonial'

function Routers() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/reviews' element={<Testimonial/>}/>
      </Routes>
    </div>
  )
}

export default Routers