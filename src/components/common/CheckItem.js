/* CSS Module */
import styles from "../../css/module/common/CheckItem.module.css";

const CheckItem = (props) => {
  return (
    <div className={styles.check}>
      <input type="checkbox" name={props.id} id={props.id} />
      <label htmlFor={props.id}>{props.content}</label>
      {props.children}
    </div>
  )
}

export default CheckItem;