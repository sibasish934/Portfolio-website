import React, { useState } from 'react'
import { NavLink  } from "react-router-dom"
import "./home.css";
import Typewriter from 'typewriter-effect';
import cloud from "../images/Cloud_hosting.gif";
import About from "./About";
import Project from "./Project";
import Footer from './Footer';
import Contact from './Contact';
import Navbar from './Navbar';
const Home = () => {
  const [state] = useState({
    title: "Hi, ",
    titleTwo: "I'm",
    titleThree: "Sibasish Satapathy",
  });

  return (
    <>
    <Navbar />
      <div className='conatiner grid-2'>
        <div className='home'>
          <h2>
            <div className='title'>{state.title}</div>
            <div className='titleTwo'>{state.titleTwo}</div>
            <div className='titleThree'>{state.titleThree}</div>
          </h2>
          <div className='text'>
            <Typewriter className="type-text"
              options={{
                strings: [
                  "I'm a student.",
                  "I'm a Web Developer.",
                  "I'm a Cloud Practitioner.",
                  "I'm keen about new Technologies."
                ],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
          </div>
          <div className='home-nav'>
            <button className='button btn-resume'><a href="https://drive.google.com/file/d/1V65WH24CB6OlH-dtq50SyPubApCqDUfw/view?usp=sharing" download>Resume</a></button>
            <button className='button btn-contact'><NavLink className="contact-btn" exact to="/Contact">Contact</NavLink></button>
          </div>
        </div>
        <div className='image'><img src={cloud} alt="loading.." /></div>
      </div>
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
