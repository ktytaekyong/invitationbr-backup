/* Import */
import { useContext } from "react";
import { DayConverter, DateConverter, DDayCalculator, DayConverterENG } from "../../utils/helpers.js";
// Component
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
import { RefContext } from "../../store/option-ref-context.js";

const Calendar = () => {
  const { selectOptionList } = useContext(SetContext);
  const { basicInfoList } = useContext(InfoContext);
  const { dateRef } = useContext(RefContext);
 
  const renderCalandarHandler = (id) => {
    switch(id) {
      case "calendarType1":
        return (
          <div className={styles.date__wrap} style={{ backgroundColor: "var(--theme-select-color)" }}>
            <HeadLine title="예식 일시" content="D-day"></HeadLine>
            <div className={styles.date__content}>
              <div className={styles.date}>
                <p>{DateConverter(basicInfoList.dateInfo.date)}</p>
                <p>{DayConverter(basicInfoList.dateInfo.date) + "요일"} {basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} {basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 {basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}</p>
              </div>
              <div className={styles.calendar}>
                <BasicCalendarTheme4 />
              </div>
              {selectOptionList.dateDdayOption ?
                <div className={styles.d_day}>
                  <p>
                    {basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.firstname : "보람"}
                    {/* <span>♥</span> */}, {basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.firstname : "신우"}
                    의 결혼식이 <span>{DDayCalculator(basicInfoList.dateInfo.date)}</span>일 남았습니다.</p>
                </div>
                : null
              }
            </div>
          </div>
        );
      case "calendarType2":
        return (
          <div className={styles.date__wrap} style={{ backgroundColor: "var(--theme-select-color)" }}>
            <img src={calendarTheme2} alt="" />
            <HeadLine title="예식 일시" content="D-day" />
            <div className={styles.date__content}>
              {selectOptionList.dateDdayOption ?
                <div className={styles.d_day}>
                  <p>
                    {basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.firstname : "보람"}
                    , {basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.firstname : "신우"}
                    의 결혼식이 <span>{DDayCalculator(basicInfoList.dateInfo.date)}</span>일 남았습니다.</p>
                </div>
                : null
              }
              <div className={styles.calendar}>
                <BasicCalendarTheme2 />
              </div>
              <div className={styles.date}>
                <p>{DateConverter(basicInfoList.dateInfo.date)}</p>
                <p>{DayConverter(basicInfoList.dateInfo.date) + "요일"} {basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} {basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 {basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}</p>
              </div>
            </div>
          </div>
        );
      case "calendarType3":
        return (
          <div className={styles.date__wrap_add}>
            <div className={styles.date__wrap} style={{ backgroundColor: "var(--theme-select-color)" }}>
              <img src={calendarTheme1} alt="" />
              <div className={styles.date__content}>
                {selectOptionList.dateDdayOption ?
                  <div className={styles.d_day}>
                    <p>
                      {basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.firstname : "보람"}
                      , {basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.firstname : "신우"}
                      의 결혼식이<br />
                      <span>{DDayCalculator(basicInfoList.dateInfo.date)}</span>일 남았습니다.
                    </p>
                    <p className={styles.divide}></p>
                  </div>
                  : null
                }
                <p className={styles.month}>
                  {DayConverterENG(basicInfoList.dateInfo.date)}
                </p>
                <div className={styles.calendar}>
                  <BasicCalendarTheme1 />
                </div>
              </div>
            </div>
            <div className={styles.date}>
              <p>{DateConverter(basicInfoList.dateInfo.date)}</p>
              <p>{DayConverter(basicInfoList.dateInfo.date) + "요일"} {basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} {basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 {basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}</p>
            </div>
          </div>
        );
      case "calendarType4":
        return (
          <div className={styles.date__wrap}>
            <HeadLine title="예식 일시" content="D-day"></HeadLine>
            <div className={styles.date__content}>
              <div className={styles.date}>
                <p>{DateConverter(basicInfoList.dateInfo.date)}</p>
                <p>{DayConverter(basicInfoList.dateInfo.date) + "요일"} {basicInfoList.timeInfo.hour > 12 ? "오후" : "오전"} {basicInfoList.timeInfo.hour > 12 ? basicInfoList.timeInfo.hour - 12 : basicInfoList.timeInfo.hour}시 {basicInfoList.timeInfo.min !== "0" ? basicInfoList.timeInfo.min + "분" : ""}</p>
              </div>
              <div className={styles.calendar}>
                <BasicCalendarTheme3 />
              </div>
              {selectOptionList.dateDdayOption ?
                <div className={styles.d_day}>
                  <p>
                    {basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.firstname : "보람"}
                    {/* <span>♥</span> */}, {basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.firstname : "신우"}
                    의 결혼식이<br /><span>{DDayCalculator(basicInfoList.dateInfo.date)}</span>일 남았습니다.</p>
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
  return (
    <div 
      ref={dateRef}
      id="Date" 
      key={selectOptionList.dateCalendarType}
      className={`${styles.date} ${styles[selectOptionList.dateCalendarType]}`}
    >
      {renderCalandarHandler(selectOptionList.dateCalendarType)}
    </div>
  )
}

export default Calendar;