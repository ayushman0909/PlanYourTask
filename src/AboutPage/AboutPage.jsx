import React from "react";
import "./AboutPage.css";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";
import AboutHeroImg from "./aboutHeroImg.png";
import ProfilePic from "./herosecProfileimg.png";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/task");
  };
  return (
    <div className="landingPageMainContainer">
      <div className="LandingPageContentContainer">
        <Navbar />
        <div className="AboutMainContainer">
          <div className="HeroSection">
            <div className="HeroSectionText">
              <div className="herosectiontext">
                <h3>
                  Empowering <br />
                  Your <br />
                  Productivity
                </h3>
                <p>
                  We revie that our PlanYourTask <br />
                  website simplifies your life
                </p>
                <button className="GetStartedBtn" onClick={handleClick}>
                  Get Started Free
                </button>
              </div>
            </div>
            <div className="HeroSectionImg">
              <img src={AboutHeroImg} alt="" />
            </div>
          </div>
          <div className="WhyWeBuilt">
            <h1>Why We Built This Website?</h1>
            <p>
              We believe that managing your tasks should be simple, intuitive,
              and stress-free. In today’s fast-paced world, staying organized is
              more important than ever—whether you're working from home, leading
              a team at the office, studying for exams, or simply managing daily
              errands. Our goal is to create a tool that adapts to your
              lifestyle and helps you stay on top of everything without feeling
              overwhelmed. This app empowers you to break down your goals, track
              your progress, and prioritize what matters most—anytime, anywhere.
              We built this platform to make productivity feel natural and to
              help you reclaim control of your time and mental space. Because
              when your tasks are under control, your mind is free to focus on
              what truly counts.
            </p>
          </div>
          <div className="aboutme">
            <h1>About Me</h1>
            <div className="aboutprofilepic">
              <img src={ProfilePic} alt="" className="profilepicabout" />
            </div>
            <h1>Ayushman Verma</h1>
            <div className="AboutMeIntro">
              <p>
                Hi, I'm Ayushman Verma, a dedicated Front-End Developer with a
                strong command over HTML, CSS, JavaScript, ReactJS, and
                integration of RESTful APIs. I’m passionate about building
                modern, responsive, and user-centric web applications that solve
                real-world problems with clean and efficient code <br />Beyond the
                screen,I’m also a YouTuber, running a channel called "30
                Seconds with Ayushman", where I share short, impactful content
                around facts, awareness, and real-life insights. It's my way of
                connecting with people, sharing value, and expressing creativity
                beyond code.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
