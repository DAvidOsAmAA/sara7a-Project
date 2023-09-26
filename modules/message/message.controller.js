import messageModel from "../../db/models/meesages.model.js";

const addMessages  = async(req,res)=>{
  let {id} = req.params;
  let{title,messageContent} = req.body;
  let addMessages = await messageModel.insertMany({title,messageContent,recevedId:id})
  res.json({addMessages,message:"message added"})
}



export{addMessages}