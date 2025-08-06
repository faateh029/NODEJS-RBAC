export const userController = async (req,res)=>{
    res.status(200).json("welcome user");
}
export const managerController = async (req,res)=>{
    res.status(200).json("welcome manager");
}

export const adminController = async (req,res)=>{
    res.status(200).json("welcome admin");
}