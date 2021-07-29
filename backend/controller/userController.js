import User from '../models/user.js';
import Project from '../models/project.js';
import Collaboration from '../models/collaboration.js';

export const userGetter = async (request,response)=>{
    try{
        let user1 = await User.find();
        response.json(user1);
   
    }catch(error){
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
export const getUserIdByToken = async (request,response)=>{
    const loginToken = request.query.loginToken;
    let user1 = await User.find({
        "login_token":loginToken
    }).then(result=>{

        response.send(result[0]._id);
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
    console.log("id : "+id);
    console.log("Query : "+request.query);
    let user1 = await User.findById(id).then(result=>{
        console.log(result)
        response.send(result);
    }).catch(err=>{response.send("Exception Occurred");})  
}



export const collaborationRequestGetter =  async (request,response)=>{
    let requiredStatus = request.query.status;
    let user = request.query.user;
    let searchKey = request.query.key
    // console.log("requiredStatus : ",requiredStatus, "owner : ", projectOwner);
    try{
        if(searchKey=="receiver"){
            let collabResponse = await Collaboration.find({"status_of_request":requiredStatus , "receiver":user}).then(res =>{
            response.send(res)
        })
        }else{
            let collabResponse = await Collaboration.find({"status_of_request":requiredStatus , "sender":user}).then(res =>{
                response.send(res)})
        }
    }catch(err){
        console.log(err);
    }
}

export const collaborationRequestGetterFull =  async (request,response)=>{
    let requiredStatus = request.query.status;
    let projectOwner = request.query.user;
    console.log("requiredStatus : ",requiredStatus, "owner : ", projectOwner);
    try{
        let collabResponse = await Collaboration.find({"status_of_request":requiredStatus , "receiver":"60f597a6d5ede84005e51708"}).then(res =>{
        return res
    })
    let compiledResult = async ()=> {
        let arrayList= await collabResponse.forEach(element => {
            let user = User.findById(element.sender).then(userResponse =>{
                console.log("Got user"+userResponse)
                return userResponse
            })
        console.log(user)
        //arrayList.push(user)

        });
        return arrayList
    }

    response.send(compiledResult())

    }catch(err){
        console.log(err);
    }
}


export const collaborationUpdateById = async (request,response)=>{
    console.log("request is ", request);
    var id = request.query.id;
    var status = request.query.status;
    var owner = request.query.owner;
    var userId =  request.query.userId;
    var userIdString = userId.toString();
    var projectId =  request.query.projectId;
    var userName = request.query.userName;
    var ownerName = request.query.ownerName;
    var filter ={"_id":id}
    var newValue ={$set:{"status_of_request":status}}
    

    console.log("id is "+id+"user name is "+userName+" userID is "+userId+"ownerName "+ownerName);
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
                
                if (ownerName == "Project Union"){
                  //  let projectUpdate = Project.updateOne({"_id":projectId},{$addToSet:{"collaborators":{"user_id":userId,"user_name":userName}}},{$set:{"owner_id":userId,"owner":userName}}).then((res3)=>{
                    let projectUpdate = Project.updateOne({"_id":projectId},{$addToSet:{"collaborators":{"user_id":userId,"name":userName}},$set:{"owner_id":userId,"owner":userName}}).then((res3)=>{
                        console.log("Project Updated with Owner");
                    })
                }else{
                    let projectUpdate = Project.updateOne({"_id":projectId},{$addToSet:{"collaborators":{"user_id":userId,"name":userName}}}).then((res3)=>{
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


