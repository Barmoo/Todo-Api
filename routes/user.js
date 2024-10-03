import  { Router } from "express";
import { login, logout, register } from "../controllers/user.js";

const userRouter = Router();

userRouter.post('/users/register',register);
userRouter.post('/users/login',login);
userRouter.post('/users/logout',logout);

export default userRouter;