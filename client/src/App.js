import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Shop from './components/Shop'
import Login from './components/Login'
import Signup from './components/Signup'


const App = () => {
  return (
    <>
      <Header />
      <Router>

      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        {/* <Route path="/shop" element={<Shop />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/faq" element={<FAQ />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  )
}

export default App
