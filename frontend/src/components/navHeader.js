import React from 'react'
import '../styles/navHeader.css'

function NavHeader({middleText}) {
    const currentUserData = JSON.parse(localStorage.getItem('userDetails'));
    const logout=()=>{
        localStorage.removeItem('userDetails')
        window.location='/'
    }
    return (
        <div>
        <div className="row nav-main">
            <div className="col-md-3 col-sm-12 col-lg-3 logo" onClick={() =>{window.location.href="/project"}}>
                <span style={{fontSize:37, color:"pink"}}>O</span><span style={{fontSize:27, color:"white"}}>union</span>
            </div>
            <div className="col-md-3 col-sm-12 col-lg-3  middle-text">{middleText}</div>
            <div className="col-md-4 col-sm-10 options-bar">
               <a href="/project" className="col-md-3 col-sm-12">Home</a> 
               <a href={"/project/"+currentUserData.userId} className="col-md-3 col-sm-12">My Projects</a> 
               <a href="/Invites" className="col-md-3 col-sm-12">Requests/Invites</a> 
               <a onClick={logout} className="col-md-3 col-sm-12">Logout</a>
            </div>
            <div className="col-md-2 col-sm-2 col-lg-2 profile-pic" onClick={() =>{window.location.href="/profile"}}><img src={currentUserData.photo}></img></div> 
        </div>
        </div>
    )
}

export default NavHeader
