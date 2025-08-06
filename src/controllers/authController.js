import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const registerController = async (req,res)=>{
    try {
        const {username , password , role} = req.body;
        console.log(username,password,role);
  const checksUserName = await User.findOne({username:username});
  console.log(checksUserName);
  if(checksUserName){
    return res.status(409).json({msg:"Conflict: Username already exists"})
  }
  const hashPass = await bcryptjs.hash(password , 10);
  console.log(hashPass);
  await User.create({username, password:hashPass , role});
    res.status(201).json({msg:"User Created Successfully"})
    } catch (error) {
        return res.status(500).json({msg:"Internal Server Error"});
    }
  
}

export const loginController = async (req,res)=>{
    try {
     const {username , password } = req.body;
     console.log(username , password);
     
  const user = await User.findOne({username:username});
  console.log(user);
  if(!user){
    return res.status(409).json({msg:"Credentials are incorrect"})
  }
  const isMatch = await bcryptjs.compare(password , user.password);
   console.log(isMatch);
  if(!isMatch){
    return res.status(409).json({msg:"Credentials are incorrect"})
  }
  const token = await jwt.sign({id:user._id , role:user.role} , process.env.JWT_SECRET, {expiresIn:"1h"})
  console.log(token);
  res.status(201).json({token:token});
     
    } catch (error) {
        return res.status(500).json({msg:"Something went wrong"});
    }
     
}