import React, { useEffect, useState } from "react";
import "./TaskPage.css";
import logo from "./logo.png";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Heading = () => {
  const [togglemode, setTogglemode] = useState("light");
  const[slideClass,setSlideClass]=useState("");
  const navigate=useNavigate();
  const handleBackToHome=()=>{
    navigate("/")
  }
  const handleModeToggle = () => {
   if(togglemode==="light"){
    setTogglemode("dark");
    setSlideClass("slideLeft")
   }
   else{
    setTogglemode("light");
    setSlideClass("slideRight");
   }
  };
  useEffect(() => {
    let fullBody = document.querySelector(".TaskBackground");
    if (togglemode === "light") {
      fullBody.classList.add("light-mode")
      fullBody.classList.remove("dark-mode")

    } else {
       fullBody.classList.add("dark-mode")
       fullBody.classList.remove("light-mode")
    }
  }, [togglemode]);
  return (
    <div className="heading">
      <div className="headingItems">
        <button className="logo" onClick={handleBackToHome}>
          <img src={logo} alt="" className="logoimg" />
        </button>

        <h1 className="TaskManagerHeading">Your Personal Task Manager</h1>
      </div>
      <div className="toggleMode">
        {togglemode === "light" ? (
          <IoSunny className={`toggleModeIcon ${slideClass}`} onClick={handleModeToggle} />
        ) : (
          <FaMoon className={`toggleModeIcon ${slideClass}`} onClick={handleModeToggle} />
        )}
      </div>
    </div>
  );
};

export default Heading;
