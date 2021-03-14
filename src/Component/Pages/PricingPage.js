import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import { useData } from '../ContextProvider/ContextProvider';
import Footer from '../Footer/Footer';
import Pricing from '../Pricing/Pricing';

const PricingPage = () => {
   const {setBanner} = useData()
   useEffect(() => {
      setBanner(false)
   }, [])

   return (
      <>
         <Banner title={'PLAN PRICING'}></Banner>
         <Pricing></Pricing>
         <Footer></Footer>
      </>
   );
};

export default PricingPage;