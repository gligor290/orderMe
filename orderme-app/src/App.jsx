import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import MenuPage from './pages/MenuPage'
import NavBar from "./components/NavBar.jsx";

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/table/:tableId" element={<LandingPage />} />
          <Route path={"/menu"} element={<MenuPage />} />
      </Routes>
    </Router>
  )
}

export default App
