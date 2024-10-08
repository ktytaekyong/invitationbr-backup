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
      <p>Intro</p>
    </div>
  )
}

export default Intro;