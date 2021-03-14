import React from 'react';
import { Button } from '@material-ui/core';
import './TraininCard.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useData } from '../../ContextProvider/ContextProvider';
import { Link } from 'react-router-dom';


const TrainingCard = ({singleTraining}) => {
   const {training} = useData()
   const {id, title, image} = singleTraining;

   return (
      <div className={!training ? 'col-md-6' : 'col-md-4'}>
         <div data-aos="zoom-in" className='trainingBox' style={{
               backgroundImage: `url(${image})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
            }}
         >
            <Link to={`/training/${id}`}>
               <Button variant="contained" className='trainingBtn'>
                  <h3> {title} </h3>
                  <ArrowRightAltIcon className='rightArrow'/>
               </Button>
            </Link>
         </div>
      </div>
   );
};

export default TrainingCard;