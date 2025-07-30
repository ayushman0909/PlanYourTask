import React from 'react'
import "./Why.css"
const WhyCard = ({title}) => {
  return (
    <div className='WhyEachCard'>
       
          <div className="WhyCardLogo">
            {title.logo}
          </div>
         <h6 >{title.title}</h6>
       

    </div>
  )
}

export default WhyCard
