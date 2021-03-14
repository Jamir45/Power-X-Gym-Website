import React, { useEffect, useState } from 'react';
import trainingData from '../../Data/trainingData'
import { useData } from '../ContextProvider/ContextProvider';
import TrainingCard from './TrainingCard/TrainingCard';


const Training = () => {
   const {training, setTraining} = useData()
   const [data, setData] = useState()

   useEffect(() => {
      setTraining(true)
      setData(trainingData)
   }, [])

   const allData = !training && data ? data.slice(0, 2) : data

   return (
      <div className='container'>
         <div className='row'>
            {
               !training && <div className='text-center py-5'>
                  <h2> 
                     TRAINING <span style={{color: 'orange'}}>PROGRAMS</span>
                  </h2>
               </div>
            }
            {
               allData && allData.map(training => {
                  return <TrainingCard singleTraining={training}></TrainingCard>
               })
            }
         </div>
      </div>
   );
};

export default Training;