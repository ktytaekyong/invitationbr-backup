/* CSS Module */
import styles from "../../css/module/common/OptionSelector.module.css";

const OptionSelector = (props) => {
  return (
    <select id={props.selectID} className={styles.option__selector}>
      {props.listName.map((item, index) => (
        <option value={item.itemKey} key={`${item.itemKey}${item.itemName}${index}`}>{item.itemName}</option>
      ))}
    </select>
  )
}

export default OptionSelector;