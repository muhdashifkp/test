import React from 'react'
import img1 from '../assets/img1.jpg'

export default function Noufa() {
  return (
    <div className='border border-black w-200 h-200 '>
        <h1>IMAGE</h1>
      <img src={img1} alt="img1"  className=' border-2 w-100 h-100 hover:bg-blue-300'/>
      <p className='text-pink-300 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptates blanditiis ipsam minima expedita deleniti, vitae libero, cum quisquam impedit non error optio ea dolores deserunt at enim! Nam, aspernatur!</p>
    </div>
  )
}
