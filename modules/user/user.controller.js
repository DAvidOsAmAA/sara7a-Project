import userModel from "../../db/models/user.models.js";
import bcrypt from "bcrypt"
import Joi from "joi";


const signUp = async(req,res)=>
{
  try{
    let {error} = signUpValidationSchemac.validate(req.body,{abortEarly:false});
    console.log(error,"validation")
  let {email}= req.body;
  let foundedUser = await userModel.findOne({email:email})
  if(foundedUser){
    res.json({message:"already register"})
  }else{
    let hashPassword = bcrypt.hashSync(req.body.password,7)
    let addUser = await userModel.insertMany({...req.body,password:hashPassword})
    res.json({message:"add succesfully",addUser})
  }}catch(error){
    res.json({message:"error",error})
  }
}


const signIn = async (req,res) => {
  let foundedUser = await userModel.findOne({email:req.body.email});
  if(foundedUser){
    let matches = bcrypt.compareSync(req.body.password, foundedUser.password)
    if(foundedUser.password==req.body.password){
    
      res.json({message:"welcome"})
    }else{
      res.json({message:"password wrong"})
    }
  }else{
    res.json({merssage:"you have to register first"})
  }
}


const getAlluser= async(req,res)=>{
  let allUser = await userModel.find();
  res.json(allUser)
}

export {signUp,getAlluser,signIn}