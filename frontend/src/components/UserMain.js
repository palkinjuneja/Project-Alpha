import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import {useState} from 'react'
import Select from 'react-select'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchCard from './SearchCard';
import styles from '../stylesheet/UserMain.module.css'
import NavBar from './NavBar';
import FindPeople from './FindPeople';
import FooterModule from './FooterModule';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

function UserMain() {
    const [userCall,setuserCall] = useState(true);
    const [userList,setuserList] = useState([]);
    const [loading,setloading] = useState(true);
    const [searchType, setsearchType] = React.useState("All");
    const [searchValue,setsearchValue]= React.useState(null);
    const [currentPage,setcurrenPage]=React.useState(0);

    const start =currentPage*12;
    const end = start+12;

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
        <NavBar middleText="Users"/>
        <div className = {styles.userInput}>
          <div  className = {styles.searchBar}>
            <input className={styles.searchInput} placeholder="Type a Role or Skill" type="text" onChange={(event)=>onTextInput(event)}></input>
            <span className={styles.searchInputIcon} onClick={event=>onSearch(event)}><SearchIcon/></span>
          </div>
          
            <div class={styles.searchDropdown}>
                <Select options ={searchTypeOptions} onChange={onDropdownSelect}></Select>
          </div>
        </div>
        {
          userList? <div className = {styles.UserDisplay} >
        <div className ={styles.flexWrapperFour}>
                {userList.slice(start,start+4).map((eachUser)=>(
                   <div key={eachUser._id} className={styles.UserCard}><SearchCard userName={eachUser.name} userId={eachUser._id} userRole={eachUser.role}/></div>
                ))}
        </div>
        <div className ={styles.flexWrapperFour}>
                {userList.slice(start+4,start+8).map((eachUser)=>(
                    <div key={eachUser._id} className={styles.UserCard}><SearchCard userName={eachUser.name} userId={eachUser._id} userRole={eachUser.role}/></div>
                ))}
            </div>
            <div className ={styles.flexWrapperFour}>
                {userList.slice(start+8,start+12).map((eachUser)=>(
                    <div key={eachUser._id} className={styles.UserCard}><SearchCard userName={eachUser.name} userId={eachUser._id} userRole={eachUser.role}/></div>
                ))}
          </div></div>:<p>No Matches Found!! Please Try another Filter</p>}
          <div className={styles.navigationButton}>
          <Button disabled={currentPage === 0 ?true:false} onClick={decreaseCount} >Previous</Button>
          <Button disabled={userList.length<currentPage+12} onClick={increaseCount}>Next</Button>
          </div>        
        <FooterModule/>
        </div>
    )
}

export default UserMain
