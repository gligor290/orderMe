import './App.css'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/table/:tableId" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
