import {Router} from 'express';
import{adminController,userController,managerController } from '../controllers/userControllers.js';
import {verifyToken} from '../middlewares/authMid.js';
export const userRouter = new Router();

userRouter.post('/admin',verifyToken , adminController);
userRouter.post('/user' , verifyToken,userController);
userRouter.post('/manager' ,verifyToken, managerController);