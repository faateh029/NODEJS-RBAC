import express from 'express';
import dotenv from 'dotenv';
import { authRouter } from './routes/authRoutes.js';
import requestLogger from './middlewares/requestLogger.js';
import errorHandler from './middlewares/errorHandler.js';
import { dbConnect } from './config/dbConnect.js';
import {userRouter} from './routes/userRoutes.js';
dotenv.config();
const port = process.env.PORT||7001 ;
dbConnect();
const app = express();

//middleware

app.use(express.json());
app.use(requestLogger);

//routes

app.use('/api' , authRouter);
app.use('/api' , userRouter);
app.use(errorHandler);
//port

app.listen(port , ()=>{
    console.log(`server running on port ${port}`);
})