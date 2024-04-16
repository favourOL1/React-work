import React, { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'

import Coin from './routes/Coin'
import Navbar from './components/Navbar'
import Header from './components/header/Header'
import About from './components/about/About'


function App() {

 

  return (
    <>
      <Navbar />
      
      <div className='auth'>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/about' element={<About/>} />
          
          <Route path='/coin' element={<Coin />}>
            <Route path=':coinId' element={<Coin />} />
            
          </Route>
          
        </Routes>
      </div>

    </>
  );
}

export default App;
