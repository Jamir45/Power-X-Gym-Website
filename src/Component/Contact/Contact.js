import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ContactForm from './ContactForm';
import './Contact.css'
import { Paper } from '@material-ui/core';

const Contact = () => {
   
   return (
      <div className='container'>
         <div className='row my-3 py-5'>
            <div className='col-md-6'>
               <Paper  elevation={3} className='contactBox'>
                  <h3>
                     <span style={{color: 'orange'}}>CONTACT</span> US
                  </h3>
                  <p>
                     <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</small>
                  </p>
                  <ul>
                     <li><EmailIcon/> jamirhossain203@gmail.ocm</li>
                     <li><PhoneIcon/> +8801703-844506</li>
                     <li>
                        <FacebookIcon/>
                        <a href="https://www.facebook.com/jomir.hossain.146/" target="_blank">Facebook</a> 
                     </li>
                     <li>
                        <GitHubIcon/>
                        <a href="https://github.com/Jamir45" target="_blank">GitHub</a>
                     </li>
                     <li>
                        <LinkedInIcon/>
                        <a href="https://www.linkedin.com/in/jamir-hossain-40a234206/" target="_blank">linkedin</a>
                     </li>
                  </ul>
               </Paper>
            </div>
            <div className='col-md-6 my-3'>
               <ContactForm></ContactForm>
            </div>
         </div>
      </div>
   );
};

export default Contact;