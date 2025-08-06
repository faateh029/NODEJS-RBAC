import {User} from '../models/userModel.js';
export const register = async (req,res)=>{
    try {
        const {username , password , role} = req.body;
  const checksUserName = await User.findOne({username:username});
  if(checksUserName){
    return res.status(409).json({msg:"Conflict: Username already exists"})
  }
  const hashPass = await bcrypt.hash(password , 10);
  await User.save({username, password:hashPass , role});
    res.status(201).json({msg:"User Created Successfully"})
    } catch (error) {
        return res.status(500).json({msg:"Internal Server Error"});
    }
  
}

export const login = async (req,res)=>{
    
}