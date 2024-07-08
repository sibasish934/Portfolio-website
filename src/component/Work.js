import React from "react";
import "./work.css";
import teleglobals from "../images/teleglobals_logo.jpg"
import itw from "../images/ITW.png";
import Syllo from "../images/Syllo.jpg"

const Work = () => {
  return (
    <section className="section service-section">
      <h2 className="heading">Exper<span>iences</span></h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <img src={teleglobals} alt="Teleglobal International"/>
            </div>
            <h3>Cloud Engineer</h3>
            <h2>Teleglobal International Private Ltd.</h2>
            <p>
            As a Cloud Engineer at my company, I specialize in maintaining and optimizing our DevOps and AWS cloud infrastructure. My daily responsibilities include prioritizing and resolving tasks efficiently to ensure we meet user needs and uphold our service level agreements. Additionally, I oversee and execute our CI/CD pipelines to guarantee seamless integration and deployment processes.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <img src={itw} alt="Ingenious Tech"/>
            </div>
            <h3>AWS And DevOps Intern</h3>
            <h2>Ingenious Tech World</h2>
            <p>
            I honed my skills and earned a certification in Amazon Cloud Services and DevOps tools, including Kubernetes, Docker, Ansible, Terraform, and Jenkins, through Ingenious-Tech, an innovative online tech community.This expertise me to efficiently manage and optimize cloud infrastructure. I continuously apply these skills to drive impactful results in my professional projects.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <img src={Syllo} alt="Syllogistek Systems" />
            </div>
            <h3>Python Intern</h3>
            <h2>Syllogistek Systems Private Ltd.</h2>
            <p>
            During a summer internship at my company, I mastered the core fundamentals of Python and applied them in various projects, solidifying my programming skills and enhancing my problem-solving capabilities. This hands-on experience has prepared me to tackle challenges. My journey with Python continues to drive my passion for coding and technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
