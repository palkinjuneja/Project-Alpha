import React from "react";
import styles from "../stylesheet/SearchCard.module.css";
import { useParams } from "react-router";

const SearchCard = ({userName,userId,userRole}) => {

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
        src="https://static.overlay-tech.com/assets/e061475e-12bc-4c6d-bfd3-99bd55867af2.png"
      />
      <p className={styles.userName}>{userName}</p>
      <p className={styles.backendEndDev}>
        {userRole}
      </p>
    </div>
  );
};

export default SearchCard;