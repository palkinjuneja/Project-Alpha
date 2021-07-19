import express from 'express';
import mongoose from 'mongoose';
import route from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import User from './models/user.js';
import Project from './models/project.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use('/getUsers',route);
const dbPort = process.env.PORT;
const dbHost =process.env.MONGODB_URL;
console.log(dbHost);

mongoose.connect(dbHost,{useNewUrlParser: true, useUnifiedTopology: true}).then( ()=>{
    app.listen(dbPort, () => {
        console.log(`server is running sucessfully at ${dbPort}`);
    });
}
).catch(error => {
    console.log(`Error: `,error.message);
})


