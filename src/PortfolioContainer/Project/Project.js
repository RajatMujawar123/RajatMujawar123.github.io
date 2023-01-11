
import './Project.css';
import {AiOutlineGithub} from 'react-icons/ai';
import {TbExternalLink} from 'react-icons/tb';
import html5 from '../../assets/icons8-html-5-144.png';
import css3 from '../../assets/icons8-css3-144.png';
import js from '../../assets/icons8-javascript-144.png';
import penitanteCave from "../../assets/penitanteCave.png" 

export default function Project() {
    
  return (
    <div className='project-container' id='Projects'>
    <div className='project-header'>
        <h3>Projects</h3>
        <p className='why'>Tech Stack and Projects</p>
        <span className='header-underline'>
            <span className='header-underline1'></span>
        </span>
    </div>

    <div className="projectDetails">
        <div className="projectCard">
        <div className="project-card">
            <div className='projectName'>
                <h3>Life-Style Style</h3>
            </div>
            <div className='projectImg'>
                <img className='cartImg' src={penitanteCave} alt="err" />
            </div>
            <div className='projectInfo'>
                <div className="contentProject">
                This was my first Indiviual project, In this project, I have build Home-Page, Login-Page, Product-Page, Cart-Page and much more. It took around 5 days to complete the task.
                </div>
                <div className='techStack'>
                    <img src={html5}/>
                    <img src={css3}/>
                    <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg"/>
                </div>
                <div className='projectLinks'>
                    <a className='projectbtn1' href="https://github.com/RajatMujawar123/penitent-cave-3104/tree/main/my-app" target='_blank'><AiOutlineGithub/> GitHub</a>
                    <a className='projectbtn2' href="https://my-kdda2ec2u-rajatmujawar123.vercel.app/" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>



        <div className="project-card">
            <div className='projectName'>
                <h3>Life-Style</h3>
            </div>
            <div className='projectImg'>
                <img className='cartImg' src={penitanteCave} alt="" />
            </div>
            <div className='projectInfo'>
                <div className="contentProject">
                This was our first collaborative project, there were  six members assigned for the project. It took around 5 days to complete the task. In this project, my contribution was I had to build the navbar page and also signup page with full functionality.
                </div>
                <div className='techStack'>
                    <img src={html5}/>
                    <img src={css3}/>
                    <img src={js}/>
                </div>
                <div className='projectLinks'>
                    <a className='projectbtn1' href="https://github.com/RajatMujawar123/penitent-cave-3104/tree/main/my-app" target='_blank'><AiOutlineGithub/> GitHub</a>
                    <a className='projectbtn2' href="https://github.com/RajatMujawar123/penitent-cave-3104/tree/main/my-app" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>


        <div className="project-card">
            <div className='projectName'>
                <h3>Life-Style</h3>
            </div>
            <div className='projectImg'>
                <img className='cartImg' src={penitanteCave} alt="" />
            </div>
            <div className='projectInfo'>
                <div className="contentProject">
                This was our first collaborative project, there were  six members assigned for the project. It took around 5 days to complete the task. In this project, my contribution was I had to build the navbar page and also signup page with full functionality.
                </div>
                <div className='techStack'>
                    <img src={html5}/>
                    <img src={css3}/>
                    <img src={js}/>
                </div>
                <div className='projectLinks'>
                    <a className='projectbtn1' href="https://github.com/RajatMujawar123/penitent-cave-3104/tree/main/my-app" target='_blank'><AiOutlineGithub/> GitHub</a>
                    <a className='projectbtn2' href="https://github.com/RajatMujawar123/penitent-cave-3104/tree/main/my-app" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>


        {/* <div className="project-card">
            
        </div>
        <div className="project-card">
            hello
        </div> */}
        </div>
    </div>
</div>
  )
}