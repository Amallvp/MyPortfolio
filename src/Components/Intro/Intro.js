import React from 'react'
import './intro.css'
import profile1 from '../../Images/profile1.jpg'
import resume from '../../Images/resume.pdf'

function Intro() {
  return (
    <div className="intro" id='home' >

      <div className="intro-left">

        <div className="intro-Image">
          <img className='intro-Img' src={profile1} alt="" />
        </div>

      </div>
      <div className="intro-right">
        <div className='intro-wrapper'>

          <div className="intro-wrapper-titles">
            <span className='intro-wrapper-title-first'>Hello , My name is </span>
            <h3 className='intro-wrapper-title-second'>Amal V P</h3>
          </div>
          <div className='intro-des'>
            <div className="intro-wrapper-des">
              <div className="intro-des-title">MERN Stack Developer</div>
              <div className="intro-des-title">Full Stack Developer</div>
              <div className="intro-des-title">Software Development Engineer</div>
              <div className="intro-des-title">Content Creator</div>

            </div>
          </div>

          <div className="intro-buttons">
            <button className="intro-button-btn"><a href={resume} download='resume' style={{textDecoration:'none' ,color:'inherit'}}>Download CV</a> </button>
            <button className="intro-button-btn"><a href="#contact" className='link'>Contact Info</a></button>
          </div>

          <div className="intro-Icons">
          <a href="https://www.linkedin.com/in/amal-v-p-4426a4300/" target='_blank'><i class="intro-icon-desc fa-brands fa-linkedin"></i> </a>
         <a href="https://github.com/Amallvp" target='_blank'> <i class="intro-icon-desc fa-brands fa-github"></i> </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro