import React from 'react';
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
   return (
      <div className="footer">
         <div className='container'>
            <div className='row pt-5'>
               <div className='col-md-3 col-sm-6 col-6 text-white'>
                  <h3>POWER <span style={{color: 'orange'}}>X</span> </h3>
               </div>
               <div className='col-md-2 col-sm-6 col-6'>
                  <ul className='list-unstyled text-white'>
                     <li><b>Need Help?</b></li>
                     <li>Help Center</li>
                     <li>Email Support</li>
                     <li>Live Chat</li>
                     <li>Gift Certificate</li>
                     <li>Send Us Feedback</li>
                  </ul>
               </div>
               <div className='col-md-2 col-sm-6 col-6'>
                  <ul className='list-unstyled text-white'>
                     <li><b>Digital Resource</b></li>
                     <li>Articles</li>
                     <li>E-books</li>
                  </ul>
               </div>
               <div className='col-md-2 col-sm-6 col-6'>
                  <ul className='list-unstyled text-white'>
                     <li><b>Contact Us</b></li>
                     <li>
                        <FacebookIcon/>
                        <YouTubeIcon/>
                        <InstagramIcon/>
                        <TwitterIcon/>
                     </li>
                     <li>Forum</li>
                  </ul>
               </div>
               <div className='col-md-3'>
                  <ul className='list-unstyled text-white'>
                     <li><b>Join Our Newsletter</b></li>
                     <li>Get Exclusive News, Features and Update From The Shredder Weight Loss Academy</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;