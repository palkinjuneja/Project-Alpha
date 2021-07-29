import React,{useEffect,useState,useContext} from 'react'
import queryString from 'query-string'
import { UserContext } from '../userContext'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
  } from "react-router-dom";

  import axios from 'axios';

  const OldUser=()=> {    
    const {search} = useLocation()
    console.log(search)
    const{name,email,login_token,skill,overview,portfolio,role,photo, github, linkedin,time,id}=queryString.parse(search)
    const obj ={
      name: name,
      email:email,
      login_token:login_token,
      skill:skill,
      overview:overview,
      portfolio:portfolio,
      role:role,
      photo:photo,
      linkedin:linkedin,
      github:github,
      time:time,
      userId:id
    }
   // const [user,setUser]  = useContext(UserContext)
 
    useEffect(()=>{
     
           localStorage.setItem('userDetails',JSON.stringify(obj))
      if(obj.overview) window.location="/project"
      else window.location="/edit"
    },[])   //put user



    return (
        <div> 
            <h1>Redirecting... </h1>
        </div>
    )
}

export default OldUser
