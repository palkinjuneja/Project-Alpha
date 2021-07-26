import React from "react";
import  RequestCard from "./RequestCard";
import styles from "../styles/Collab.module.css";
import NavBar from './NavBar'
import Emptycard from './Emptycard';
import axios from 'axios';
import { useState,useEffect } from "react";
import InviteAction from "./InviteAction";
const  Collab= () => {
    const [collabList,setCollabList] = useState([]);
    const [userList, setuserList] = useState([]);
    const [projectList, setProjectList]= useState([]);
    const [userList1, setuserList1]=useState([]);
    const [userList2, setuserList2]=useState([]);
    const getData = async()=>{
        const res = await axios.get("http://localhost:5000/getCollabRequest?status=pending&user=60f597a6d5ede84005e51708&key=receiver");
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
      const getData1 = async()=>{
        const res = await axios.get("http://localhost:5000/getCollabRequest?status=rejected&user=60f597a6d5ede84005e51708&key=sender");
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
               setuserList1(tmp1);
              tmp = tmp1;
            }
          })
        }
      }
      const getData2 = async()=>{
        const res = await axios.get("http://localhost:5000/getCollabRequest?status=accepted&user=60f597a6d5ede84005e51708&key=sender");
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
               setuserList2(tmp1);
              tmp = tmp1;
            }
          })
        }
      }
console.log(userList);

    useEffect(() => {
    getData();
    console.log(userList)


    }, [])
        const getCard=()=>{
        if(userList.length){
            return(
                userList.map((element)=>{
                    return(   
                        
                           <div>
                           <RequestCard className={styles.requestCard} projName={element.project.name} ownerName={element.user.name} role="Backend-end Dev"
             profileImg="https://static.overlay-tech.com/assets/43003299-39fe-42e2-a0ed-f28b91f45402.png"
           />
                       <RequestCard className={styles.requestCard} projName={element.project.name} ownerName="Palkin" role="Backend-end Dev"
             profileImg="https://static.overlay-tech.com/assets/43003299-39fe-42e2-a0ed-f28b91f45402.png"
           />
                   
                       </div>)})
            )
        }
        else{
            return(
            <Emptycard />)
        }
    }
    const getupdatedCard=()=>{
        if(userList1.length ){
            return(
            
                userList1.map((element)=>{
                    return(   
                        
                           <div>
                           <RequestCard className={styles.requestCard} projName={element.project.name} ownerName={element.user.name} role="Backend-end Dev"
             profileImg="https://static.overlay-tech.com/assets/43003299-39fe-42e2-a0ed-f28b91f45402.png"
           />
                       
                   
                       </div>)})
                             
                       
            )
            
        }
        else if(userList2.length){
            return(
                userList.map((element)=>{
                    return(   
                        
                           <div>
                           <RequestCard className={styles.requestCard} projName={element.project.name} ownerName={element.user.name} role="Backend-end Dev"
             profileImg="https://static.overlay-tech.com/assets/43003299-39fe-42e2-a0ed-f28b91f45402.png"
           />
                       
                   
                       </div>)})
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
      <NavBar middleText="Request/Invite Section"/>
        
      </div>
      <p className={styles.collabRequests}>
        Collab Requests
      </p>
      <div className={styles.flexWrapperOne}>
      
    
      {
               getCard()
                     
                        
      } 
              
        
      </div>
      <p className={styles.collabRequests}>
        Collab Invitations
      </p>
      <div className={styles.flexWrapperOne}>
      <Emptycard/>
      
      </div>
      <p className={styles.collabUpdates}>Collab Updates</p>
      <div className={styles.flexWrapperTwo}>
      {
          getupdatedCard()
      }
        
      </div>
      
    </div>
  );
};

export default Collab;