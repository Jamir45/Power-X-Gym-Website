import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';


// Create DataContext
const DataContext = createContext()
export const useData = () => useContext(DataContext)

// Create Provider For AuthContext
export const DataContextProvider = (props) => {
   const contexts = Contexts()
   return <DataContext.Provider value={contexts}>{props.children}</DataContext.Provider>
}


// Create All Context Function
const Contexts = () => {
   const [training, setTraining] = useState(true)
   const [banner, setBanner] = useState(false)
   const [trainingDetails, setTrainingDetails] = useState()
   const [formData, setFormData] = useState()
   const [cardData, setCardData] = useState()

   const [message, setMessage] = useState(null)
   setTimeout( () => {
      setMessage(null)
   }, 4000)
   toast.error(message)

   // Show Toast Message in Our Component
   const toastMessage = () => {
      return <ToastContainer 
         position="top-center"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
      />
   }

   
   return {
      training, 
      setTraining,
      banner, 
      setBanner,
      trainingDetails, 
      setTrainingDetails,
      formData, 
      setFormData,
      cardData, 
      setCardData,
      message, 
      setMessage,
      toastMessage,
   }
}

export default Contexts;