import React from 'react'
import "./About.css";
import vector from "../images/about.jpg";


const About = () => {
  const skillData = [
    {
      skill: "HTML & CSS",
      percentage: 86,
      class: "HTML"
    },
    {
      skill: "REACT",
      percentage: 70,
      class: "REACT"
    },
    {
      skill: "NODE",
      percentage: 75,
      class: "NODE"
    },
    {
      skill: "AWS",
      percentage: 72,
      class: "AWS"
    },
    {
      skill: "AZURE",
      percentage: 74,
      class: "AZURE"
    },

  ]
  return (
    <>
      <h2 className='heading'>About <span>me</span></h2>
      <div className='about grid-2'>
        <div className='text-image'>
          <p>I am a computer science and engineering student at Silicon Institute of Technology. I have always been passionate about exploring the world of information technology and software development. Main areas of interest are web development, machine learning and cloud computing.</p>
        </div>
        <div className='image'>
          <img src={vector} alt="loading.." />
        </div>
      </div>
      {/* Skill Section */}
      <div className='skill-section'>
        <h2 className='heading sk-heading'>Skill<span>s</span></h2>
        <p className='tex' >I really believe that everyone has a talent, ability, or skill that he can mine to support himself and to succeed in life.</p>
        <div className='container skill'>
          {
            skillData.map((elem) => {
              return (
                <div className='skills'>
                  <h2>{elem.skill}</h2>
                  <div className='progress-bar'>
                    <div className={elem.class}><span>{elem.percentage}</span></div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <h2 className='heading time'>TIME<span>LINE</span></h2>
      <div class="timeline">
        <div class="box leftbox">
          <div class="about-content">
            <h2>2024</h2>
            <p> I'll be graduating from the Silicon Institute of Technology in 2024 and I'm in the CSE branch of my university.</p>
          </div>
        </div>
        <div class="box rightbox">
          <div class="about-content">
            <h2>2022</h2>
            <p>Currently I am 3rd Year Of my college and my insterest include exploring new technology but more precisely in Cloud computing, Web-Development and Devops.</p>
          </div>
        </div>
        <div class="box leftbox">
          <div class="about-content">
            <h2>2020</h2>
            <p>I completed 12th grad and was out of the high school phage of life with an aggregate of 93.6% from St.Xavier's High School.</p>
          </div>
        </div>
        <div class="box rightbox">
          <div class="about-content">
            <h2>2018</h2>
            <p>I completed 10th grad with an aggregate of 92.6% from St.Xavier's High School.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About