import React, { useEffect, useState } from 'react';
import featureData from '../../Data/featureData'
import './Feature.css'
import AOS from 'aos';
AOS.init();

const Feature = () => {
   const [data, setData] = useState()
   useEffect(() => {
      setData(featureData)
   }, [])

   return (
      <div className="container">
         <div className="row">
            <div className="featureTitle">
               <h1>OUR FEATURES</h1>
            </div>
            {
               data && data.map(feature => {
                  const {title, description, background, icon} = feature
                  return <div className='col-md-4' >
                     <div data-aos="zoom-in" className='featureBox' style={{
                        background: `linear-gradient( rgba(29, 30, 48, 0.5) 100%, rgba(29, 30, 48, 0.5)100%),url(${background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                     }}
                     >
                        <img 
                           className={title === 'WORKOUT' ? 'featureIcon2' : 'featureIcon'} 
                           src={icon} alt=""
                        />
                        <h2 style={{color: title === 'WORKOUT' && 'orange'}} > {title} </h2>
                        <p> {description} </p>
                     </div>
                  </div>
               })
            }
         </div>
      </div>
   );
};

export default Feature;