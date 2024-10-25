/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/common/DateSettingImage.module.scss";
/* Image */
import CalendarImg from "../../img/calendar/calendar_img.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const imageList = [
  {
    src: "",
    id: "calendarType1"
  },
  {
    src: "",
    id: "calendarType2"
  },
  {
    src: "",
    id: "calendarType3"
  }
]

const DateSettingImage = () => {
  const { selectOptionList, setSelectOptionList } = useContext(SetContext);
  const calendarChangeHandler = (e) => {
    const { name } = e.currentTarget.dataset;
    const { id } = e.currentTarget;
    setSelectOptionList((prev) => ({
      ...prev,
      [name]: id
    }))
    console.log(selectOptionList);
  }
  return (
    <ul className={styles.calendar__img_list}>
      {imageList.map((item, idx) => (
        <li 
          key={`url(${item.src}${idx}`} 
          className={`${styles.calendar__img_item} ${item.id === selectOptionList.dateCalendarType ? styles["active"] : ""}`} 
          style={{backgroundImage: `url(${item.src})`}}
          id={item.id}
          data-name="dateCalendarType"
          onClick={(e) => calendarChangeHandler(e)}
        >
        </li>
      ))}
    </ul>
  )
}

export default DateSettingImage;