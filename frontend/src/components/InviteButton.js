import React from 'react'
import {useState,useEffect} from 'react'
import '../styles/InviteButton.css'
function InviteButton() {
    const [userId,setUserId]=useState(null);
    useEffect(()=>{
        setUserId()
    },[])
    return (
        <div>
            <button id="invite-button" onclick={()=>{window.location.href="/user/"+userId}}>Invite</button>
        </div>
    )
}

export default InviteButton