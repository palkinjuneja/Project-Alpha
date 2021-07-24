import User from '../models/user.js';
import Project from '../models/project.js';
import Collaboration from '../models/collaboration.js';

export const userGetter = async (request,response)=>{
    try{
        let user1 = await User.find();
        response.json(user1);
    }catch{
        response.json({message : error.message});
    }
}

export const userGetterBySkill = async (request,response)=>{
        const skillName = request.query.skill;
        console.log(skillName);
        let user1 = await User.find({
            "skill":skillName
        }).then(result=>{
            let userList=[];
            result.forEach(user=>{
                userList.push(user);
            })
            console.log(userList.length);
            response.send(userList);
        }).catch(err=>{response.send("Exception Occurred");})  
}

export const userGetterByRole = async (request,response)=>{
    const roleName = request.query.role;
    console.log(roleName);
    let user1 = await User.find({
        "role":roleName
    }).then(result=>{
        let userList=[];
        result.forEach(user=>{
            userList.push(user);
        })
        console.log(userList.length);
        response.send(userList);
    }).catch(err=>{response.send("Exception Occurred");})  
}

export const userGetterById = async (request,response)=>{
    let id = request.query.id;
    let user1 = await User.findById(id).then(result=>{
        console.log(result)
        response.send(result);
    }).catch(err=>{response.send("Exception Occurred");})  
}

export const collaborationRequestGetter =  (request,response)=>{
    let requiredStatus = request.query.status;
    let projectOwner = request.query.user;
    console.log("requiredStatus : ",requiredStatus, "owner : ", projectOwner);
    try{
        let responseList =[];
        let colab =   Collaboration.find({"status_of_request":requiredStatus , "receiver":"60f597a6d5ede84005e51708"}).then(res =>{
        console.log("result is ",res);
        
        for(let i=0;i<res.length;i++){
            const finalResponse ={};
            let user =  User.findById(res[i].sender).then(userResponse =>{
                console.log("Got user")
                finalResponse['userDetails']="userResponse"
                console.log("finalResponse ", finalResponse)
                return finalResponse
            })
            responseList.push(user)
        }
        response.send(responseList)   
    })

    }catch(err){
        console.log(err);
    }

    

}


export const collaborationUpdateById = async (request,response)=>{
    var id = request.query.id;
    var status = request.query.status;
    var owner = request.query.owner;
    var userId =  request.query.userId;
    var projectId =  request.query.projectId;
    var userName = request.query.userName;
    var ownerName = request.query.ownerName;
    var filter ={"_id":id}
    var newValue ={$set:{"status_of_request":status}}
    

    console.log("id is "+id);
    console.log("status is"+status);
    console.log("filer is"+filter._id);
    console.log("newValue"+newValue+" , user is : "+userId+", project is : "+projectId);
   // var collaborators =[];

    try{
        let user1 = await Collaboration.updateOne(filter,newValue).then((res)=>{
            console.log("Update Successfull");

            if(status == "accepted"){
                let userUpdate = User.updateOne({"_id":userId},{$addToSet:{"project_id":projectId}}).then((res2)=>{
                    console.log("User Updated");
                })
                
                if (owner == "admin"){
                    let projectUpdate = Project.updateOne({"_id":projectId},{$addToSet:{"collaborators":{"user_id":userId,"user_name":userName}},$set:{"owner_id":userId},$set:{"owner":ownerName}}).then((res3)=>{
                        console.log("Project Updated");
                    })
                }else{
                    let projectUpdate = Project.updateOne({"_id":projectId},{$addToSet:{"collaborators":{"user_id":userId,"user_name":userName}}}).then((res3)=>{
                        console.log("Project Updated");
                    })
                }
                
            }

            response.send("Invite Request Update SuccessFull");
        })
            
    }catch(err){
        response.send("Exception Occurred while updating Invite Request" +err);
    }
    
}


