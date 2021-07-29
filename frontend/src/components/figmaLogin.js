import React from "react";
import { Switch, Route, Link } from "react-router-dom";

// import styles from "./figma.css";
import '../styles/figmaLogin.css'

const SigninOnboard = () => {
  return (
    <div className='conatiner-fluid row mainwrapper'>
    <div className='col-md-6 col-lg-6 col-sm-12 rightdiv'>
      {/* <div className='Xgroup1'> */}
      <div className=''>
        <span className='Xu'>O</span><span className='Xunion'>Union</span>
        {/* <p className='XuTwo'>U</p> */}
      </div>
      {/* <div className='XflexWrapperTwo'>  */}
      <div className=''> 
        
        <p
          className='XworkOnTheRealWorldProjectsWithEas row'
        >
          Work on the real world projects with easy
          collaboration on different teams.
        </p>
        <p className='XsignInWith'>Sign-In with </p>
        <a href={process.env.REACT_APP_BACKEND+"/auth/linkedin"}>
        <img
          alt=""
          className='Xvector lnimage'
          src="https://static.overlay-tech.com/assets/dc8cedd2-4afa-4dbf-b32c-80f1c7aa3ee0.svg"
        />
        </a>
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
          
            Collaboration on projects made easy with Union.
          </p>
          <p className='XfindThePassionateTeamToKickStartY' > 
    
            Find an exciting project and a passionate team  to kick-start your
            ideas.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SigninOnboard;