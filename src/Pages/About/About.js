import React from 'react'
import Skills from '../../Components/Skills/Skills'

import MyPortfolioPic from '../../Images/PortfolioPic.png'
import './About.css'
function About() {
    return (
        <div id='About' >
            <div className='titlecontainer'>
                <h2>About</h2>
            </div>
            <p className='about-mydescription-container'>
                My name is Rony Parmar, and I work as a front-end developer in Gujarat, India. I like Marvel Studios' movies and the Chennai Super Kings' cricket squad.
            </p>
            <div className='about-me'>
                <img className='my-portfolio-pic' src={MyPortfolioPic} alt='MyPortfolioPic'></img>
                <div className='about-my-details'>
                    <h3>Front End Web Developer</h3>
                    <p>I enjoy creating internet-based pages. I started web development because I was fascinated about how these internet buttons worked, and today I can call myself a frontend developer.</p>
                    <ul>
                        <li><i class="bx bx-chevron-right"></i><strong>Age</strong><p>20</p></li>
                        <li><i class="bx bx-chevron-right"></i><strong>Nationality</strong><p>Indian</p></li>
                        <li><i class="bx bx-chevron-right"></i><strong>Languages Known</strong><p>English, Gujarati, Hindi</p></li>
                        <li><i class="bx bx-chevron-right"></i><strong>Degree</strong><p>Bechlors of Engineering</p></li>
                        <li><i class="bx bx-chevron-right"></i><strong>Phone</strong><p>+91 8488805119</p></li>
                        <li><i class="bx bx-chevron-right"></i><strong>Email</strong><p>ronyparmar2107@gmail.com</p></li>
                        <li><i class="bx bx-chevron-right"></i><strong>City</strong><p>Anand, Guajart, India</p></li>
                        <li><i class="bx bx-chevron-right"></i><strong>Freelancer</strong><p>Available</p></li>
                    </ul>
                    <p>I've been learning and working with the JavaScript framework ReactJs, and I'm pretty good at it. I'm currently learning NodeJS, ExpressJS, and MongoBD.</p>
                </div>
            </div>
            <Skills />
        </div>
    )
}

export default About