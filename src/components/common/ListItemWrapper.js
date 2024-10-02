/* Component */
/* CSS Module */
import styles from "../../css/module/common/ListItemWrapper.module.css";

const ListItemWrapper = (props) => {
  return (
    <div className={styles.item__content_wrapper}>
      {props.children}
    </div>
  )
}

export default ListItemWrapper;