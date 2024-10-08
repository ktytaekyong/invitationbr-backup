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
  return (
    <ul className={styles.calendar__img_list}>
      {imageList.map((item, idx) => (
        <li className={styles.calendar__img_item} key={`url(${item.src}${idx}`} style={{backgroundImage: `url(${item.src})`}}>
        </li>
      ))}
    </ul>
  )
}

export default DateSettingImage;