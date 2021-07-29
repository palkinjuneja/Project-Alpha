import React from "react";
import  RequestCard from "./RequestCard";
import styles from "../styles/Collab.module.css";

import Emptycard from './Emptycard';
import axios from 'axios';
import { useState,useEffect } from "react";

import FooterModule from "./footer";
import NavHeader from "./navHeader";
const  Collab= () => {
    const [collabList,setCollabList] = useState([]);
    const [userList, setuserList] = useState([]);
    const [projectList, setProjectList]= useState([]);
    const [userList1, setuserList1]=useState([]);
    const [userList2, setuserList2]=useState([]);
    const currentUserData = JSON.parse(localStorage.getItem('userDetails'))
   
    const getData = async()=>{
        const res = await axios.get(process.env.REACT_APP_BACKEND+"/getCollabRequest?status=pending&user="+currentUserData.userId+"&key=receiver");
        // collab req -> status : pending and receiever : current user
        // colab req -> status : pending and sender : current user
        // collab req : sender : me and status !=pending4
        console.log("result is ",res);
    
        if(res !== "")
        {
          let tmp = [];
          res.data.map(async(element)=>{
            console.log(process.env.REACT_APP_USER_ID+element.sender)
            let res1 = await axios.get(process.env.REACT_APP_USER_ID+element.sender);
            let res2 = await axios.get(process.env.REACT_APP_BACKEND+"/project/"+element.project_id);
            console.log("res1 is", res1.data )
            console.log("res2 is", res2.data )
            if(res1 !== "")
            {
              let combine ={};
              combine ={"collab":element,"user": res1.data, "project":res2.data}
              let tmp1 = [...tmp, combine];
               setuserList(tmp1);
              tmp = tmp1;
            }
          })
        }
      }
      const getData1 = async()=>{
        const resDeclined = await axios.get(process.env.REACT_APP_BACKEND+"/getCollabRequest?status=rejected&user="+currentUserData.userId+"&key=sender").then((res)=>{
          if(res !== "")
          {
            let tmp = [];
            res.data.map(async(element)=>{
              let res1 = await axios.get(process.env.REACT_APP_USER_ID+element.receiver);
              let res2 = await axios.get(process.env.REACT_APP_BACKEND+"/project/"+element.project_id);
              console.log("res1 is", res1.data )
              console.log("res2 is", res2.data )
              if(res1 !== "")
              {
                let combine ={};
                combine ={"collab":element,"user": res1.data, "project":res2.data}
                let tmp1 = [...tmp, combine];
                 setuserList1(tmp1);
                tmp = tmp1;
              }
            })
          }
        })
        // collab req -> status : pending and receiever : current user
        // colab req -> status : pending and sender : current user
        // collab req : sender : me and status !=pending
    
        
      }
      const getData2 = async()=>{
        const resAccet = await axios.get(process.env.REACT_APP_BACKEND+"/getCollabRequest?status=accepted&user="+currentUserData.userId+"&key=sender").then((res)=>{
          if(res !== "")
          {
            let tmp = [];
            res.data.map(async(element)=>{
              console.log("element is "+element.receiver)
              let res1 = await axios.get(process.env.REACT_APP_USER_ID+element.receiver);
              let res2 = await axios.get(process.env.REACT_APP_BACKEND+"/project/"+element.project_id);
              console.log("res1 is", res1.data )
              console.log("res2 is", res2.data )
              if(res1 !== "")
              {
                let combine ={};
                combine ={"collab":element,"user": res1.data, "project":res2.data}
                let tmp1 = [...tmp, combine];
                 setuserList2(tmp1);
                tmp = tmp1;
              }
            })
          }
          setuserList1(userList1.concat(userList2))


        })
        // collab req -> status : pending and receiever : current user
        // colab req -> status : pending and sender : current user
        // collab req : sender : me and status !=pending
    
        
      }
console.log(userList);

    useEffect(() => {
    getData();
    getData1();
    getData2();
    console.log(userList)


    }, [])
        const getCard=()=>{
        if(userList.length){
            return(
                userList.map((element)=>{
                    return(   
                        
                           <div class ="col-sm-12 col-md-6 col-lg-4">
                             <RequestCard className={styles.requestCard} data={element}/>  

                       </div>)})
            )
        }
        else{
            return(
            <Emptycard />)
        }
    }
    const getupdatedCard=()=>{
      console.log("Lists are "+userList1+" second"+userList2)
      
      if(userList1.length || userList2.length){
        var UserListUpdated = userList1.concat(userList2)
        console.log("Updated List",UserListUpdated)

        return(
        
          UserListUpdated.map((element)=>{
                return(   
                    
                         <div class ="col-sm-12 col-md-6 col-lg-4" >
                         <RequestCard className={styles.requestCard} data={element}/>  </div>
                      )})
         
            
        )
    }
        else {
            return(
                <Emptycard/>
            )
        }

    }
    
  return (
    <div className={styles.requestInvite}>
      <div className={styles.relativeWrapperTwo}>
      <NavHeader middleText="Request/Invite Section"/>
        
      </div>
      <p className={styles.collabRequests}>
        Collab Requests
      </p>
      <div class = "container">
      {/* <div className={styles.flexWrapperOne}> */}
      <div class="row">
      
      {
               getCard()
               
                        
      } 
              
        
      </div>
      </div>
     
     
     
      <p className={styles.collabUpdates}>Collab Updates</p>
      {/* <div className={styles.flexWrapperTwo}> */}
      <div class="container">
      <div class="row">
      {
          getupdatedCard()
      }
        </div>
      </div>
      <FooterModule/>
    </div>
  );
};

export default Collab;