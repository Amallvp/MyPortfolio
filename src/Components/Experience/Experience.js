import React from 'react'
import './experience.css'

function Experience() {
    return (
        <div className="experience" id='experience'>
            <div className="expHeader">
                <span className='exp-subtitle'>Explore my skill &</span>
                <span className='exp-title '>Experience</span>
            </div>

            <div className="exp-main">

                <div className="exp-left">

                    <div className="exp-exp">
                        <h3><i class="fa-solid fa-laptop-code"></i>  Experience</h3>
                        <h5 className='div-heading'>MERN Stack Developer -Intern</h5>
                        <span className='span-Details'>Luminar Technolab </span>
                        <span className='span-Details'>2023 -April  to Nov 23</span>

                    </div>
                    <div className="exp-certification">
                        <h3><i class="fa-solid fa-certificate"></i> Certification</h3>
                        <div className='exp-div'>
                            <h5 className='div-heading'>NACTET Certification</h5>
                            <span className='span-Details small'>Full stack research & training program</span>
                            <span className='span-Details'>(MERN)</span>
                            <span className='span-Details'>November 2023</span>

                        </div>
                        <div className='exp-div'>
                            <h5 className='div-heading'>Agile Scrum Foundation</h5>
                            <span className='span-Details'>SimpliLearn | Skillup</span>
                            <span className='span-Details'>February 2024</span>

                        </div>
                    </div>

                </div>

                <div className="exp-right">

                    <div className="exp-skillset">
                        <div className="exp-skills">
                           <h5 className='skill-exp-title'><i class="fa-solid fa-circle-check"></i> HTML</h5>
                           <p className='skill-exp'>Experienced</p>
                        </div>
                        <div className="exp-skills">
                           <h5 className='skill-exp-title'><i class="fa-solid fa-circle-check"></i> React.js</h5>
                           <p className='skill-exp'>Intermediate</p>
                        </div>
                        <div className="exp-skills">
                           <h5 className='skill-exp-title'><i class="fa-solid fa-circle-check"></i> CSS & Bootstrap</h5>
                           <p className='skill-exp'>Experienced</p>
                        </div>
                        <div className="exp-skills">
                           <h5 className='skill-exp-title'><i class="fa-solid fa-circle-check"></i> Tailwind</h5>
                           <p className='skill-exp'>Beginner</p>
                        </div>
                        <div className="exp-skills">
                           <h5 className='skill-exp-title'><i class="fa-solid fa-circle-check"></i> SASS</h5>
                           <p className='skill-exp'>Beginner</p>
                        </div>
                        <div className="exp-skills">
                           <h5 className='skill-exp-title'><i class="fa-solid fa-circle-check"></i> Material UI</h5>
                           <p className='skill-exp'>Beginner</p>
                        </div>
                        
                    </div>

                    <div className="exp-skillset two">
                        <div className="exp-skills">
                           <h5 className='skill-exp-title'><i class="fa-solid fa-circle-check"></i> JavaScript</h5>
                           <p className='skill-exp'>Intermediate</p>
                        </div>
                        <div className="exp-skills">
                           <h5 className='skill-exp-title'><i class="fa-solid fa-circle-check"></i> Node & Express.js</h5>
                           <p className='skill-exp'>Intermediate</p>
                        </div>
                        <div className="exp-skills">
                           <h5 className='skill-exp-title'><i class="fa-solid fa-circle-check"></i> MongoDB & Firebase</h5>
                           <p className='skill-exp'>Intermediate</p>
                        </div>
                        <div className="exp-skills">
                           <h5 className='skill-exp-title'><i class="fa-solid fa-circle-check"></i> Git & GitHub</h5>
                           <p className='skill-exp'>Intermediate</p>
                        </div>
                        <div className="exp-skills">
                           <h5 className='skill-exp-title'><i class="fa-solid fa-circle-check"></i> TypeScript</h5>
                           <p className='skill-exp'>Beginner</p>
                        </div>
                        <div className="exp-skills">
                           <h5 className='skill-exp-title'><i class="fa-solid fa-circle-check"></i> RESTful APIs</h5>
                           <p className='skill-exp'>Intermediate</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>









        </div>
    )
}

export default Experience