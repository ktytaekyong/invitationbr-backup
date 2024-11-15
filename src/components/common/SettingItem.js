/* Import */
import { useState, useRef, useEffect } from "react";
/* CSS Module */
import styles from "../../css/module/common/SettingItem.module.scss";
/* Image */
import iconSettingItemArrowImg from "../../img/icon/icon_settingItem_arrow.svg"

const SettingItem = ({ id, option, itemTitle, itemContent, checkboxID, checked, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };
  const itemRef = useRef(null);

  useEffect(() => {
    if(itemRef.current.id === "settingFixedTab") {
      setTimeout(() => {
        setIsActive(true);
      }, 300);
    }
  }, []);

  return (
    <li id={id} className={`${styles.setting__item} ${isActive ? styles["active"] : ""}`} ref={itemRef}>
      <div className={styles.setting__title} onClick={activeToggleHandler}>
        <div className={styles.setting__title_wrap}>
          {
            option ?
            <>
              <input type="checkbox" id={checkboxID} name={checkboxID} checked={checked} onChange={onChange} onClick={(e) => e.stopPropagation()}/>
              <label htmlFor={checkboxID} name={checkboxID} onClick={(e) => e.stopPropagation()}>{itemTitle}</label>
            </>
            :
            <p>{itemTitle}</p>
          }
        </div>
          <img src={iconSettingItemArrowImg} alt="" className={styles.setting__arrow_img} />
      </div>
      <div className={styles.setting__content}>
        {itemContent}
      </div>
    </li>
  )
}

export default SettingItem;