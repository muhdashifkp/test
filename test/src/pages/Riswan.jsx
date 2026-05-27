import React from 'react'
import img from '../assets/images'

const users = [
  {
    id: 1,
    name: "Riswan",
    img: img
  }
]

export default function Riswan() {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className='w-[400px] mt-40 ml-20'>
          
          <div className="rounded-xl shadow-lg bg-white p-20">

            <img
              src={user.img}
              alt={user.name}
              className="rounded-xl"
            />

            <h1 className='text-2xl font-bold mt-4'>
              Title
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Tempora reprehenderit est quisquam, voluptatibus nulla fugit
              corporis earum cum consectetur eos eius aliquam? Quasi ea
              alias beatae eos nihil numquam laboriosam?
            </p>

          </div>

        </div>
      ))}
    </div>
  )
}
