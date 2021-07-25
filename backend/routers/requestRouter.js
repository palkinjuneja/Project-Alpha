const express = require('express');
const Collaboration = require('../models/collaboration');
const requestRouter = express.Router();

requestRouter.post('/create',(req,res)=>{
    Collaboration.create(req.body)
    .then(result=>{
        res.status(200);
        res.json({ 
            status:'success',
            result:result
        });
    }).catch(err=>{
        res.status(500);
        res.json({ 
           status:'failed', 
           error:err
        })
    })
})

// get by senderId and projectId
requestRouter.get('/:sender/:project',(req,res)=>{
    const senderId=req.params.sender;
    const projectId=req.params.project;
    Collaboration.findOne({sender:senderId,project_id:projectId})
    .then(result=>{
        if(result.length==0){
            res.status(200);
            res.json({
                isExist:false,
                result:null,
            })
        }
        else{
            res.status(200);
            res.json({
                isExist:true,
                result:result
            })
        }
    })
    .catch(err=>{
        res.send(err);
    })
})

//delete by collabId
requestRouter.delete('/:collabId',(req,res)=>{
    const collabId = req.params.collabId;
    Collaboration.findByIdAndDelete(collabId)
    .then(result=>{
        res.status(200);
        res.json({ 
            status:'success',
            result:result
        });
    })
    .catch(err=>{
        res.status(500);
        res.json({ 
            status:'failed', 
            error:err
         })
    })
})

module.exports = requestRouter;