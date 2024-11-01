/* Import */
import { useState, useEffect, useContext } from "react";
/* CSS Module */
import styles from "../../css/module/common/OptionSelector.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const OptionSelector = ({ selectID, selectName, listName, styleType, onChange, value }) => {
  const { selectOptionList, setSelectOptionList } = useContext(SetContext);
  const dataChangeHandler = (e) => {
    const { name, value } = e.target;
    const newArray = Object.entries(selectOptionList);
    newArray.map((item) => {
      if(item.includes(name)) {
        setSelectOptionList((prev) => ({
          ...prev,
          [name]: value
        }))
      }
    })
  }
  return (
    <div className={`${styles.option__selector_wrapper} ${styleType ? styles[styleType] : ""}`}>
      <select 
        id={selectID} 
        name={selectName}
        value={value}
        onChange={
          onChange ? 
          onChange : 
          (e) => dataChangeHandler(e)
        }
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