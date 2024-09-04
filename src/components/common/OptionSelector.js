/* CSS Module */
import styles from "../../css/module/common/OptionSelector.module.css";

const OptionSelector = (props) => {
  return (
    <select className={styles.option__selector}>
      {props.listTitle.map((item, index) => (
        <option value={item.value} key={item + index}>{item.name}</option>
      ))}
    </select>
  )
}

export default OptionSelector;