/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
// import BasicCalendarTheme1 from "./BasicCalendarTheme1.js";
import BasicCalendarTheme1 from "./BasicCalendarTheme1.js";
import BasicCalendarTheme2 from "./BasicCalendarTheme2.js";
import BasicCalendarTheme3 from "./BasicCalendarTheme3.js";
import BasicCalendarTheme4 from "./BasicCalendarTheme4.js";
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Calendar.module.scss";
/* Image */
import calendarTheme1 from "../../img/calendar/calandar_theme_1_letter.png";
import calendarTheme2 from "../../img/calendar/calandar_theme_2_flower.png";
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
  const monthRenderer = (date) => {
    const [year, month, day] = date.split('-');
    const monthEng = (month) => {
      switch(month) {
        case "01":
          return "January";
        case "02":
          return "February";
        case "03":
          return "March";
        case "04":
          return "April";
        case "05":
          return "May";
        case "06":
          return "June";
        case "07":
          return "July";
        case "08":
          return "August";
        case "09":
          return "September";
        case "10":
          return "October";
        case "11":
          return "November";
        case "12":
          return "December";
      }
    }
    return monthEng(month);
  }
  const renderCalandarHandler = (id) => {
    switch(id) {
      case "calendarType1":
        return (
          <div className={styles.date__wrap_add}>
            <div className={styles.date__wrap}>
              <img src={calendarTheme1} alt="" />
              <div className={styles.date__content}>
                {selectOptionList.dateDdayOption ?
                  <div className={styles.d_day}>
                    <p>
                      {basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.firstname : "보람"}
                      , {basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.firstname : "신우"}
                      의 결혼식이<br />
                      <span>{dayCalculator(basicInfoList.dateInfo.date)}</span>일 남았습니다.
                    </p>
                    <p className={styles.divide}></p>
                  </div>
                  : null
                }
                <p className={styles.month}>
                  {monthRenderer(basicInfoList.dateInfo.date)}
                </p>
                <div className={styles.calendar}>
                  <BasicCalendarTheme1 />
                </div>
              </div>
            </div>
            <div className={styles.date}>
              <p>{handleDateChange(basicInfoList.dateInfo.date)}</p>
              <p>{handleDaysChange(basicInfoList.dateInfo.date) + "요일"} {basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} {basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 {basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}</p>
            </div>
          </div>
        );
      case "calendarType2":
        return (
          <div className={styles.date__wrap}>
            <img src={calendarTheme2} alt="" />
            <HeadLine title="예식 일시" content="D-day" />
            <div className={styles.date__content}>
              {selectOptionList.dateDdayOption ?
                <div className={styles.d_day}>
                  <p>
                    {basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.firstname : "보람"}
                    , {basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.firstname : "신우"}
                    의 결혼식이 <span>{dayCalculator(basicInfoList.dateInfo.date)}</span>일 남았습니다.</p>
                </div>
                : null
              }
              <div className={styles.calendar}>
                <BasicCalendarTheme2 />
              </div>
              <div className={styles.date}>
                <p>{handleDateChange(basicInfoList.dateInfo.date)}</p>
                <p>{handleDaysChange(basicInfoList.dateInfo.date) + "요일"} {basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} {basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 {basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}</p>
              </div>
            </div>
          </div>
        );
      case "calendarType3":
        return (
          <div className={styles.date__wrap}>
            <HeadLine title="예식 일시" content="D-day"></HeadLine>
            <div className={styles.date__content}>
              <div className={styles.date}>
                <p>{handleDateChange(basicInfoList.dateInfo.date)}</p>
                <p>{handleDaysChange(basicInfoList.dateInfo.date) + "요일"} {basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} {basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 {basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}</p>
              </div>
              <div className={styles.calendar}>
                <BasicCalendarTheme3 />
              </div>
              {selectOptionList.dateDdayOption ?
                <div className={styles.d_day}>
                  <p>
                    {basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.firstname : "보람"}
                    {/* <span>♥</span> */}, {basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.firstname : "신우"}
                    의 결혼식이<br /><span>{dayCalculator(basicInfoList.dateInfo.date)}</span>일 남았습니다.</p>
                </div>
                : null
              }
            </div>
          </div>
        );
      case "calendarType4":
        return (
          <div className={styles.date__wrap}>
            <HeadLine title="예식 일시" content="D-day"></HeadLine>
            <div className={styles.date__content}>
              <div className={styles.date}>
                <p>{handleDateChange(basicInfoList.dateInfo.date)}</p>
                <p>{handleDaysChange(basicInfoList.dateInfo.date) + "요일"} {basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} {basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 {basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}</p>
              </div>
              <div className={styles.calendar}>
                <BasicCalendarTheme4 />
              </div>
              {selectOptionList.dateDdayOption ?
                <div className={styles.d_day}>
                  <p>
                    {basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.firstname : "보람"}
                    {/* <span>♥</span> */}, {basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.firstname : "신우"}
                    의 결혼식이 <span>{dayCalculator(basicInfoList.dateInfo.date)}</span>일 남았습니다.</p>
                </div>
                : null
              }
            </div>
          </div>
        );
      default:
        return null;
    }
  }
  // useEffect(() => {
  //   monthRenderer(basicInfoList.dateInfo.date);
  // }, [basicInfoList.dateInfo.date])
  return (
    <div 
    id="Date" 
    key={selectOptionList.dateCalendarType}
    className={`${styles.date} ${styles[selectOptionList.dateCalendarType]}`}
    >
      {renderCalandarHandler(selectOptionList.dateCalendarType)}
    </div>
  )
}

export default Calendar;