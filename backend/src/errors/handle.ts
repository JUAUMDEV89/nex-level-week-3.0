import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup';

interface ValidationError {
   [key: string]: string[];
}

const errorHandle: ErrorRequestHandler = (error, request, response, next)=>{
   if(error instanceof ValidationError){
      let errors = ValidationError = {};
      error.forEach(err => {
         errors[err.path] = err.errors;
      }); 

      return response.status(400).json({ message: 'Validation fails', errors})
   }

   console.error(error);

   return response.status(500).json({ message: 'Internal Server Error' });

}

export default errorHandle;