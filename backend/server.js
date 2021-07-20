import express, { json } from 'express';
import cors from "cors";
const app = express();
import { config } from 'dotenv';
import projectRouter from './routers/projectRouter.js';
import userRouter from './routers/userRouter.js';

app.use(cors());

//Passing incoming Data as JSON to Backend
app.use(json());

config();
import dbConnect from './config/dbConnect.js';
dbConnect();
//Routes

//User Router
app.use('/user', userRouter);
//Project Router
app.use('/project', projectRouter);

//Server
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is up and ruinning in PORT ${PORT}`);
})