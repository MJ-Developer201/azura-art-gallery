import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import './css/style.css'
import { Container } from '@mui/material'
import MemberShipPage from './pages/MemberShipPage'
import Events from './pages/Events'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className='containment'>
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/member' element={<MemberShipPage />} />
            <Route path='/events' element={<Events />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
