import React from 'react'
import './Footer.css';
import {ImHeart} from 'react-icons/im';
export default function Footer() {
    let date = new Date().getFullYear();
  return (
    <footer className="site-footer">
        <div className="container-footer">
                <div className="">
                    <div className=" footer-toop">
                        <h3 id='NameFooter'>Rajat Mujawar</h3>
                        <p>A Passionate aspiring Full Stack web Developer skilled in React,Redux,JavaScript,NodeJS,Express,MongoDB about building excellent Fronted Web Page that improves the lives of those around me. Look forward to joining a company where I will  be able to contribute towards individual and company growth.</p>
                        <div className='footer-social'>
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
                </div>
            </div>


            <div className="container-footer-text">
                <p>©{date}. Design with {<ImHeart color='red'/>} by Rajat.</p>
            </div>
    </footer>
  )
}
