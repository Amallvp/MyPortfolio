import React, { useState } from 'react'
import './header.css'



function Header() {

    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show)

    return (
        <div className="main">
           <div className="mainHeader">
            <h1 className='headerTitle'> <a href="#home" className='link'>Amal VP</a> </h1>
           </div>

           <ul className={show ? "headerComponents active" : "headerComponents"}>
            <li className='header-li'> <a href="#about" className='link' onClick={()=>setShow(!show)}>About</a> </li>
            <li  className='header-li'> <a href="#experience" className='link' onClick={()=>setShow(!show)}> Experience</a></li>
            <li  className='header-li'><a href="#projects" className='link' onClick={()=>setShow(!show)}> Projects</a></li>
            <li  className='header-li'><a href="#contact" className='link' onClick={()=>setShow(!show)}>Contact</a></li>
           </ul>

           <div><i onClick={handleClick} className={show ?'menuIcon fa-solid fa-times':"menuIcon fa-solid fa-bars"}></i></div>

        </div>
    )
}

export default Header