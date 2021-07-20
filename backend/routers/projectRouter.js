import { Router } from 'express';
import Project from '../models/project.js';

const projectRouter = Router();

// Fetch the Projects 
projectRouter.get('/', async(req, res) => {
    try{
        const project = await Project.find({});
        //console.log(project);
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
        //console.log(project);
        if(project){
            res.status(200);
            res.json(project);
        }
    }
    catch(err){
        console.log(err);
        res.json(err);
    }
});

projectRouter.get('/:id',(req,res)=>{
	console.log("query page");
	const id=req.params.id;
	Project.findById(id)      
	.then((result)=>{
		console.log(result);
        res.status(200);
        console.log("send id success");
		res.json(result);
	})
	.catch(err=>{
        console.log(err);
        res.status(404);
        res.json(null);
    });
});

export default projectRouter;
