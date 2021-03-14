import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import scheduleData from '../../../Data/scheduleData'

const Schedule = () => {
   return (
      <div className='row'>
          <h3 className='my-3 pb-3' style={{fontWeight: '600'}}>
            <span style={{color: 'orange'}}>
               TRAINING
            </span> SCHEDULE
         </h3>
         {
            scheduleData && scheduleData.map(data => {
               return <div className='col-6'>
                  <div className='schedule'>
                     <h5> {data.day} </h5>
                     <p 
                        className='pb-0 mb-0' 
                        style={{color: 'orange'}}
                     > 
                        {data.time} 
                     </p>
                  </div>
               </div>
            })
         }
         <div className='text-center mt-3 pt-3'>
            <Link to='/pricing' className='text-center'>
               <Button variant="contained" className='joinUsBtn'>
                  JOIN US
               </Button>            
            </Link>
         </div>
      </div>
   );
};

export default Schedule;