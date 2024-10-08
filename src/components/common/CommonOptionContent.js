/* CSS Module */
import styles from "../../css/module/common/CommonOptionContent.module.scss";

const CommonOptionContent = ({ children }) => {
  return (
    <div className={styles.option__content}>
      {children}
    </div>
  )
}

export default CommonOptionContent;