/* Component */
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/BackgroundSettingCheckbox.module.css";

const BackgroundSettingCheckbox = () => {
  return (
    <div className={styles.check__wrapper}>
      <CheckItem content="청첩장 확대 방지" id="zoomOption" />
      <CheckItem content="스크롤 시 등장 효과 적용" id="scrollEffectOption" />
      <CheckItem content="예식일 이후 청첩장 비노출" id="lockOption"></CheckItem>
    </div>
  )
}

export default BackgroundSettingCheckbox;