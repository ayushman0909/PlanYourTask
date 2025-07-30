import React from 'react'
import "./HeroSection.css"
import image from "../TaskPage/MainBackgroundImg.png"
import { useNavigate } from 'react-router-dom'
const HeroSection = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
   navigate("/task")
  }
  return (
    <div className='HeroSection'>
       <div className="HeroSectionText">
          <div className="herosectiontext">
            <h3>Organize <br />Your Goals</h3>
            <p>Simplify your daily tasks and get <br /> things done effortlessly with PlanYourTask</p>
            <button className='GetStartedBtn' onClick={handleClick}>Get Started</button></div>
       </div>
       <div className="HeroSectionImg">
       <img src={image} alt="" />
       </div>
    </div>
  )
}

export default HeroSection
