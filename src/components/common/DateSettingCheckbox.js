/* Component */
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/DateSettingCheckbox.module.scss";

// C: 예식 일시 - 디 데이 옵션 체크박스
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