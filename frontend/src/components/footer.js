import React from 'react'
import styles from "../styles/footer.module.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';
import InviteButton from './InviteButton'
function FooterModule() {
    return (
        <div className={styles.footer}>
          <div className={styles.upperDivision}>
            <div className={styles.logo_Union}>
              <span className={styles.u}>o</span>
              <span className={styles.unionTwo}>Union</span>
            </div>
            <div className={styles.linkedIncon}><a className={styles.linkedin}target="_blank" href= "www.linkedin.com"><LinkedInIcon/></a></div>
            <InviteButton/>
          </div>
          <p className={styles.collaboartionMadeEasy}>
            Collaboartion made easy!
          </p>
          <div className={styles.line4} />
          <div className={styles.flexWrapperSeven}>
            <CopyrightIcon/>
            <p className={styles.allRightsAreRegistered}>
              All rights are registered
            </p>
          </div>
        </div>
      )
}

export default FooterModule