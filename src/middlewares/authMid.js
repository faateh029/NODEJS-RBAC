import jwt from 'jsonwebtoken';
export const verifyToken = async (req,res , next)=>{
    let authHeader = req.headers.authorization ||req.headers.Authorization;
    let accessToken;
    if(authHeader && authHeader.startsWith("Bearer"))
    {
        accessToken = authHeader.split(" ")[1];
        if(!accessToken){
            return res.status(400).json({msg:"Token not found"});
        }
        try {
        const decode = jwt.verify(accessToken ,process.env.JWT_SECRET);
        req.user = decode;  
        console.log(`the decoded user is ${decode}`);
        next();

        } catch (error) {
            return res.status(500).json({msg:"server error"})
        }
    }else{
          return res.status(400).json({msg:"Token not found , no authorization"});

    }


}