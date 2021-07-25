
import React from 'react'
import styles from '../styles/NavBar.module.css'
// import { useCurrentUser } from "./CurrentUserContext"

function NavBar({middleText}) {
    
    const data = JSON.parse(localStorage.getItem('userDetails'))

    return (
        <div>
            <div className={styles.navBarRow}>
                <div className={styles.navBarColumn_Left}>
                    <span className={styles.navBarColumn_Left_U}>o</span><span className={styles.navBarColumn_Left_Union}>union</span>
                </div>
                <div className={styles.navBarColumn_Mid}>{middleText? middleText : ""}</div>
                <div className={styles.navBarColumn_Right}>
                    <a className ={styles.navBarProject} href={"/user/"}>MyProjects</a>
			        <a className ={styles.navBarUser} href={"/profile"}>
                        <img className={styles.navBarImage} src={data.photo}/>
                    </a>
                </div>
		    </div>
        </div>
    )
}

export default NavBar