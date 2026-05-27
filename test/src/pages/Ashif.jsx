import React, { useState } from 'react'
import hero from '../assets/hero.png'

export default function Ashif() {
    const [state, setState] = useState({ name: "", email: "", password: '' })

    const changeHandle = () => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h1>Contact</h1>
            <input type="text" placeholder='name'
                name="name"
                onChange={changeHandle} />
            <input
                type="text"
                placeholder='email'
                name="email"
                onChange={changeHandle} />
            <input type="number"
                placeholder='passWord'
                name="password"
                onChange={changeHandle}
            />
            <button>
                Enter
            </button>

        </div>
    )
}
