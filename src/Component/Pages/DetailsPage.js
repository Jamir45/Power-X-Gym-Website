import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import trainingData from '../../Data/trainingData';
import Banner from '../Banner/Banner';
import { useData } from '../ContextProvider/ContextProvider';
import Footer from '../Footer/Footer';
import TrainingDetails from '../Training/TrainingDetails/TrainingDetails';

const DetailsPage = () => {
   const {setBanner} = useData()
   useEffect(() => {
      setBanner(false)
   }, [])

   const params = useParams()
   const trainingDetails = trainingData && trainingData.find( data => data.id === parseFloat(params.id))
   const {title} = trainingDetails

   return (
      <>
         <Banner title={title}></Banner>
         <TrainingDetails></TrainingDetails>
         <Footer></Footer>
      </>
   );
};

export default DetailsPage;