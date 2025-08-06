import {Router} from 'express';
import {registerController,loginController} from '../controllers/authController.js'
export const authRouter = new Router();
authRouter.post('/register', registerController);
authRouter.post('/login', loginController);