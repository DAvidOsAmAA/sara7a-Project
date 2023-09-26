import mogoose from "mongoose"
const mesageSchema = new mogoose.Schema({
  title:{
  type:String,
  required:true,
},
messageContent :{
  type:String,
  required:true,
},
recevedId:{
  type:mogoose.Types.ObjectId,
  ref:"User"
}
},{
  timestamps:true
});
const messageModel = new mogoose.model("Message",mesageSchema);
export default messageModel;