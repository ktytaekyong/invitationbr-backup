/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import BasicCalendarTheme1 from "./BasicCalendarTheme1.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Date.module.scss";
/* Image */
// import introRing from "../../img/intro/intro_theme_1_ring.png";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const Date = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const weekArray = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <div className={`${styles.date} ${styles.style_theme_1}`}>
      <div className={styles.date__wrap}>
        <div className={styles.date__headline}>
          <p>예식 일시</p>
          <div className={styles.divide}></div>
          <p>D-day</p>
        </div>
        <div className={styles.date__content}>
          <div className={styles.date}>
            <p>{basicInfoList.dateInfo.date}</p>
            <p>토요일 오후 {basicInfoList.timeInfo.hour}시 {basicInfoList.timeInfo.min}분</p>
          </div>
          <div className={styles.calandar}>
            <BasicCalendarTheme1></BasicCalendarTheme1>
          </div>
          <div className={styles.d_day}>
            <p>{basicInfoList.groomInfo.firstname}<span>♥</span>{basicInfoList.brideInfo.firstname}의 결혼식이 <span>98</span>일 남았습니다.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Date;