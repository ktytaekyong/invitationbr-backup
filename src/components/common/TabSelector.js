/* Import */
import { useState, useEffect } from "react";
/* Component */
import OptionSelector from "./OptionSelector"
/* CSS Module */
import styles from "../../css/module/common/TabSelector.module.css";
import CheckItem from "./CheckItem";

const TabSelector = ({ listName, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const setActiveHandler = (idx, onChange) => {
    setIsActive(idx);
    if(onChange) {
      if(idx === 0) {
        onChange(false);
      } else {
        onChange(true);
      }
    } else {
      return;
    }
  }

  useEffect(() => {
    // 초기(저장)값으로 변경(현재 무조건 첫 번째 항목_240904)
    setIsActive(0);
  }, []);

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