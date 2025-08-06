import {Router} from 'express';
import {adminController,userController,managerController } from '../controllers/userControllers.js';
import { authorizeRoles } from '../middlewares/roleMid.js';
import {verifyToken} from '../middlewares/authMid.js';
export const userRouter = new Router();

userRouter.post('/admin',verifyToken , authorizeRoles("admin") , adminController);
userRouter.post('/user' , verifyToken, authorizeRoles("admin" , "manager" , "user"), userController);
userRouter.post('/manager' ,verifyToken, authorizeRoles("admin", "manager"),managerController);