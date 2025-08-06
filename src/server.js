import express from 'express';
import dotenv from 'dotenv';
import { authRouter } from './routes/authRoutes.js';
import { dbConnect } from './config/dbConnect.js';
dotenv.config();
const port = process.env.PORT||7001 ;
dbConnect();
const app = express();

//middleware

app.use(express.json());
app.use('/' , authRouter);
//routes


//port

app.listen(port , ()=>{
    console.log(`server running on port ${port}`);
})