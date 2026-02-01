import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Home/home.jsx"
import About from "./About/About.jsx"

export default function App() {

  return (
    <Routes>
      <Route 
        path="/greg-site/" 
        element={
            <Home />
        } 
      />
      <Route 
        path="/greg-site/about" 
        element={
            <About />
        } 
      />
    </Routes>

  )
}

