import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Riswan from './pages/Riswan'
import Ashif from './pages/Ashif'
import Hanshin from './pages/Hanshin'
import Thensih from './pages/Thensih'
import Noufa from './pages/Noufa'



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Riswan />} />
          <Route path="/thensih" element={<Thensih />} />
          <Route path="/hanshin" element={<Hanshin />} />
          <Route path="/noufa" element={<Noufa />} />
          <Route path="/ashif" element={<Ashif />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

