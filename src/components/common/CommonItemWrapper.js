/* Component */
/* CSS Module */
import styles from "../../css/module/common/CommonItemWrapper.module.css";

const OptionCommonItem = (props) => {
  return (
    <li className={styles.option__item}>
      {props.children}
    </li>
  )
}

export default OptionCommonItem;