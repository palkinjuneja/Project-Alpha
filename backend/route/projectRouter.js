import express from 'express'
import Project from '../models/project.js'
import User from '../models/user.js'

const projectRouter = express.Router();

// Fetch the Projects 
projectRouter.get('/', async(req, res) => {
    try{
        const project = await Project.find({});
        if(project){
            res.status(200);
            res.json(project);
        }
    }
    catch(err){
        console.log(err);
    }
});

projectRouter.get('/:id', async(req, res) => {
    try{
        const project = await Project.findById(req.params.id);
        if(project){
            res.status(200);
            res.json(project);
        }
    }
    catch(err){
        console.log(err);
    }
});

//Create Project
projectRouter.post('/create/', async(req, res) => {
    try{
        const project = await Project.create(req.body);
        if(project){

            console.log(project)

            let userUpdate = User.updateOne({"_id":project.owner_id},{$addToSet:{"project_id":project._id}}).then((res2)=>{
                console.log("User Updated for Create Project");
            })
             let projectUpdate = Project.updateOne({"_id":project._id},{$addToSet:{"collaborators":{"user_id":project.owner_id,"name":project.owner}}}).then((res3)=>{
                 console.log("Project Updated for Collaborators");
             })
            res.status(200);
            res.json(project);
        }
    }
    catch(err){
        console.log(err);
        res.json(err);
    }
});

//Update Project
projectRouter.put('/editProject/:id', async(req, res) => {
    try{
        Project.findByIdAndUpdate(req.params.id, { $set: req.body})
        .then((project)=>{
            res.json(project);
            res.status(200);
        })
    }
    catch(err){
        console.log(err);
        res.json(err);
    }
});

export default projectRouter;
