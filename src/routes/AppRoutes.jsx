import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Learn from '../pages/Learn'
import Catalog from '../pages/Catalog'
import Business from '../pages/Business'
import Government from '../pages/Government'
import Outcomes from '../pages/Outcomes'
import Login from '../pages/Login'
import Footer from '../components/Footer'
import School from '../pages/School'

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/business" element={<Business />} />
        <Route path="/school" element={<School />} />
        <Route path="/government" element={<Government />} />
        <Route path="/outcomes" element={<Outcomes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRoutes
