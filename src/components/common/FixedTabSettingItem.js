/* CSS Module */
import styles from "../../css/module/common/FixedTabSettingItem.module.css";

const FixedTabSettingItem = (props) => {
  return (
    <li className={styles.option__item}>
      <input type="checkbox" id={props.id} checked={props.checked} onChange={props.onChange}/>
      <label htmlFor={props.id}>{props.optionTitle}</label>
    </li>
  )
}

export default FixedTabSettingItem;