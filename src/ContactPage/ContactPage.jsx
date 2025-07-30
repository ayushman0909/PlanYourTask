import React from "react";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";
import { BiSolidContact } from "react-icons/bi";
import { RiUserFollowFill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { FaLinkedin, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import "./ContactPage.css";

const ContactPage = () => {
  const handleSendbtn=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="landingPageMainContainer">
      <div className="LandingPageContentContainer">
        <Navbar />
        <div className="ContactMainContainer">
          <div className="ContactHeading">
            <h1>
              <BiSolidContact />
              Contact Us
            </h1>
            <h1>We'd love to hear from you!</h1>
          </div>
          <div className="ContactInfo">
            <div className="Social">
              <div className="SocialDetails">
                <h1>
                  <RiUserFollowFill />
                  Follow Us On
                </h1>
                <div className="sociallinks">
                  <a href="/"><FaLinkedin className="socialIcons" id="linkedin"/></a>
                  <a href="/"><FaInstagram className="socialIcons" id="instagram"/></a>
                  <a href="/"><FaYoutube className="socialIcons" id="youtube" /></a>
                  <a href="/"><FaFacebookSquare className="socialIcons" id="facebook"/></a></div>
                
              </div>
            </div>
            <div className="ContactNo">
              <div className="contactDetails">
                <h1>
                  <IoMdContacts />
                  Contact us
                </h1>
                <div>
                <p>Email:ayushverma708@gmail.com</p>
                <p>Hours: Mon–Fri, 9am–5pm </p></div>
              </div>
            </div>
          </div>
          <form action="/">
            <h1>Send Us a Message</h1>
            <div className="formDetails">
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name"/></div>
            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email"/></div>
            <div>
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" placeholder="Enter the Subject of Your Query" /></div>
            <div>
                <label htmlFor="message"> Message:</label>
           <textarea name="Message" id="message" placeholder="Full description of your subject"/></div>
            <button type="submit" className="SendBtn" onClick={handleSendbtn}>Send</button>
</div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
