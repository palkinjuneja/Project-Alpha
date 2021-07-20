import { Router } from 'express';
import User from '../models/user.js';
const userRouter = Router();

// Fetch the Users 
userRouter.get('/', async(req, res) => {
    try{
        const user = await User.find();
        // console.log("User::"+ user);
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
        // console.log(user);
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
        // console.log(user);
        if(user){
            res.status(200);
            res.json(user);
        }
    }
    catch(err){
        // console.log(err); 
        res.json(err);
    }
});

export default userRouter;
