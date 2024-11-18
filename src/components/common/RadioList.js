/* CSS Module */
import styles from "../../css/module/common/RadioList.module.scss";

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