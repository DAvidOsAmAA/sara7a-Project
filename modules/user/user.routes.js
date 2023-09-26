import express from "express";
import { signUp,getAlluser,signIn } from "./user.controller.js";
import validation from "../../db/midleware/validation.js";
import { signInValidationSchema, signUpValidationSchemac } from "./user.validation.js";
const userRoutes =express.Router();



userRoutes.post("/users/signUp",validation(signUpValidationSchemac),signUp)
userRoutes.post("/users/login",validation(signInValidationSchema),signIn)
userRoutes.get("/users",getAlluser)








export default userRoutes