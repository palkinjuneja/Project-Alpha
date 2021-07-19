import React, { useEffect } from 'react'
import axios from 'axios';
import {useState} from 'react'
import { useHistory } from "react-router-dom";

function FindPeople() {
    const onClickFindPeopleButton=event=>{
       // history.push()
       window.location.href='/User';
    }
    
    return (
        <div>
            <button name="findPeopleButton"onClick={onClickFindPeopleButton}>See who's on Union</button>
        </div>
    )
}

export default FindPeople
