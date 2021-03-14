import React, { useEffect } from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import { useData } from '../ContextProvider/ContextProvider';
import Footer from '../Footer/Footer';

const AboutPage = () => {
   const {setBanner} = useData()
   useEffect(() => {
      setBanner(false)
   }, [])

   return (
      <>
         <Banner title={'ABOUT US'}></Banner>
         <About></About>
         <Footer></Footer>
      </>
   );
};

export default AboutPage;