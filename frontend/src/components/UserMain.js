import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import {useState} from 'react'
import Select from 'react-select'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchCard from './SearchCard';
import styles from '../styles/UserMain.module.css'

import FindPeople from './FindPeople';
import FooterModule from './footer';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Hidden } from '@material-ui/core';
import NavHeader from './navHeader';

function UserMain() {
    const [userCall,setuserCall] = useState(true);
    const [userList,setuserList] = useState([]);
    const [loading,setloading] = useState(true);
    const [searchType, setsearchType] = React.useState("All");
    const [searchValue,setsearchValue]= React.useState(null);
    const [currentPage,setcurrenPage]=React.useState(0);

    const start =currentPage*9;
    const end = start+9;

    const searchTypeOptions =[
        { label:"Role", value:"Role"},
        { label:"Skill", value:"Skill"},
        { label: "None", value:"All"}
      ];
      
    

    const onDropdownSelect= (event) => {
        setsearchType(event.value);
      };
    
      const onTextInput =(event) =>{
        var searchTerm = event.target.value;
        searchTerm = searchTerm.toLowerCase();
        setsearchValue(searchTerm);
        console.log(event.target.value);

      }

      const onSearch =(event) =>{
       setuserCall(true);
        console.log(event.target.value);

      }

      const decreaseCount=(event)=>{
        setcurrenPage(currentPage-1);
      }
      const increaseCount=(event)=>{
        setcurrenPage(currentPage+1);
      }

    
    const fetchUsers = ()=>{
        // Call Api to get Users List and pass it as a prop to child component.
       // setloading(true);
        let getRequest = null;
        if(searchType==="Skill" && searchValue!=null){
            getRequest =process.env.REACT_APP_USER_SKILL+searchValue; 
          }else if (searchType==="Role" && searchValue!=null){
            getRequest = process.env.REACT_APP_USER_ROLE+searchValue;
          }else{
            getRequest = process.env.REACT_APP_USER_ALL;
          }
          console.log(`get Request is ${getRequest}`);
        axios.get(getRequest).then(res=>{
            setuserList(res.data);
            setuserCall(false);
            setloading(false);
            console.log(`Fetched Users are ${res.data}`);
        }).catch(err=>{
            console.log("error:",{err});
            setloading(true);
            return (
            <div>{err}</div>
            )
        })

        }
    
        useEffect(()=>{
            console.log(searchType);
            if(userCall){
            fetchUsers();
            }
        });

       

    return (

      
        < div className={styles.main}>
         <NavHeader middleText="Users"/>
        <div  class="container">
        <div class="row align-items-center" >
          <div class="col-sm-12 col-md-6 col-lg-8">
          <input style={{width:'100%'}}placeholder="Type a Role or Skill" type="text" onChange={(event)=>onTextInput(event)}></input>
          
          </div>
             <div class="col-sm-12 col-md-3 col-lg-3">
             <Select  options ={searchTypeOptions} onChange={onDropdownSelect}></Select>
             </div> 
             <div class="col-sm-12 col-md-3 col-lg-1">
             <button style={{width:'100%', height:'200%' , border:'2px solid black', backgroundColor:'white'}} onClick={event=>onSearch(event)}><SearchIcon/></button> 
             </div>
            
        </div>
        </div>
        
        {
          userList? <div class="container " style={{overflow:'hidden'}}>
          {/* className = {styles.UserDisplay} > */}
        <div class="row " >
         {/* className ={styles.flexWrapperFour}> */}
                {userList.slice(start,start+9).map((eachUser)=>(
                   <div class="col-sm-12 col-md-6 col-lg-4" key={eachUser._id} ><SearchCard userPhoto={eachUser.photo}userName={eachUser.name} userId={eachUser._id} userRole={eachUser.role}/></div>
                ))}
        </div>
        <div class="row justify-content-center">
          <Button class="col-sm-5 col-md-4 col-lg-2 p-3 m-3 border bg-light" disabled={currentPage === 0 ?true:false} onClick={decreaseCount} >Previous</Button>
          <Button class="col-sm-5 col-md-4 col-lg-2 p-3 m-3 border bg-light" disabled={userList.length<currentPage+9} onClick={increaseCount}>Next</Button>
          </div> 
       </div>  :<p>No Matches Found!! Please Try another Filter</p>}
          {/* <div className={styles.navigationButton}> */}
                 
        <FooterModule/>
        </div>
    )
}

export default UserMain
