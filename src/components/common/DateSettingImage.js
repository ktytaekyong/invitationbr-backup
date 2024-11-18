/* Import */
import { useContext } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/common/DateSettingImage.module.scss";
/* Image */
import CalendarImg1 from "../../img/calendar/calendar_img1.jpg";
import CalendarImg2 from "../../img/calendar/calendar_img2.jpg";
import CalendarImg3 from "../../img/calendar/calendar_img3.jpg";
import CalendarImg4 from "../../img/calendar/calendar_img4.jpg";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const imageList = [
  {
    src: CalendarImg1,
    id: "calendarType1"
  },
  {
    src: CalendarImg2,
    id: "calendarType2"
  },
  {
    src: CalendarImg3,
    id: "calendarType3"
  },
  {
    src: CalendarImg4,
    id: "calendarType4"
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