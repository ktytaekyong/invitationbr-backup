/* Import */
import { useState, useEffect } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/common/TabSelector.module.scss";

const TabSelector = ({ listName, onChange }) => {
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
          <li className={`${styles.selector__item} ${isActive === idx ? styles["active"] : ""}`} 
            key={item + idx} id={item.id} 
            onClick={() => setActiveHandler(idx, onChange)} 
          >{item.title}</li>
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