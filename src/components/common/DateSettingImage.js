/* Import */
import { useState, useEffect } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/common/DateSettingImage.module.scss";
/* Image */
import CalendarImg from "../../img/calendar/calendar_img.png";

const imageList = [
  {
    src: "",
  },
  {
    src: "",
  },
  {
    src: "",
  }
]

const DateSettingImage = () => {
  const [isActive, setIsActive] = useState(0);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }
  useEffect(() => {
    setIsActive(0);
  }, []);
  return (
    <ul className={styles.calendar__img_list}>
      {imageList.map((item, idx) => (
        <li 
          className={`${styles.calendar__img_item} ${isActive === idx ? styles["active"] : ""}`} key={`url(${item.src}${idx}`} 
          style={{backgroundImage: `url(${item.src})`}}
          onClick={() => setActiveHandler(idx)}
        >
        </li>
      ))}
    </ul>
  )
}

export default DateSettingImage;