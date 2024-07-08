import React from 'react'
import "./About.css";
import vector from "../images/about.jpg";
import Work from './Work';
import Marquee from 'react-fast-marquee';
import { skillsImage } from '../utils/skills-data';
import { skillsData } from '../utils/data/skill';


const About = () => {
  console.log(skillsData);
  // const skillData = [
  //   {
  //     skill: "HTML & CSS",
  //     percentage: 86,
  //     class: "HTML"
  //   },
  //   {
  //     skill: "REACT",
  //     percentage: 70,
  //     class: "REACT"
  //   },
  //   {
  //     skill: "NODE",
  //     percentage: 75,
  //     class: "NODE"
  //   },
  //   {
  //     skill: "AWS",
  //     percentage: 72,
  //     class: "AWS"
  //   },
  //   {
  //     skill: "AZURE",
  //     percentage: 74,
  //     class: "AZURE"
  //   },

  // ]
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
        { /* // <div className='container skill'>
        //   {
        //     skillData.map((elem) => {
        //       return (
        //         <div className='skills'>
        //           <h2>{elem.skill}</h2>
        //           <div className='progress-bar'>
        //             <div className={elem.class}><span>{elem.percentage}</span></div>
        //           </div>
        //         </div>
        //       )
        //     })
        //   }
        // </div> */}
      </div> 
      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => {return(
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skillsImage(skill)}
                      alt={skill}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          )})}
        </Marquee>
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
      {/* Experience Section  */}
      <Work />
    </>
  )
}

export default About