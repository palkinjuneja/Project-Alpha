import React, { useEffect } from 'react'
import axios from 'axios';
import {useState,useContext} from 'react'
import { useHistory } from "react-router-dom";
import { useCurrentUser } from './CurrentUserContext';


function FindPeople() {
    // const { currentUser} = const context = useContext(contextValue)();
   // const context = useContext(useCurrentUser);
    //const name = context.userName;
    const {setCurrentUser} = useCurrentUser();
    

    const onClickFindPeopleButton=event=>{
       // history.push()
     //  window.location.href='/User';
     setCurrentUser("user updated");
     console.log("User Updated")
    }
    
    return (
        <div>
            <button name="findPeopleButton"onClick={onClickFindPeopleButton}>See who's on Union</button>
        
        </div>
    )
}

export default FindPeople
