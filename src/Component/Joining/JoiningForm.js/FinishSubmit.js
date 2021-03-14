import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const FinishSubmit = () => {
   const history = useHistory()

   return (
      <div className='container'>
         <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
               <div className='text-center my-5'>
                  <h1>Congratulation.!</h1>
                  <p>Your Membership Successfully Done</p>
               </div>
               <div className='text-center'>
                  <Button onClick={() => history.push('/')} type="submit" variant="contained" color="primary">
                     Finish
                  </Button>
               </div>
            </div>
            <div className='col-md-3'></div>
         </div>
      </div>
   );
};

export default FinishSubmit;