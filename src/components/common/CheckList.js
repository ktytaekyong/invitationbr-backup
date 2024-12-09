/* CSS Module */
import styles from "../../css/module/common/CheckList.module.scss";

// C: 체크박스 - 리스트 (CheckList)
const CheckList = ({ children }) => {
  return (
    <div className={styles.check__wrapper}>
      {children}
    </div>
  )
}

export default CheckList;