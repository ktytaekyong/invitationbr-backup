/* Import */
import { useState, useEffect } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/Intro.module.css";

const Intro = () => {
  // useEffect(() => {
  //   setIsActive(0);
  // }, []);
  
  return (
    <div 
      className={`${styles.invite__intro_wrap} ${styles.intro__style_theme_1}`}
    >
      <div className="invite__intro">
        <p className="intro__headline">wedding invitation</p>
        <div className="intro__photo"></div>
        <div className="intro__title"></div>
      </div>
    </div>
  )
}

export default Intro;