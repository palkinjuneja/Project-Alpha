const express = require('express');
const Project = require('../models/project');
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
            res.status(200);
            res.json(project);
        }
    }
    catch(err){
        console.log(err);
        res.json(err);
    }
});

module.exports = projectRouter;
