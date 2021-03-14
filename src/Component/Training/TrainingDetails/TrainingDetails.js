import React from 'react';
import { useParams } from 'react-router-dom';
import trainingData from '../../../Data/trainingData'
import './TrainingDetails.css'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Schedule from './Schedule';

const TrainingDetails = () => {
   const params = useParams()

   const trainingDetails = trainingData && trainingData.find( data => data.id === parseFloat(params.id))
   const {image, details} = trainingDetails

   return (
      <div className='container'>
         <div className='row'>
            <div className='col-md-7 Details'>
               <div className='trainingBox' 
                  style={{
                     backgroundImage: `url(${image})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                  }}>
               </div>
               <p> {details} </p>
               
               <ul className='list-unstyled featureList'>
                  <li> 
                     <CheckBoxIcon 
                        style={{color: 'orange', marginRight: '10px'}}
                     /> Having Slimmer Shapely Thighs
                  </li>
                  <li> 
                     <CheckBoxIcon 
                        style={{color: 'orange', marginRight: '10px'}}
                     /> Getting Stronger Body
                  </li>
                  <li> 
                     <CheckBoxIcon 
                        style={{color: 'orange', marginRight: '10px'}}
                     /> Increased Metabolism
                  </li>
                  <li> 
                     <CheckBoxIcon 
                        style={{color: 'orange', marginRight: '10px'}}
                     /> Increased Muscular Endurance
                  </li>
                  <li> 
                     <CheckBoxIcon 
                        style={{color: 'orange', marginRight: '10px'}}
                     /> Maximum Results in Less Time
                  </li>
                  <li> 
                     <CheckBoxIcon 
                        style={{color: 'orange', marginRight: '10px'}}
                     /> Firms Hips and Tummy
                  </li>
               </ul>
            </div>
            <div className='col-md-5'>
               <Schedule></Schedule>
            </div>
         </div>
      </div>
   );
};

export default TrainingDetails;