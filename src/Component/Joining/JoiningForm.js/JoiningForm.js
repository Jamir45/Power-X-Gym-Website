import { Button } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useData } from '../../ContextProvider/ContextProvider';
import './JoiningForm.css'


const JoiningForm = ({activeStep, steps, handleNext, handleBack}) => {  
   const {formData, setFormData} = useData()

   const { register, handleSubmit, errors } = useForm();
   const onSubmit = data => {
      console.log(data)
      setFormData(data)
   };

   return (
      <div className='container'>
         <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8 mb-5 mt-3'>
               <form onSubmit={handleSubmit(onSubmit)}>
                  
                  <div className='membershipForm'>
                     <div className='text-center'>
                        <h4 className='pb-3'>Provide Your Information</h4>
                     </div>
                     <div className='d-flex'>
                        <div className='inputBox'>
                           <label htmlFor="firstName">First Name</label>
                           <input 
                              defaultValue={formData && formData.firstName}
                              id="firstName" 
                              type="text"
                              name="firstName"
                              ref={register({ required: true })} 
                           />
                           {errors.firstName && <span>Fist name is required</span>}
                        </div>

                        <div className='inputBox'>
                           <label htmlFor="lastName">Last Name</label>
                           <input 
                              defaultValue={formData && formData.lastName}
                              id="lastName" 
                              type="text"
                              name="lastName"
                              ref={register({ required: true })} 
                           />
                           {errors.lastName && <span>Last name is required</span>}
                        </div>
                     </div>

                     <div className='d-flex'>
                        <div className='inputBox'>
                           <label htmlFor="email">E-mail</label>
                           <input 
                              defaultValue={formData && formData.email}
                              id="email" 
                              type="email"
                              name="email"
                              ref={register({ required: true })} 
                           />
                           {errors.email && <span>Email is required</span>}
                        </div>

                        <div className='inputBox'>
                           <label htmlFor="number">Mobile Number</label>
                           <input 
                              defaultValue={formData && formData.number}
                              id="number" 
                              type="number"
                              name="number"
                              ref={register({ required: true })} 
                           />
                           {errors.number && <span>Mobile Number in required</span>}
                        </div>
                     </div>

                     <div className="d-flex">
                        <div className='inputBox'>
                           <label htmlFor="dateOfBirth">Date of Birth</label>
                           <input 
                              defaultValue={formData && formData.dateOfBirth}
                              id="dateOfBirth" 
                              type="date"
                              name="dateOfBirth"
                              ref={register({ required: true })} 
                           />
                           {errors.dateOfBirth && <span>Date of Birth is required</span>}
                        </div>

                        <div className='inputBox'>
                           <label htmlFor="gender">Gender</label>
                           <select 
                              defaultValue={formData && formData.gender}
                              id="gender" 
                              type="option"
                              name="gender"
                              placeholder='Gender'
                              ref={register({ required: true })} 
                           >
                              <option select="Gender"></option>
                              <option>b</option>
                              <option>c</option>
                           </select>
                           {errors.gender && <span>Last name is required</span>}
                        </div>
                     </div>

                     <div className='d-flex'>
                        <div className='inputBox'>
                           <label htmlFor="address">Address</label>
                           <input 
                              defaultValue={formData && formData.address}
                              id="address" 
                              type="text"
                              name="address"
                              ref={register({ required: true })} 
                           />
                           {errors.address && <span>Email is required</span>}
                        </div>

                        <div className='inputBox'>
                           <label htmlFor="city">City</label>
                           <input 
                              defaultValue={formData && formData.city}
                              id="city" 
                              type="text"
                              name="city"
                              ref={register({ required: true })} 
                           />
                           {errors.city && <span>Mobile Number in required</span>}
                        </div>
                     </div>
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
            <div className='col-md-2'></div>
         </div>
      </div>
   );
};

export default JoiningForm;