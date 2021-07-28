import React from "react";
import { Switch, Route, Link } from "react-router-dom";

// import styles from "./figma.css";
import '../styles/figmaLogin.css'

const SigninOnboard = () => {
  return (
    <div className='XsigninOnboard'>
      <div className='Xgroup1'>
        <p className='Xu'>O</p>
        {/* <p className='XuTwo'>U</p> */}
      </div>
      <div className='XflexWrapperTwo'>
        <p className='Xunion'>Union</p>
        <p
          className='XworkOnTheRealWorldProjectsWithEas'
        >
          Work on the real world projects with easy
          collaboration on different teams.
        </p>
        <p className='XsignInWith'>Sign-In with </p>
        <a href="http://localhost:9000/auth/linkedin">
        <img
          alt=""
          className='Xvector'
          src="https://static.overlay-tech.com/assets/dc8cedd2-4afa-4dbf-b32c-80f1c7aa3ee0.svg"
        />
        </a>
        <p className='XalreadyHaveAnAccount'>
          Start Building!!!!
        </p>
      </div>
      <div className='XrelativeWrapperOne'>
        {/* <div className='XfoundationsocialLinkedin' /> */}
        <div className='XflexWrapperOne'>
          <p className='XwhyLinkedIn'>
            {/* Why Linked in? */}
          </p>
          <p
            className='XcollaborationOnProjectsMadeEasyWith'>
            Collaboration on projects made easy with Union.
          </p>
          <p
            className='XfindThePassionateTeamToKickStartY
            '
          >
            Find the passionate team to kick-start your
            ideas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninOnboard;