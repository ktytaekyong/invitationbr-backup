/* CSS Module */
import styles from "../../css/module/common/OptionTabFixItem.module.css";

const OptionTabFixItem = (props) => {
  return (
    <li className={styles.option__item}>
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}>{props.optionTitle}</label>
    </li>
  )
}

export default OptionTabFixItem;