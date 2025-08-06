export const authorizeRoles =  (...allowedRoles)=>{
    return (req,res , next)=>{
        if(!allowedRoles.includes(req.user.role))
        {
            return res.status(403).json({msg:"Invalid access"})
        }
        next();
    }

}