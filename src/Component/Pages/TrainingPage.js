import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import { useData } from '../ContextProvider/ContextProvider';
import Footer from '../Footer/Footer';
import Training from '../Training/Training';

const TrainingPage = () => {
   const {setBanner} = useData()
   useEffect(() => {
      setBanner(false)
   }, [])

   return (
      <>
         <Banner title={'OUR TRAININGS'}></Banner>
         <Training></Training>
         <Footer></Footer>
      </>
   );
};

export default TrainingPage;