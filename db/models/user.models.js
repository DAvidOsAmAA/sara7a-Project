import {Schema,model} from "mongoose"
const userSchema = new Schema({
  userName:{
    type:String,
    minLength:[3,"min char 3"],
    maxLength:[10,"max char 10"],
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  password:{
    type:String,
    require:true,
  },
  phone:String
},
{
  timestamps:true
});
const userModel = model("User",userSchema);
export default userModel 