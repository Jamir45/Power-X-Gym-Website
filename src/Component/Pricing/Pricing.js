import React, { useEffect, useState } from 'react';
import './Pricing.css'
import pricingData from '../../Data/pricingData'
import CheckIcon from '@material-ui/icons/Check';
import AOS from 'aos';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
AOS.init();

const Pricing = () => {
   const [data, setData] = useState()
   useEffect(() => {
      setData(pricingData)
   }, [])

   return (
      <div className='container'>
         <div className='row py-3 pb-5'> 
            <div className='text-center pb-3'>
               <h2>CHOOSE THE OFFER <span style={{color: 'orange'}}>THAT'S SUITS FOR YOU</span> </h2>
            </div>
            {
               data && data.map(feature => {
                  const {title, plan, price, features, background} = feature
                  return <div className='col-md-4' >
                     <div data-aos="zoom-in" className='pricingBox' style={{
                        background: `linear-gradient( rgba(29, 30, 48, 0.5) 100%, rgba(29, 30, 48, 0.5)100%),url(${background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                     }}
                     >
                        <h3> {title} </h3>
                        <h2> {plan} </h2>
                        <h1> $ {price} </h1>
                        <ul className='List'>
                           {
                              features.map(feature => {
                                 return <li> <CheckIcon/> {feature} </li>
                              })
                           }
                        </ul>
                        <Link to='/membership'>
                           <Button variant="contained" className='purchaseBtn'>
                              PURCHASE
                           </Button>
                        </Link>
                     </div>
                  </div>
               })
            }
         </div>
      </div>
   );
};

export default Pricing;