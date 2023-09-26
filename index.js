import { connection } from "./db/connection.js";
import express from "express";
import userRoutes from "./modules/user/user.routes.js";
import messageRoutes from "./modules/message/message.routes.js";
const app = express();
const port = 3002;
connection();
app.use(express.json())
app.use(userRoutes)
app.use(messageRoutes)
app.get("/",(req,res)=>res.send("hello world"));//api
app.listen(port,()=>console.log(`example app listen to port${port}`))//api