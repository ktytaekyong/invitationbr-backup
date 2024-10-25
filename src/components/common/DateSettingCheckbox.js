/* Component */
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/DateSettingCheckbox.module.scss";

const DateSettingCheckbox = () => {
  return (
    <div className={styles.check__wrapper}>
      <CheckItem 
        id="dateDdayOption"
        name="dateDdayOption"
        content="D-Day" 
      />
    </div>
  )
}

export default DateSettingCheckbox;