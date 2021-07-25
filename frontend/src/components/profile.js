import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {useState} from 'react';

import styles from '../styles/profile.module.css';

import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import NavBar from './NavBar';
import FooterModule from './footer'
import { UserContext } from '../userContext';

function UserView() {
    const {userId} = useParams();
    const [userData,setUserData]= useState({});
    const [userSkill,setuserSkill]=useState("");
    const [user,setUser] = useContext(UserContext)
    const data=JSON.parse(localStorage.getItem('userDetails'))

    const onEditHandler=()=>{
        window.location="http://localhost:3000/edit";
    }

    useEffect(()=>{
      
    },[])
    return (
        <div className={styles.userView__Page}>
           <NavBar middleText="User Profile"/>
           <div className={styles.userView__Banner}>
               <button className={styles.editProfile} onClick={onEditHandler}>
                   Edit Profile
               </button>
           </div>
           <div className={styles.userView__mainDiv}>
               <div className={styles.userView__basicInfo}>
                   <div className={styles.userView__basicInfoImage}>
                   <img alt="" className={styles.userView__imageRectabgle} src={data.photo}/>
                   </div>
                   <div className={styles.userView__basicInfoText}>
                   <div className={styles.userView__basicInfoText__name}>Name: {data.name}</div>
                   <div className={styles.userView___basicInfoText__role}>Role: {data.role}</div>
                   <div className={styles.userView___basicInfoText__email}><p>email : {data.email}</p></div>
                   <div className ={styles.userView__socialLinks}>
                       <div className={styles.userView__Link}>
                          <a target="_blank" href= {userData.linkedin}><LinkedInIcon/></a>
                       </div>
                       <div className={styles.userView__Link}>{userData.github ? <a target="_blank" href= {userData.github}><GitHubIcon/></a>:<p></p>}</div>
                       <div className={styles.userView__Link}>{userData.portfolio ? <a target="_blank" href= {userData.portfolio}><LinkIcon/></a>:<p></p>} </div>
                   </div>
                   </div>
                </div>
               <div className={styles.userView__experience}>
                   <p className={styles.userView__experience__headings}>Experience :{data.overview}</p>
                   <p className={styles.userView__experience__text}>{userData.overview}</p>
                   <p className={styles.userView__experience__headings}></p>
                   {userSkill ? <div>{userSkill.map((eachSkill)=>(<p className={styles.userView__experience__text}>{userSkill.indexOf(eachSkill)+1}.   {eachSkill}</p>))}
                   </div>:<p></p>}
               </div>
               <div className={styles.userView__availability}><EventAvailableIcon/> <p className={styles.userView__availability__text}> &nbsp;&nbsp;{userData.availability} Hrs per week</p></div>
           </div>
           <FooterModule/>
        </div>
    )
}

export default UserView