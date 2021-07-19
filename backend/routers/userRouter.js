const express = require('express');
const User = require('../models/user');
const userRouter = express.Router();

// Fetch the Users 
userRouter.get('/', async(req, res) => {
    try{
        const user = await User.find();
        if(user){
            res.status(200);
            res.json(user);
        }
    }
    catch(err){
        console.log(err);
    }
});

userRouter.get('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(user){
            res.status(200);
            res.json(user);
        }
    }
    catch(err){
        console.log(err);
    }
});

userRouter.post('/create/', async(req, res) => {
    try{
        const user = await User.create(req.body);
        if(user){
            res.status(200);
            res.json(user);
        }
    }
    catch(err){
        res.json(err);
    }
});

module.exports = userRouter;
