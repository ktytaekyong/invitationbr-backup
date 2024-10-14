/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/Intro.module.scss";
/* Image */
import introRing from "../../img/intro/intro_theme_1_ring.png";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const Intro = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  return (
    <div className={`${styles.intro} ${styles.style_theme_1}`}>
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
        <div className={styles.intro__photo}>
          <img src="" alt="" />
        </div>
        <div className={styles.intro__title}>
          <div className={styles.intro__title_couple}>
            <h2 className={styles.groom}>{basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname}</h2>
            <p className={styles.divide}></p>
            <h2 className={styles.bride}>{basicInfoList.brideInfo.lastname + basicInfoList.brideInfo.firstname}</h2>
          </div>
          <div className={styles.intro__title_date}>
            <h3 className={styles.date}>{`${basicInfoList.dateInfo.date} 오전 ${basicInfoList.timeInfo.hour}:${basicInfoList.timeInfo.min}`}</h3>
          </div>
          <div className={styles.intro__title_place}>
            <h3 className={styles.groom}>{`${basicInfoList.placeInfo.placeName} ${basicInfoList.placeInfo.placeDetail}`}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;