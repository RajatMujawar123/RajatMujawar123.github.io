import React from 'react'
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href="https://github.com/RajatMujawar123" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://linkedin.com/in/rajat-mujawar-70a02822b/" target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com/mujawar_rjt_08/" target="_blank">
                            <i className='fa fa-instagram'></i>
                        </a>
                       
                        <a href="https://twitter.com/MujawarRajat008" target="_blank">
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        Hello I'm <span className='highlighted-text'>Rajat Mujawar</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        <h1>
                        <Typical className="loop"
                            loop={Infinity}
                            steps ={[
                                "Enthusiastic Dev 🟡",
                                2000,
                                "Full Stack Fronted developer 🖥",
                                2000,
                                "MERN Devloper 🚀",
                                2000,
                            ]}
                        />
                        </h1>
                        <span className="profile-role-tagline">
                            Knack of building application with frontend operations.
                        </span>
                    </span>
                </div>
                <div className="profile-optins">
                    <a href="https://drive.google.com/file/d/1X7JP79bGjHTzElWu8BOTHT5wytL2cNhI/view?usp=sharing" target="_blank" download="resume.pdf">
                        <button className='resumeButton'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">
                    <div className='screenSize'></div>
                </div>
            </div>
        </div>
    </div>
  )
}
