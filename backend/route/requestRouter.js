import { Router } from 'express';
import Collaboration from '../models/collaboration.js';

const requestRouter=Router();


//get by query
// requestRouter.get('/',(req,res)=>{
//     console.log("get by query");
//     const senderId=req.query.senderId;
//     const projectId=req.query.projectId;
//     console.log(req.query);
//     Collaboration.find({sender:senderId,project_id:projectId})
//     .then(result=>{
//         console.log("sucess isExist="+(result.length!=0))
//         if(result.length==0){
//             res.status(200);
//             res.json({
//                 isExist:false,
//                 data:null,
//             })
//         }
//         else{
//             res.status(404);
//             res.json({
//                 isExist:true,
//                 data:result
//             })
//         }
//     })
//     .catch(err=>{
//         console.log(err);
//         res.send(err);
//     })
// })


// create new  (post)
requestRouter.post('/create',(req,res)=>{
    //console.log("create request page");
    Collaboration.create(req.body)
    .then(result=>{
       //console.log("success");
        res.status(200);
        res.json({ 
            status:'success',
            result:result
        });
    }).catch(err=>{
        //console.log(err);
        res.status(500);
        res.json({ 
           status:'failed', 
           error:err
        })
    })
})


// get by senderId and projectId
requestRouter.get('/:sender/:project',(req,res)=>{
    //console.log("sender reciever get request");
    //console.log(req.params);
    const senderId=req.params.sender;
    const projectId=req.params.project;
    Collaboration.findOne({sender:senderId,project_id:projectId})
    .then(result=>{
      //  console.log("sucess isExist="+(result.length!=0))
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
       // console.log(err);
        res.send(err);
    })
})


//delete by collabId
requestRouter.delete('/:collabId',(req,res)=>{
    //console.log("delete by collabId")
    const collabId = req.params.collabId;
    Collaboration.findByIdAndDelete(collabId)
    .then(result=>{
    //    console.log("sucess");
        res.status(200);
        res.json({ 
            status:'success',
            result:result
        });
    })
    .catch(err=>{
    //    console.log(err);
        res.status(500);
        res.json({ 
            status:'failed', 
            error:err
         })
    })
})


export default requestRouter;