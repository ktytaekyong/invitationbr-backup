/* CSS Module */
import styles from "../../css/module/common/CommonOptionWrapper.module.css";

const CommonOptionWrapper = ({ children }) => {
  return (
    <div className={styles.option__content_wrapper}>
      {children}
    </div>
  )
}

export default CommonOptionWrapper;