import React from "react";
import "./Why.css";
import WhyCard from "./WhyCard";
import { ImUndo2 } from "react-icons/im";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineChecklist } from "react-icons/md"
import { MdDevices } from "react-icons/md"
import { FiLock } from "react-icons/fi"

const Why = () => {
    let CardItems=[
        {   logo:<ImUndo2 className="Cardlogo"/>,
            title:"Simple Interface"
        }
        ,{   logo:<LuClock3  className="Cardlogo"/>,
            title:"Auto-Timestamps"
        }
        ,{
            logo:<MdOutlineChecklist className="Cardlogo"/>,
            title:"Stay Organized" 
        }
        ,{
           logo:<MdDevices className="Cardlogo"/>,
            title:"Device Friendly"  
        },{
           logo:<FiLock className="Cardlogo"/>,
            title:" Secure & Private"  
        }]
  return (
    <div className="WhyPlanYourTask">
      <div className="Whyheading">
        <h4>Why PlanYourTask?</h4>
      </div>
      <div className="WhyCardContainer">
        {
            CardItems.map((item,index)=>(
                <WhyCard 
                key={index}
                
                title={item}/>
            ))
        }
      </div>
    </div>
  );
};

export default Why;
