import React, { useEffect, useState } from 'react';
import chooseUsData from '../../Data/chooseUsData';
import './ChooseUs.css'

const ChooseUs = () => {
   const [chooseUs, setChooseUs] = useState()
   useEffect(() => {
      setChooseUs(chooseUsData)
   }, [])

   return (
      <div className='container mt-5'>
         <div className='row pb-5'>
            <div className='text-center py-5'>
               <h2> 
                  <span style={{color: 'orange'}}>WHY</span> CHOOSE US
               </h2>
            </div>
            {
               chooseUs && chooseUs.map( data => {
                  const {icon, title, description} = data
                  return <div className='col-md-4'>
                     <div className='chooseUsBox'>
                        <img src={icon} alt=""/>
                        <h3> {title} </h3>
                        <small> {description} </small>
                     </div>
                  </div>
               })
            }
         </div>         
      </div>
   );
};

export default ChooseUs;