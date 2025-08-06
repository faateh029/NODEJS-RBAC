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
    const role  = req.user.role ; 
    if(role==="admin"){
        res.status(200).json({msg:"Hello admin"})
    }else if (role==="user"){
        res.status(200).json({msg:"Hello user"});
    }else if(role==="manager"){
                res.status(200).json({msg:"Hello manager"});
    }else{
        
                res.status(403).json({msg:"role not recognized"});
    }
}