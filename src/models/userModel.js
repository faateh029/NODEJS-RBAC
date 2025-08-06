import mongoose from 'mongoose';
const userScheema = new mongoose.Schema ({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum:["admin" , "manager" , "user"]
        }
       
},  {
            timestamps:true
    }) 
const User = mongoose.model('User', userScheema);
export default User;