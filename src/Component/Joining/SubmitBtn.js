import { Button } from '@material-ui/core';
import React from 'react';

const SubmitBtn = ({activeStep, steps, handleNext}) => {
   return (
      <Button variant="contained" color="primary" onClick={handleNext}>
         {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
      </Button>
   );
};

export default SubmitBtn;