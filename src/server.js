import express from 'express';
import dotenv from 'dotenv';
import { authRouter } from './routes/authRoutes.js';
import { dbConnect } from './config/dbConnect.js';
import {userRouter} from './routes/userRoutes.js';
dotenv.config();
const port = process.env.PORT||7001 ;
dbConnect();
const app = express();

//middleware

app.use(express.json());
//routes

app.use('/api' , authRouter);
app.use('/api/users' , userRouter)
//port

app.listen(port , ()=>{
    console.log(`server running on port ${port}`);
})