/* Import */
import { useState, useEffect } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/Intro.module.scss";
/* Image */
import introRing from "../../img/intro/intro_theme_1_ring.png";

const Intro = () => {
  // useEffect(() => {
  //   setIsActive(0);
  // }, []);
  
  return (
    <div 
      className={`${styles.intro} ${styles.style_theme_1}`}
    >
      <div className={styles.intro__wrap}>
        <div className={styles.intro__headline}>
          <div className={styles.img__wrap}>
            <img src={introRing} alt="" />
          </div>
          <div className={styles.txt__wrap}>
            <span>Wedding</span>
            <p>Invitation</p>
          </div>
        </div>
        <div className={styles.intro__photo}></div>
        <div className={styles.intro__title}></div>
      </div>
    </div>
  )
}

export default Intro;