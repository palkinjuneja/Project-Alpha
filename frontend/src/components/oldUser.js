import React,{useEffect,useState,useContext} from 'react'
import queryString from 'query-string'
import { UserContext } from '../userContext'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
  } from "react-router-dom";

   
//   <CurrentUserContext.Provider value={{ currentUser}}>
//   {children}
// </CurrentUserContext.Provider>

//   export const CurrentUserProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = React.useState(null)
//   }


const OldUser=()=> {    
    const {search} = useLocation()
    const{name,email,login_token,skill,overview,portfolio,role,photo, github, linkedin,time}=queryString.parse(search)
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
      time:time
    }
    const [user,setUser]  = useContext(UserContext)
 
    useEffect(()=>{
     
      localStorage.setItem('userDetails',JSON.stringify(obj))

      if(obj.overview) window.location="http://localhost:3000/profile"
      else window.location="http://localhost:3000/edit"
    },[])   //put user



    return (
        <div> 
            <h1>Redirecting... {search} </h1>
            {/* <h2>User: {JSON.stringify(user)}</h2>
            <h2>Object : {JSON.stringify(obj)}</h2> */}
          
        </div>
    )
}

export default OldUser
