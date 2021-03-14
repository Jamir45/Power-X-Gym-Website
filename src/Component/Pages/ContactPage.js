import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import { useData } from '../ContextProvider/ContextProvider';
import Footer from '../Footer/Footer';

const ContactPage = () => {
   const {setBanner} = useData()
   useEffect(() => {
      setBanner(false)
   }, [])

   return (
      <>
         <Banner title={'CONTACT US'}></Banner>
         <Contact></Contact>
         <Footer></Footer>
      </>
   );
};

export default ContactPage;