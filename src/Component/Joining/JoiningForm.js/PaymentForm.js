import { Button } from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useData } from '../../ContextProvider/ContextProvider';

const PaymentForm = ({activeStep, steps, handleBack}) => {
   const {setCardData} = useData()

   const stripe = useStripe();
   const elements = useElements();

   const handleSubmit = async (event) => {
      event.preventDefault();
      const {error, paymentMethod} = await stripe.createPaymentMethod({
         type: 'card',
         card: elements.getElement(CardElement),
      });

      if (error) {
         toast.error(error.message)
      } else {
         toast.success('Payment Is Successful')
         setCardData(paymentMethod)
      }
   };

   return (
      <div className='container'>
         <div className='row'>
            <div className='col-md-3'></div>

            <div className='col-md-6 mb-5'>
               <form onSubmit={handleSubmit}>
                  <div className='membershipForm py-5'>
                     <div className='text-center'>
                        <h4 className='pb-3'>Payment With Credit Card</h4>
                     </div>
                     <label htmlFor="cardInput">Card Number</label>
                     <CardElement id="cardInput" />
                  </div>

                  <div className='nextPrevBtn'>
                     <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant="contained" 
                        color="primary"
                     >
                        Back
                     </Button>
                     
                     <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary"
                     >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                     </Button>
                  </div>
               </form>
            </div>

            <div className='col-md-3'></div>
         </div>
      </div>
   );
};

export default PaymentForm;