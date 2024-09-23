/* Component */
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/CheckList.module.css";

const CheckList = () => {
  return (
    <div className={styles.check__wrapper}>
      <CheckItem content="청첩장 확대 방지" id="zoomOption" />
      <CheckItem content="스크롤 시 등장 효과 적용" id="scrollEffectOption" />
      <CheckItem content="청첩장 잠금" id="lockOption">
        <small>* 체크하시면 예식일 이후 자동으로 잠금 처리 됩니다.</small>
      </CheckItem>
    </div>
  )
}

export default CheckList;