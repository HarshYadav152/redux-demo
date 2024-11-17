import React from 'react'
import Navbar from './component/Navbar'
import Shop from './component/Shop'

export default function App() {
  return (
    <>
    <Navbar/> 
    <div className='container'>
      {/* <h2 className='text-center my-5 text-white'>Welcome to the Heist</h2> */}
    <Shop/>
    </div>
    </>
  )
}
