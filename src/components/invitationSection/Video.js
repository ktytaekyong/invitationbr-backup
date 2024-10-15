/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */

/* CSS Module */
import styles from "../../css/module/invitationSection/Video.module.scss";
/* Image */
import iconVideoPlay from "../../img/icon/icon_video_play.png";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const Video = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  return (
    <div className={`${styles.video} ${styles.style_theme_1}`}>
      <div className={styles.video__wrap}>
        <div className={styles.video__headline}>
          <p>동영상</p>
          <div className={styles.divide}></div>
          <p>movie</p>
        </div>
          <div className={styles.video__content}>
            <div className={styles.video__play}>
              <img src={iconVideoPlay} alt="" />
            </div>
            <video src=""></video>
          </div>
      </div>
    </div>
  )
}

export default Video;