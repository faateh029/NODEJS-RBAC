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
        },
    otp:{
        type:String
    },
    otpexpires:{
        type:Date
    },
    otpVerified:{
        type:Boolean,
        default:false
    } 

},  {
            timestamps:true
    }) 
const User = mongoose.model('User', userScheema);
export default User;