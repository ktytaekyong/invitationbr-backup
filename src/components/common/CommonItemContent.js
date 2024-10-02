/* CSS Module */
import styles from "../../css/module/common/CommonItemContent.module.css";

const CommonItemContent = (props) => {
  return (
    <div className={`${styles.option__content_item} ${props.multi ? styles.multiLine : null}`}>
      <p className={styles.option__title}>
        {props.title}
        {
          props.essential === true ? 
          <span className={styles.essential}>*</span>
          :
          null
        }
      </p>
      <div className={styles.option__content}>
        {props.children}
      </div>
    </div>
  )
}

export default CommonItemContent;