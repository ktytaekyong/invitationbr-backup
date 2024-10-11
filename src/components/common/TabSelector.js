/* Import */
import { useState, useEffect } from "react";
/* Component */
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/common/TabSelector.module.scss";

const TabSelector = ({ listName, onChange, onClick }) => {
  const [isActive, setIsActive] = useState(0);
  const setActiveHandler = (idx, onChange) => {
    setIsActive(idx);
    if(onChange) {
      onChange(idx);
    } else {
      return;
    }
  }

  return (
    <ul className={styles.tab__selector}>
      {
        onChange ?
        listName.map((item, idx) => (
          <li className={`${styles.selector__item} ${isActive === idx ? styles["active"] : ""} ${item.id.indexOf("noticeTab") !== -1 ? styles["tab"] : ""}`} 
            key={item + idx} id={item.id} 
            onClick={() => setActiveHandler(idx, onChange)} 
          >
            <span>{item.title}</span>
            {
              item.id.indexOf("noticeTab") !== -1 ?
              <Button styleType="tab__delete" onClick={onClick ? onClick : false}></Button>
              : null
            }
          </li>
        ))
        :
        listName.map((item, idx) => (
          <li className={`${styles.selector__item} ${isActive === idx ? styles["active"] : ""}`} 
            key={item + idx} id={item.id} 
            onClick={() => setActiveHandler(idx)} 
          >{item.title}</li>
        ))
      }
    </ul>
  )
}

export default TabSelector;