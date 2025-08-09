import User from '../models/userModel.js';
import logger from '../config/logger.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const registerController = async (req,res , next)=>{
    try {
        const {username , password , role} = req.body;
  const checksUserName = await User.findOne({username:username});
  if(checksUserName){
    //  logger.warn('Cannot access the username because it already exists')
    // return res.status(409).json({msg:"Conflict: Username already exists"})
    const error = new Error("User not found");
    error.statusCode = 404;
   throw error;
  }
  //logger.info('username checked');
  const hashPass = await bcryptjs.hash(password , 10);
  //logger.info('password hashed');
  await User.create({username, password:hashPass , role});
    //    logger.info('new user registered ');
    res.status(201).json({msg:"User Created Successfully"})
    } catch (error) {
      // logger.error("server error");
      //   return res.status(500).json({msg:"Internal Server Error"});
        next(error);
    }

}

export const loginController = async (req,res , next)=>{
    try {
     const {username , password } = req.body;
     
  const user = await User.findOne({username:username});
  
  if(!user){
    const error = new Error("Credentials are incorrect")
    error.statusCode = 409;
    throw error
  }

  const isMatch = await bcryptjs.compare(password , user.password);

  if(!isMatch){
    // logger.warn('credentials are incorrect')
    // return res.status(409).json({msg:"Credentials are incorrect"})
    
    const error = new Error("Credentials are incorrect")
    error.statusCode=409;
    throw error
  }
    //  logger.info('user verified')

  const token = await jwt.sign({id:user._id , role:user.role} , process.env.JWT_SECRET, {expiresIn:"1h"})
  //logger.info('token generted')
    res.status(201).json({token:token});
     
    } catch (error) {
        next(error);
      }
     
}