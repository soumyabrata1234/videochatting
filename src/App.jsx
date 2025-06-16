import React from 'react'
import Videopage from './pages/Videopage'
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
const App = () => {
  const router = (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/video/:id" element={<Videopage />} />
      </Routes>
    </Router>
  )
  return (
    <div className="App">
      {router}
    </div>
  )
 
}

export default App