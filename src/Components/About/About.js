import React from 'react'
import profile3 from '../../Images/profile3.jpeg'
import './about.css'

function About() {
  return (
    <div className='aboutheader' id='about'>
      <div className="aboutmeHeader">
        <span className='aboutmeHeader-subtitle'>Get To Know more</span>
        <span className='aboutmeHeader-title'>About Me..</span>
      </div>

      <div className="about">
        <div className="about-left">
          <div className="about-image bg"></div>
          <div className="about-image">
            <img className="about-img" src={profile3} alt="" />
          </div>
        </div>


        <div className="about-right">
          <div className="about-right-para">
            <p>A motivated full stack developer with 1 year of experience as an intern and through self-study. Eager to learn and implement new technologies, with a strong focus on developing and maintaining scalable efficient web applications using the MERN stack and other JavaScript frameworks and libraries.</p>
          </div>

          <div className="about-right-education">
         <h3><i class="fa-solid fa-user-graduate"> </i> Education</h3>
            <h6 className='para-ece1'>Bachelor of Engineering in Electronics and Communication Engineering</h6>
            <h6 className='para-ece2'>B.E Electronics and Communication Engineering</h6>
            <h6>Anna University</h6><h6>University in Chennai, India</h6>

          </div>

        </div>


      </div>
    </div>
  )
}

export default About