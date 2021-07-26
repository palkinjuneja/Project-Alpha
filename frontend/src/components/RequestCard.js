import React from "react";
import styles from "../styles/RequestCard.module.css";
import InviteAction from "./InviteAction";

const RequestCard = ({projName, ownerName, role, profileImg}) => {
  const [open, setOpen] = React.useState(false);
  const skill =["Java","Python"]
    
    const handleOpen = () => {
        setOpen(true);
      };
   
  return (
    <div className={styles.requestCard}>
      <p className={styles.projectECommerce}>
        Project: {projName}
      </p>
      <div className={styles.group192}>
        <div className={styles.flexWrapperOne}> 
          <img
            alt=""
            className={styles.ellipse43}
            src={profileImg}
          />
          <div className={styles.flexWrapperThree}>
            <p className={styles.rajeshK}>{ownerName}</p>
            <p className={styles.backendEndDev}>
              {role}
            </p>
          </div>
        </div>
        <div className={styles.line24} />
        <div className={styles.flexWrapperTwo}>
          <p className={styles.viewProfile}>View Profile</p>
          <div
          onClick={handleOpen}>
            {open ? <InviteAction modalAction={open} userName="1" userRole="Software Developer" 
                skills={skill} userImage="Image" projectId="1234" collaborationId="1234" userId= "3345" ownerName="currentUser"ownerId="currentUserId" userLinkedIn="http://linkedin.com" userEmail="palkinjuneja1234@gmail.com"/>: null}
                
          <img
            alt=""
            className={styles.vector}
            src="https://static.overlay-tech.com/assets/9a164b06-51b6-4939-932e-dd3a0e815c09.svg"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;