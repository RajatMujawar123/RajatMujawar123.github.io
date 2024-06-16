import React from 'react';
import "./About.css";
import profilePic from "../../assets/rjt.jpg"

export default function About() {
    
  return (
    <div className='about-container' id='About'>
        <div className='about-header'>
            <h3>About Me</h3>
            <p className='why'>Why Choose Me?</p>
            <span className='header-underline'>
                <span className='header-underline1'></span>
            </span>
        </div>

        <div className="about-content-box">
            <div className="aboutCard">
                <div className="profilePic">
                    <img src={profilePic} alt="" />
                </div>
                <div className="profile-content">
                    <div className="profilesummary">
                    I am a Full Stack Developer, passionate about building digital products that improve everyday experience for people. I'm always looking for better opportunity,  ethical and accessible ways to solve the common problems we are faced with day-to-day life

                    </div>
                    <div className='nnn'>
                        <h3>Here are a Few Highlights</h3>
                        <ul className='keyHighlights'>
                            <li>Full Stack web development</li>
                            <li>1200+ Hours of Coding</li>
                            <li>300+ Hours of DSA</li>
                            <li>60+ Mini Project</li>
                            <li>5+ Project</li>
                            <li>Soft Skill Development</li>
                            
                        </ul>
                    </div>
                    <div className="profile-optins resumeBtn">
                        <a href="https://drive.google.com/file/d/1GqytiEPWdKdfcPRROGuaRYJmCWD5t2Eq/view?usp=sharing" target="_blank" download="resume.pdf">
                            <button className='resumeButton2'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
