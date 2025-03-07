import {Routes, Route} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import './App.css'
import Layout from "./pages/Layout"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        
        <Route path = "/" element = {<Home />} />
        <Route path = "/dashboard" element = {<Dashboard />} />
        <Route path = "/profile" element = {<Profile />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "*" element = {<Home />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
