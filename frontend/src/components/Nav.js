import React from 'react'
import '../styles/app.css'
import styles from '../styles/NavBar.module.css'

function Nav({middleText}) {
    const data = JSON.parse(localStorage.getItem('userDetails'))
    return (
        <div >
             <div className="topnav ">
          <span style={{paddingLeft: 60}}>
            <span style={{fontSize:37, color:"pink"}}>O</span><span style={{fontSize:27, color:"white"}}>union</span>
          </span>
        
            <div className="topnav-right" style={{paddingRight: 63}}>
            <a href={"/project/"} >Home</a>
            <a href={"/user/"+data.userId}>My Projects</a>
            <a style={{height:'8%' , width:'8%',padding:'0px',marginTop:'1%',marginBottom:'1%',right:'0'}}href={"/profile"}>
                <img style={{height:'100%' , width:'100%'}} src={data.photo}/>
            </a>
            </div>
  </div>
        </div>
    )
}

export default Nav
