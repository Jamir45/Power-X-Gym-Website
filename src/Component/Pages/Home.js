import React, { useEffect } from 'react';

import { useData } from '../ContextProvider/ContextProvider';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Feature from '../Features/Feature';
import Training from '../Training/Training';
import Footer from '../Footer/Footer';
import ChooseUs from '../ChooseUs/ChooseUs';

const Home = () => {
   const {training, setTraining, setBanner} = useData()
   console.log(training)
   useEffect(() => {
      setTraining(false)
      setBanner(true)
   }, [])

   return (
      <>
         <Banner></Banner>
         <Feature></Feature>
         <About></About>
         <Training></Training>
         <ChooseUs></ChooseUs>
         <Footer></Footer>
      </>
   );
};

export default Home;