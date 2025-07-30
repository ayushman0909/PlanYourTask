import React, { useState } from 'react'
import './Navbar.css'
import logo from "./logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
     const[hamToggle,setHamToggle]=useState(false);
     const handleHamToggle=()=>{
        setHamToggle(!hamToggle);
     }
  return (
    <div className='navbar'>
    <div className="landingpageLogo">
        <img src={logo} alt=""  className='landingpagelogoimg'/>
    </div>
    <div className={`navlinks ${hamToggle ? "show" :""}`}>
        <ul>
           <NavLink to="/" className={(e)=>e.isActive ?"active":""}> <li>Home</li></NavLink>
           <NavLink to="/Features" className={(e)=>e.isActive ?"active":""}> <li>Features</li></NavLink>
           <NavLink to="/About" className={(e)=>e.isActive ?"active":""}> <li>About</li></NavLink>
           <NavLink to="/Contact" className={(e)=>e.isActive ?"active":""}><li>Contact</li></NavLink>
        </ul>
    </div>
    <div className="hamburger">
        <GiHamburgerMenu className='hamburgerIcon' onClick={handleHamToggle}/>
    </div>
    </div>
  )
}

export default Navbar

