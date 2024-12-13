/* CSS Module */
import styles from "../../css/module/common/RadioList.module.scss";

// C: 라디오 버튼 - 리스트
const RadioList = ({ title, children }) => {
  return (
    <div className={`${styles.radio__wrap} ${styles["active"]}`}>
      {
        title ?
        <p>{title}</p>
        :
        null
      }
      {children}
    </div>
  )
}

export default RadioList;