import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header'
import AdminDashboard from './components/Header/AdminDashboard'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import FAQ from './components/FAQ/FAQ'
import Shop from './components/Shop/Shop'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Book from './components/Book/Book';
import CreateBook from './components/Book/CreateBook';
import UpdateBook from './components/Book/UpdateBook';
import Category from './components/Category/Category';
import Customer from './components/Customer/Customer';
import CreateCategory from './components/Category/CreateCategory';


const App = () => {
  return (
    <>
      {/* <Header /> */}
      <AdminDashboard />
      {/* <Home/> */}

      <Routes>
        <Route path="/book" element={<Book />} />
        <Route path="/createBook" element={<CreateBook />} />
        <Route path="/updateBook" element={<UpdateBook />} />
        <Route path="/category" element={<Category />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/createCategory" element={<CreateCategory />} />
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

