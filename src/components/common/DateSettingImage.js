/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import DateSettingCheckbox from "./DateSettingCheckbox.js";
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/common/DateSettingImage.module.css";
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
        <li className={styles.calendar__img_item} style={{backgroundImage: `url(${item.src})`}}>
        </li>
      ))}
    </ul>
  )
}

export default DateSettingImage;