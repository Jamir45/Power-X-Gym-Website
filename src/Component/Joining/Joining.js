import { Button, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import JoiningForm from './JoiningForm.js/JoiningForm';
import './Joining.css'
import { useData } from '../ContextProvider/ContextProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './JoiningForm.js/PaymentForm';
import FinishSubmit from './JoiningForm.js/FinishSubmit';


const Joining = () => {
   const {formData, toastMessage, cardData} = useData()
   
   
   function getSteps() {
      return ['Personal Details', 'Bank Payment', 'Membership Created'];
   }
   const [activeStep, setActiveStep] = React.useState(0);
   const steps = getSteps();

   // Next Step Btn Function
   useEffect(() => {
      if (formData) {
         setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
      if (cardData) {
         setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
   }, [formData, cardData])

   // Back Step Btn Function
   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   // Stripe Payment Integration Key 
   const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

   // Step Component Function
   function getStepContent(stepIndex) {
      switch (stepIndex) {
         case 0:
            return <JoiningForm activeStep={activeStep} steps={steps} handleBack={handleBack}></JoiningForm> ;
         case 1:
            return <Elements stripe={stripePromise}>
               <PaymentForm activeStep={activeStep} steps={steps} handleBack={handleBack}></PaymentForm>
            </Elements>;
         default:
            return <FinishSubmit></FinishSubmit>;
      }
   }

   return (
      <div className='container'>
         {toastMessage()}
         <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
               <Stepper activeStep={activeStep} alternativeLabel>
               {steps.map((label) => (
                  <Step key={label}>
                     <StepLabel>{label}</StepLabel>
                  </Step>
               ))}
               </Stepper>
            </div>
            <div className='col-md-2'></div>
         </div>
         <div>
            <Typography className=''>{getStepContent(activeStep)}</Typography>
         </div>
      </div>
   );
};

export default Joining;