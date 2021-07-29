import React from "react";
import styles from "../styles/RequestCard.module.css";
import InviteAction from "./InviteAction";
import InviteAccepted from "./InviteAccepted";
import InviteDeclined from "./InviteDeclined";

const RequestCard = ({data}) => {
  // const RequestCard = ({ projName, ownerName, role, profileImg }) => {

  const [open, setOpen] = React.useState(false);
  

  const handleOpen = () => {
    setOpen(true);
  };

  const getModal=()=>{
   if(data.collab.status_of_request=="pending"){
     if(open){
      return(
        <InviteAction modalAction={open} data={data}/> 
       )
     }
    
   

   }else if(data.collab.status_of_request=="accepted"){
     console.log("Entering")
    if(open){
      return(
        <InviteAccepted modalAction={open} data={data}/>
      )
      
    }

   }else if(data.collab.status_of_request=="rejected"){
     if (open){
       return(
        <InviteDeclined modalAction={open} data={data}/> 
       )
      
     }
    

   }
}
  return (
    <div className={styles.requestCard} onClick={handleOpen} >

      <p className={styles.projectECommerce}>
        Project: {data.project.project_name}
      </p>
      <div className={styles.group192}>
        <div className={styles.flexWrapperOne}>
          <img
            alt=""
            className={styles.ellipse43}
            src={data.user.photo}
          />
          <div className={styles.flexWrapperThree}>
            <p className={styles.rajeshK}>{data.project.owner_name}</p>
            <p className={styles.backendEndDev}>
              {data.user.role}
            </p>
          </div>
        </div>
        <div className={styles.line24} />
        <div className={styles.flexWrapperTwo}>
          <p className={styles.viewProfile}>View More</p>
          <div>

            {
              getModal()
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;