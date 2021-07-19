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


