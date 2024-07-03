import React from 'react'
import './project.css'
import blogApp from '../../Images/blogApp.png'
import ems from '../../Images/ems.png'
import gemini from '../../Images/gemini.png'

function Projects() {
    return (
        <div className="projects" id='projects'>
            <div className="project-wrapper">
                <span className="wrapper-subtitle">Here are my</span>
                <h3 className="wrapper-title">Projects</h3>
            </div>

            <div className="project-main">
                <div className="project-main-content">
                    <img className='main-content-img' src={blogApp} alt="" />
                    <span className="project-main-title">BLOG APPLICATION</span>
                    <div className="project-main-buttons">
                        <button className="project-button">Live</button>
                        <a href="https://github.com/Amallvp/Blog-App" target='_blank'><button className="project-button">GitHub</button></a>
                    </div>
                </div>
                <div className="project-main-content">
                    <img className='main-content-img' src={gemini} alt="" />
                    <span className="project-main-title">Gemini Clone App</span>
                    <div className="project-main-buttons">
                        <a href="https://amallvp.github.io/GeminiClone/" target='_blank'><button className="project-button">Live</button></a>
                        <a href="https://github.com/Amallvp/GeminiClone" target='_blank'><button className="project-button">GitHub</button></a>
                    </div>
                </div>
                <div className="project-main-content">
                    <img className='main-content-img' src={ems} alt="" />
                    <span className="project-main-title">EMS App</span>
                    <div className="project-main-buttons">
                        <a href="https://bespoke-dragon-888071.netlify.app" target='_blank'><button className="project-button">Live</button></a>
                        <a href="https://github.com/Amallvp/Employee-Managment-Systm" target='_blank'><button className="project-button">GitHub</button></a>
                        
                    </div>
                    <p className='ems-credentials'>mail:-admin@gmail.com :: pw:-asd@123</p>
                </div>


            </div>
        </div>
    )
}

export default Projects