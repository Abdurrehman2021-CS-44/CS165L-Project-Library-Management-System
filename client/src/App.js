import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import FAQ from './components/FAQ/FAQ'
import Shop from './components/Shop/Shop'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'


const App = () => {
  return (
    <>
      <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

      <Footer />
    </>
  )
}

export default App
