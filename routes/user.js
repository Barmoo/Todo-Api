import { Router } from "express";
import { loginUser, logoutUser, registerUser, updateProfile } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";

const userRouter = Router();

userRouter.post('/users/register', registerUser);
userRouter.post('/users/login', loginUser);
userRouter.post('/users/logout', logoutUser);
userRouter.post('/users/me', userAvatarUpload.single('avatar'), updateProfile);

export default userRouter;