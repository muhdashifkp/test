import React from "react"
import { useState } from "react"


export default function Ashif() {
    const [state, setState] = useState({ name: "", email: "", password: "" })

    const changeHandle = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return (
        <div className="max-w-sm mx-auto mt-20 p-6 border rounded-lg shadow">
            <h1 className="text-2xl font-semibold mb-4">Contact</h1>
            <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={changeHandle}
                className="block w-full border rounded px-3 py-2 mb-3"
            />
            <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={changeHandle}
                className="block w-full border rounded px-3 py-2 mb-3"
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={changeHandle}
                className="block w-full border rounded px-3 py-2 mb-4"
            />
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Enter
            </button>
        </div>
    )
}