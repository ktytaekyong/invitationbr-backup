/* Import */
import { useState, useEffect } from "react";
/* Component */
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/common/TabSelector.module.scss";

const TabSelector = ({ listName, onChange, onClick, type, optionSet }) => {
  const [isActive, setIsActive] = useState(0);
  const setActiveHandler = (idx, onChange) => {
    setIsActive(idx);
    if(onChange) {
      onChange(idx);
    } else {
      return;
    }
  }
  useEffect(() => {
    if (listName.length === 1) {
      setIsActive(0);
    }
  }, [listName]);
  return (
    <ul className={styles.tab__selector}>
      {
        listName.map((item, idx) => (
          <li 
            className={`${styles.selector__item} ${isActive === idx ? styles["active"] : ""} ${item.id && item.id.indexOf("noticeTab") !== -1 ? styles["tab"] : ""}`} 
            key={item + idx} 
            id={item.id} 
            onClick={() => {
              type !== "gallery" ? setActiveHandler(idx, onChange(idx)) : setActiveHandler(idx, onChange(item))
              optionSet(item.id);
            }}
          >
            <span>{item.title}</span>
            {/* 공지사항을 선택했을 경우 */}
            {
              item.id && item.id.indexOf("noticeTab") !== -1 ?
              <Button 
                styleType="tab__delete" 
                onClick={onClick} 
              />
              : null
            }
          </li>
        ))
      }
    </ul>
  )
}

export default TabSelector;