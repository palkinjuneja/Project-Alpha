import React from "react";
import styles from "../styles/SearchCard.module.css";
import { useParams } from "react-router";

const SearchCard = ({userPhoto,userName,userId,userRole}) => {

  const fetchSingleUser=(event) => {
    console.log("Button Clicked"+userId)
    const url = '/User/'+userId;
    window.location.href= url;

  }

  return (
    <div className={styles.searchCard} onClick={fetchSingleUser}>
      <img
        alt=""
        className={styles.ellipse43}
        src={userPhoto}
      />
      <p className={styles.userName}>{userName}</p>
      <p className={styles.backendEndDev}>
        {userRole}
      </p>
    </div>
  );
};

export default SearchCard;