
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import "./landingPage.css"
import Navbar from './Navbar'
import Why from "./Why"
const LandingPage = () => {
 
  return (
    <div className='landingPageMainContainer'>
       <div className="LandingPageContentContainer">
        <Navbar/>
        <HeroSection/>
        <Why/>
        <Footer/>
       </div>
    </div>
  )
}

export default LandingPage
