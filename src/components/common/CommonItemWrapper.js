/* Component */
/* CSS Module */
import styles from "../../css/module/common/CommonItemWrapper.module.scss";

const CommonItemWrapper = (props) => {
  return (
    <div className={styles.item__content_wrapper}>
      {props.children}
    </div>
  )
}

export default CommonItemWrapper;