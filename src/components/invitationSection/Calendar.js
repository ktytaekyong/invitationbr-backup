/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import BasicCalendarTheme1 from "./BasicCalendarTheme1.js";
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Calendar.module.scss";
/* Image */
// import introRing from "../../img/intro/intro_theme_1_ring.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { InfoContext } from "../../store/option-info-context.js";

const Calendar = () => {
  const { selectOptionList, setSelectOptionList } = useContext(SetContext);
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const handleDaysChange = (date) => {
    const dateObj = new Date(date);
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']; 
    const dayOfWeek = daysOfWeek[dateObj.getDay()]; 
    return dayOfWeek;
  }
  const handleDateChange = (date) => {
    const selectedDate = date;
    const [year, month, day] = selectedDate.split('-');
    const formattedDate = `${year}년 ${month}월 ${day}일`;
    return formattedDate;
  };
  const dayCalculator = (date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    const diffTime = selectedDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  return (
    <div className={`${styles.date} ${styles.style_theme_1}`}>
      <div className={styles.date__wrap}>
        <HeadLine title="예식 일시" content="D-day"></HeadLine>
        <div className={styles.date__content}>
          <div className={styles.date}>
            <p>{handleDateChange(basicInfoList.dateInfo.date)}</p>
            <p>{handleDaysChange(basicInfoList.dateInfo.date) + "요일"} {basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} {basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 {basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}</p>
          </div>
          <div className={styles.calendar}>
            <BasicCalendarTheme1 />
          </div>
          {selectOptionList.dateDdayOption ?
            <div className={styles.d_day}>
              <p>{basicInfoList.groomInfo.firstname}<span>♥</span>{basicInfoList.brideInfo.firstname}의 결혼식이 <span>{dayCalculator(basicInfoList.dateInfo.date)}</span>일 남았습니다.</p>
            </div>
            : null
          }
        </div>
      </div>
    </div>
  )
}

export default Calendar;