import React from 'react'
import Intro from './Components/Intro/Intro'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'

import Contact from './Components/Contact/Contact'
import Project from './Components/Project/Project'



function App() {
  return (
    <div>
  <Header/>  
  <Intro/>
  <About/>
  <Experience/>
  <Project/>
  <Contact/>
    </div>
  )
}

export default App