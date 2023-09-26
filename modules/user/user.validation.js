import Joi from "joi"



const signUpValidationSchemac=  Joi.object({
  userName: Joi.string().min(3).max(10).required(),
  email:Joi.string().email().required(),
  password:Joi.string().pattern(/^[A-Z][a-z]{3,8}$/).required(),
  age:Joi.number().min(10).max(30),
  phone:Joi.string()
})
const signInValidationSchema =Joi.object({
  email:Joi.string().email({tlds:["com",'net']}).required(),
  password:Joi.string().pattern(/^[A-Z][a-z]{3,8}$/).required()
})

export{signUpValidationSchemac,signInValidationSchema}