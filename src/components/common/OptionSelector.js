/* Import */
import { useState, useEffect } from "react";
/* CSS Module */
import styles from "../../css/module/common/OptionSelector.module.scss";

const OptionSelector = ({ selectID, selectName, listName, styleType, onChange, value }) => {
  return (
    <div className={`${styles.option__selector_wrapper} ${styleType ? styles[styleType] : ""}`}>
      <select 
        id={selectID} 
        name={selectName}
        onChange={onChange} 
        value={value}
        className={styles.option__selector}>
        {
          listName.map((item, index) => {
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