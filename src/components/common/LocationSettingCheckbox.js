/* Component */
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/BackgroundSettingCheckbox.module.css";

const LocationSettingCheckbox = () => {
  return (
    <div className={styles.check__wrapper}>
      <CheckItem content="지도 표기" id="locationMapOption" />
      <CheckItem content="약도 첨부" id="locationImageOption" />
    </div>
  )
}

export default LocationSettingCheckbox;