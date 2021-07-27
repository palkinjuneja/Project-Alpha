import React from 'react'
import {useState,useEffect} from 'react'
import '../styles/InviteButton.css'
function InviteButton() {

    return (
        <div>
            <button id="invite-button" onClick={()=>{window.location.href="http://localhost:3000/Invites"}}>Invites</button>
        </div>
    )
}

export default InviteButton