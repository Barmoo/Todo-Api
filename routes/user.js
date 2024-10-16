import { Router } from "express";
import { loginUser, logoutUser,getProfile, registerUser, updateProfile } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";

const userRouter = Router();

userRouter.post('/users/register', registerUser);

userRouter.post('/users/login', loginUser);

userRouter.get('/users/me', getProfile);

userRouter.post('/users/logout', logoutUser);

userRouter.post('/users/me', userAvatarUpload.single('avatar'), updateProfile);

export default userRouter;