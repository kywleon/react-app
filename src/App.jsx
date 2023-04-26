import React, { useEffect } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';

import AOS from 'aos';
import './assets/js/index.js';
import 'aos/dist/aos.css';

// import Swiper styles
import 'swiper/css';

import Footer from './components/Footer'
import Header from './components/Header'

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import {
  BrowserRouter,
  Route,
  Routes,  
} from "react-router-dom";

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Routes>
          
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
