const express = require('express');
const cors = require("cors");
const app = express();
const dotenv = require('dotenv');
const projectRouter = require('./routers/projectRouter');
const userRouter = require('./routers/userRouter');

app.use(cors());

//Passing incoming Data as JSON to Backend
app.use(express.json());

dotenv.config();
require('./config/dbConnect')();

//Routes

//User Router
app.use('/user', userRouter);

//Project Router
app.use('/project', projectRouter);

//Server
const PORT = 8000
app.listen(PORT, ()=>{
    console.log(`Server is up and ruinning in PORT ${PORT}`);
})