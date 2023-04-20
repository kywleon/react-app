import { useState } from 'react'
import './App.css'

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

import Button from '@mui/material/Button';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div>
          <Button variant="contained">Hello World</Button>
        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Routes>
          
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
