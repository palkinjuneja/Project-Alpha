import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import styles from '../styles/UserView.module.css';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import NavHeader from './navHeader'
import FooterModule from './footer'

function UserView() {
    const {userId} = useParams();
    const [userData,setUserData]= useState({});
    const [userSkill,setuserSkill]=useState("");
   
    const data = JSON.parse(localStorage.getItem('userDetails'))

    useEffect(()=>{
        
        const getRequest = process.env.REACT_APP_USER_ID+userId;
        axios.get(getRequest).then(res=>{
            setUserData(res.data);
            console.log(res.data.skill);
            setuserSkill(res.data.skill);
        }).catch(err=>{
            console.log("error:",{err});
            return (
            <div>{err}</div>
            )
        })
    },[])
    return (
        <div className={styles.userView__Page}>
           <NavHeader middleText="User Profile"/>
           <div className={styles.userView__Banner}>
           </div>
           {/* <div className={styles.userView__mainDiv}> */}
           <div class="container " style={{marginTop:'-1%' ,minHeight:'70vh'} }>
           <div class="row justify-content-center">
               {/* <div className={styles.userView__basicInfo}> */}
               <div class="col-sm-12 col-md-12 col-lg-3 ">
                   <div className={styles.userView__basicInfoImage}>
                   <img alt="" className={styles.userView__imageRectabgle} src={userData.photo}/>
                   </div>
                   <div className={styles.userView__basicInfoText}>
                   <div className={styles.userView__basicInfoText__name}>{userData.name}</div>
                   <div className={styles.userView___basicInfoText__role}>{userData.role}</div>
                   <div className={styles.userView___basicInfoText__email}><p>{userData.email}</p></div>
                   <div className ={styles.userView__socialLinks}>
                       <div className={styles.userView__Link}>
                          <a target="_blank" href= {userData.linkedin}><LinkedInIcon/></a>
                       </div>
                       <div className={styles.userView__Link}>{userData.github ? <a target="_blank" href= {userData.github}><GitHubIcon/></a>:<p></p>}</div>
                       <div className={styles.userView__Link}>{userData.portfolio ? <a target="_blank" href= {userData.portfolio}><LinkIcon/></a>:<p></p>} </div>
                   </div>
                   </div>
                </div>
               {/* <div className={styles.userView__experience}> */}
               <div class="col-sm-12 col-md-12 col-lg-7">
                   <p className={styles.userView__experience__headings}>Experience</p>
                   <p className={styles.userView__experience__text}>{userData.overview}</p>
                   <p className={styles.userView__experience__headings}>Skills</p>
                   {userSkill ? <div>{userSkill.map((eachSkill)=>(<p className={styles.userView__experience__text}>{userSkill.indexOf(eachSkill)+1}.{eachSkill}</p>))}
                   </div>:<p></p>}
               </div>
               <div class="col-sm-12 col-md-12 col-lg-2 " style={{marginTop:"2%"}}>
               {/* <div className={styles.userView__availability}> */}
                   <EventAvailableIcon/> <p className={styles.userView__availability__text}> &nbsp;&nbsp;{userData.time} Hrs/Week</p></div>
           </div>
           </div>
           <FooterModule/>
        </div>
    )
}

export default UserView
