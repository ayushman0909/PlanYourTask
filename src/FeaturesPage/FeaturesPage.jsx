import Footer from "../LandingPage/Footer";
import Navbar from "../LandingPage/Navbar";
import FeatureCardDetail from "./FeatureCardDetail";
import "./FeaturesPage.css";
import {
  MdChecklist,
  MdOutlineSpaceDashboard,
  MdDevices,
} from "react-icons/md";
import { AiOutlineClockCircle, AiOutlineBell } from "react-icons/ai";
import { FaMicrophoneAlt, FaCloudUploadAlt } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";

const FeaturesPage = () => {
  const Features = [
    {
      Icon: MdChecklist,
      Title: "Smart Task Management",
      Description: "Create ,Edit and Delete tasks easily. ",
    },
    {
      Icon: AiOutlineClockCircle,
      Title: "Auto Timestamps",
      Description:
        "Automatically record the creation and completion times of task ",
    },
    {
      Icon: MdOutlineSpaceDashboard,
      Title: "Stay Organized",
      Description: "Manage your daily goals and increase your productivity.  ",
    },
    {
      Icon: MdDevices,
      Title: "Device Friendly",
      Description: "Access your tasks across all device easily ",
    },
    {
      Icon: FaMicrophoneAlt,
      Title: "Voice Input Support",
      Description: "Add tasks by speaking—perfect for on-the-go updates. ",
    },
    {
      Icon: AiOutlineBell,
      Title: " Smart Reminders",
      Description: "Set automatic alerts for upcoming deadlines and tasks. ",
    },
    {
      Icon: FaCloudUploadAlt,
      Title: "Cloud Storage",
      Description: " Auto-save and sync your tasks to cloud ",
    },

    {
      Icon: BsStopwatch,
      Title: "Focus Timer",
      Description: "Built-in timer to boost concentration and manage breaks. ",
    },
  ];
  return (
    <div className="landingPageMainContainer">
      <div className="LandingPageContentContainer">
        <Navbar />
        <div className="FeaturesPageMainContainer">
          <div className="FeaturesHeadingContainer">
            <div className="FeaturesPageText">
              <h4 className="FeaturesMainHeading">
                Everything You Need <br />
                to Stay Organized
              </h4>
              <p className="FeatureSlogan">
                Discover how our tools help you to manage your tasks
                efficiently,
                <br />
                boost productivity and stay on track.{" "}
              </p>
            </div>
            <div className="getStartedFree">
              <button className="GetStartedFreeBtn">Get Started Free</button>
            </div>
            <div className="FeaturesCardContainer">
              <div className="CurrentFeaturesContainer">
                <div className="part">
                  {Features.slice(0, 2).map((item) => (
                    <FeatureCardDetail
                      title={item.Title}
                      description={item.Description}
                      Logo={item.Icon}
                    />
                  ))}
                </div>
                <div className="part">
                  {Features.slice(2, 4).map((item) => (
                    <FeatureCardDetail
                      title={item.Title}
                      description={item.Description}
                      Logo={item.Icon}
                    />
                  ))}
                </div>
              </div>
              <div className="ComingSoonHeading">
                <h4>Coming Soon...</h4>
              </div>
              <div className="ComingSoonContainer">
                <div className="part">
                  {Features.slice(4, 6).map((item) => (
                    <FeatureCardDetail
                      title={item.Title}
                      description={item.Description}
                      Logo={item.Icon}
                    />
                  ))}
                </div>
                <div className="part">
                  {Features.slice(6, 8).map((item) => (
                    <FeatureCardDetail
                      title={item.Title}
                      description={item.Description}
                      Logo={item.Icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FeaturesPage;
