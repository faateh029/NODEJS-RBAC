import {Router} from 'express';
import{adminController,userController,managerController } from '../controllers/userControllers.js';
export const userRouter = new Router();

userRouter.post('/admin' , adminController);
userRouter.post('/user' , userController);
userRouter.post('/manager' , managerController);