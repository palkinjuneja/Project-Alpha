import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import logo from "../images/logo.jpeg";

// import styles from "./figma.css";
import '../styles/figmaLogin.css'
import {LinkedInLoginButton} from "react-social-login-buttons";

const SigninOnboard = () => {
  return (
    <div className='conatiner-fluid row mainwrapper'>
    <div className='col-md-6 col-lg-6 col-sm-12 rightdiv'>
      {/* <div className='Xgroup1'> */}
      <div className='logoimg'>
     <img src={logo} ></img><span className='Xunion'>Union</span>
        {/* <p className='XuTwo'>U</p> */}
      </div>
      {/* <div className='XflexWrapperTwo'>  */}
      <div className=''> 
        
        <p
          className='XworkOnTheRealWorldProjectsWithEas row'
        >
          One stop solution for finding ideas & people for all your side-projects! 
        </p>
        
        <div className='lncontainer'>
        <div className="lnimage">
        <LinkedInLoginButton onClick={e=>window.location.href=process.env.REACT_APP_BACKEND+"/auth/linkedin"}  />
        </div>
        </div>
        <p className='XalreadyHaveAnAccount bottomright'>
          Start Building!!!!
        </p>
        
      </div>
    </div>
    <div className='col-md-6 col-lg-6 col-sm-12 leftdiv'>
      <div className=''>
      {/* <div className='XrelativeWrapperOne'> */}
        {/* <div className='XfoundationsocialLinkedin' /> */}
        {/* <div className='XflexWrapperOne'> */}
        <div className='XflexWrapperOne'>
          {/* <p className='XwhyLinkedIn'> */}
          <p className=''>
            {/* Why Linked in? */}
          </p>
          <p className='XcollaborationOnProjectsMadeEasyWith'>
          
            Find Projects.
          </p>
          <p className='XcollaborationOnProjectsMadeEasyWith'>
          
            Find People.
          </p>
          <p className='XcollaborationOnProjectsMadeEasyWith'>
          
            Build!
          </p>
         <div className="extra"></div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SigninOnboard;