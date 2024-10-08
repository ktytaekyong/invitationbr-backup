/* Import */
import { useEffect } from "react";
/* CSS Module */
import styles from "../../css/module/common/OptionSelector.module.css";

const OptionSelector = ({ selectID, selectName, value, listName, onChange, styleType }) => {
  return (
    <div className={`${styles.option__selector_wrapper} ${styleType ? styles[styleType] : ""}`}>
      <select 
        id={selectID} 
        name={selectName}
        value={value}
        onChange={onChange} 
        className={styles.option__selector}>
        {
          listName.map((item, index) => {
            // console.log(item.itemKey);
            return (
              <option 
                key={`${item.itemKey}${item.itemName}${index}`}
                value={item.itemKey}
                >
                  {item.itemName ? item.itemName : item}
              </option>
            )
          })
        }
      </select>
    </div>
  )
}

export default OptionSelector;