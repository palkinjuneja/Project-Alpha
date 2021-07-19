import React from 'react'
import styles from '../stylesheet/NavBar.module.css'

function NavBar({middleText}) {
    return (
        <div>
            <div className={styles.navBarRow}>
                <div className={styles.navBarColumn_Left}>
                    <span className={styles.navBarColumn_Left_U}>o</span><span className={styles.navBarColumn_Left_Union}>union</span>
                </div>
                <div className={styles.navBarColumn_Mid}>{middleText? middleText : ""}</div>
                <div className={styles.navBarColumn_Right}>
                    <a className ={styles.navBarProject} href={"/user/"+"60f2bd89c6897f3604ef596d"}>My Projects</a>
			        <a className ={styles.navBarUser} href="#myProjects"></a>
                </div>
		    </div>
        </div>
    )
}

export default NavBar


