import { Button, Paper } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css'

const ContactForm = () => {
   const { register, handleSubmit, errors } = useForm();
   const onSubmit = data => console.log(data);

   return (
      <Paper elevation={3} className='formPaper' >
         <h3>GET IN <span style={{color: 'orange'}}>TOUCH</span></h3>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className='inputForm'>
               <input 
                  className='form-control'
                  placeholder='Enter Your Name'
                  name="name" 
                  ref={register({ required: true })} 
               />
               {errors.name && <span>Name is required</span>}
            </div>
            <div className='inputForm'>
               <input 
                  className='form-control'
                  placeholder='Message Subject'
                  name="subject" 
                  ref={register({ required: true })} 
               />
               {errors.subject && <span>Subject is required</span>}
            </div>

            <div className='inputForm'>
               <textarea
                  className='form-control'
                  placeholder='Message Body' 
                  name="messageBody" 
                  rows="7" 
                  ref={register({ required: true })}
               ></textarea>
               {errors.messageBody && <span>Message Body is required</span>}
            </div>

            <div className='text-center'>
               <Button  type="submit" variant="contained" className='submitBtn'>
                  SEND
               </Button>
            </div>
         </form>
      </Paper>
   );
};

export default ContactForm;