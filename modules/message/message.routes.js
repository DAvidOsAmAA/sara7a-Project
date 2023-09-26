import express from"express";
import { addMessages } from "./message.controller.js";
const messageRoutes = express.Router();

messageRoutes.post("/message/:id",addMessages)






export default messageRoutes;