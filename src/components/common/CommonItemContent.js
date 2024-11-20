/* CSS Module */
import styles from "../../css/module/common/CommonItemContent.module.scss";

const CommonItemContent = ({ title, multi, essential, children, wrap }) => {
  return (
    <div className={`${styles.item__content} ${multi ? styles.multiLine : null} ${multi === "check" ? styles.multiCheck : null}`}>
      <p className={styles.option__title}>
        {title}
        {
          essential === true ? 
          <span className={styles.essential}>*</span>
          :
          null
        }
      </p>
      <div className={styles.option__content} style={{flexWrap: wrap ? "nowrap" : "wrap"}}>
        {children}
      </div>
    </div>
  )
}

export default CommonItemContent;