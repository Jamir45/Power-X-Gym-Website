import React from 'react';
import './About.css'

const About = () => {

   return (
      <div className='container my-5'>
         <div className='row pt-5'>
            <div className='col-md-6'>
               <div className='AboutImg'></div>
            </div>
            <div className='col-md-6 p-3'>
               <h1 style={{color: 'lightgray', fontSize: '50px'}}>ABOUT US</h1>
               <h1 style={{color: 'orange'}}>WE ARE HERE TO DREAM!</h1>
               <h1>OUR TEAM IS HERE TO SURV YOU</h1>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since th standard dummy text. Lorem Ipsum has been the industry's standard dummy text ever since. </p>
            </div>
         </div>
      </div>
   );
};

export default About;