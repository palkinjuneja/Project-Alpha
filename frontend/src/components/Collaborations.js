import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Collaborations() {

    const [collabList,setCollabList] = useState([]);
    const [userList, setuserList] = useState([]);
    const [projectList, setProjectList]= useState([]);

    const getData = async()=>{
        const res = await axios.get("http://localhost:9000/getCollabRequest?status=pending&user=60f597a6d5ede84005e51708&key=sender");
        // collab req -> status : pending and receiever : current user
        // colab req -> status : pending and sender : current user
        // collab req : sender : me and status !=pending
        if(res !== "")
        {
          let tmp = [];
          res.data.map(async(element)=>{
            let res1 = await axios.get(process.env.REACT_APP_USER_ID+element.sender);
            let res2 = await axios.get(process.env.REACT_APP_USER_ID+element.receiver);
            console.log("res1 is", res1.data )
            console.log("res2 is", res2.data )
            if(res1 !== "")
            {
              let combine ={};
              combine ={"user": res1.data, "project":res2.data}
              let tmp1 = [...tmp, combine];
               setuserList(tmp1);
              tmp = tmp1;
            }
          })
        }
      }


    useEffect(() => {
    getData();
    console.log(userList)


    }, [])
    
    return (
        <div>
           
            {
                userList.map((element)=>{
                    return(
                        <div>
                    <p>{element.user.name}</p>
                    <p>{element.project.name}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Collaborations

