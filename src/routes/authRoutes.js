import {Router} from 'express';
import {registerController,loginController , forgotPasswordController} from '../controllers/authController.js'
export const authRouter = new Router();
authRouter.post('/register', registerController);
authRouter.post('/login', loginController);
authRouter.post('/forgot-password' , forgotPasswordController);