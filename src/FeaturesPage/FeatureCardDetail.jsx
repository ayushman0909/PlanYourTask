import React from 'react'
import "./FeaturesPage.css"
const FeatureCardDetail = ({title,description,Logo}) => {
  return (
    <div className='FeatureCardDetail'>
        <Logo className="featureCardLogo"/>
       <h4>{title}</h4>
       <p>{description}</p>
    </div>
  )
}

export default FeatureCardDetail
