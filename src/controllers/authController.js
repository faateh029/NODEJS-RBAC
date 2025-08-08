import User from '../models/userModel.js';
import logger from '../config/logger.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const registerController = async (req,res)=>{
    try {
        const {username , password , role} = req.body;
       // console.log(username,password,role);
  const checksUserName = await User.findOne({username:username});
  //console.log(checksUserName);
  if(checksUserName){
     logger.warn('Cannot access the username because it already exists')
    return res.status(409).json({msg:"Conflict: Username already exists"})
  }
  logger.info('username checked');
  const hashPass = await bcryptjs.hash(password , 10);
  logger.info('password hashed');
//  console.log(hashPass);
  await User.create({username, password:hashPass , role});
    logger.info('new user registered ');
    res.status(201).json({msg:"User Created Successfully"})
    } catch (error) {
      logger.error("server error");
        return res.status(500).json({msg:"Internal Server Error"});
    }

}

export const loginController = async (req,res)=>{
    try {
     const {username , password } = req.body;
     console.log(username , password);
     
  const user = await User.findOne({username:username});
  //console.log(user);
  if(!user){
    return res.status(409).json({msg:"Credentials are incorrect"})
  }

  const isMatch = await bcryptjs.compare(password , user.password);
   console.log(isMatch);
  if(!isMatch){
    logger.warn('credentials are incorrect')
    return res.status(409).json({msg:"Credentials are incorrect"})
  }
      logger.info('user verified')

  const token = await jwt.sign({id:user._id , role:user.role} , process.env.JWT_SECRET, {expiresIn:"1h"})
  logger.info('token generted')
  // const token = await jwt.sign({id:user._id} , process.env.JWT_SECRET, {expiresIn:"1h"})
  // console.log(token);
  res.status(201).json({token:token});
     
    } catch (error) {
        return res.status(500).json({msg:"Something went wrong"});
    }
     
}