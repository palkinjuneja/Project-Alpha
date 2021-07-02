const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const projectRouter = require('./routers/projectRouter');
const app = express();

dotenv.config();
require('./config/dbConnect')();

//Passing incoming Data as JSON to Backend
app.use(express.json());

//Routes
//Project Router
app.use('/project', projectRouter);

//Server
const PORT = 8000
app.listen(PORT, ()=>{
    console.log(`Server is up and ruinning in PORT ${PORT}`);
})