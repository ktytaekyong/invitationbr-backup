/* CSS Module */
import styles from "../../css/module/common/CheckList.module.scss";

const CheckList = ({ children }) => {
  return (
    <div className={styles.check__wrapper}>
      {children}
    </div>
  )
}

export default CheckList;