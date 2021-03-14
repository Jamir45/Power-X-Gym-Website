import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import { useData } from '../ContextProvider/ContextProvider';
import Footer from '../Footer/Footer';
import Joining from '../Joining/Joining';

const JoiningPage = () => {
   const {setBanner} = useData()
   useEffect(() => {
      setBanner(false)
   }, [])

   return (
      <>
         <Banner title={'YOUR GYM MEMBERSHIP'}></Banner>
         <Joining></Joining>
         <Footer></Footer>
      </>
   );
};

export default JoiningPage;