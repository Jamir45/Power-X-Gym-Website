import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../ContextProvider/ContextProvider';
import './Banner.css'

const Banner = (props) => {
   const {banner} = useData()

   return (
      <div className={banner ? "bannerSection" : 'bannerSection2'}>
         <div className='container'>
            {
               banner ? 
               <div className='row'>
                  <div className='col-md-6 titleSection'>
                     <h1>THE BEST FITNESS STUDIO IN TOWN</h1>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                     <div className='text-center'>
                        <Link to='/pricing' className='text-center'>
                           <Button variant="contained" className='joinUsBtn'>
                              JOIN US
                           </Button>
                        </Link>
                     </div>
                  </div>
                  <div className='col-md-6'></div>
               </div> : 
               <div className="text-center">
                  <h1 className="BannerTitle"> {props.title} </h1>
               </div>
            }
         </div>
      </div>
   );
};

export default Banner;