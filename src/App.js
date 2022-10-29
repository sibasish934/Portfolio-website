import React from 'react'
import './App.css';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
const App = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={ [<Navbar />,<About />,<Footer />]}/>
        <Route path='/Projects' element={[<Navbar />,<Project />,<Footer />]}/>
        <Route path='/Contact' element={[<Navbar />,<Contact />]}/>
       </Routes>
    </div>
  )
}

export default App