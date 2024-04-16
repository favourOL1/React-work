import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Shrink from './Shrink'

function App() {

  return (
    <>
    <div className='container'>
      <p  className='bg-[#ff00ee] text-sky-600'>Hello, World!</p>
      <div className='absolute top-[57px]'>content</div>
    </div>

    <Shrink />

    <p>


    </p>

    <button disabled={true} onClick={() => alert("Yes")} className='hover:bg-red-900 disabled:bg-yellow-800'>Hello</button>

    <input className='focus:bg-red-500 w-56 focus:outline-none'  placeholder='my input'/>

    <p className='w-28 bg-red-600 break-words'>

      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    </p>

    <div className='bg-white sm:bg-black md:bg-red-500 lg:bg-purple-700 text-favor'>

      my div
    </div>

    </>
  )
}

export default App
