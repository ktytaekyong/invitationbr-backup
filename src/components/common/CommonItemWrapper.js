/* Component */
/* CSS Module */
import styles from "../../css/module/common/CommonItemWrapper.module.css";

const CommonItemWrapper = (props) => {
  return (
    <div className={styles.option__content}>
      {props.children}
    </div>
  )
}

export default CommonItemWrapper;