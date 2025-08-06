// export const userController = async (req,res)=>{
//     res.status(200).json("welcome user");
// }
// export const managerController = async (req,res)=>{
//     res.status(200).json("welcome manager");
// }

// export const adminController = async (req,res)=>{
//     res.status(200).json("welcome admin");
// }


export const welcomeController = async (req , res )=>{
    try {
     
    const role  = req.user.role ; 
    if(role==="admin"){
        return res.status(200).json({msg:"Hello admin"})
    }else if (role==="user"){
        return res.status(200).json({msg:"Hello user"});
    }else if(role==="manager"){
       return res.status(200).json({msg:"Hello manager"});
    }else{
        return res.status(403).json({msg:"role not recognized"});
    }   
    } catch (error) {
      return res.status(500).json({msg:"500 Server Error"})   
    }
}