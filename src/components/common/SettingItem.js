/* Import */
import { useState, useRef, useEffect } from "react";
/* CSS Module */
import styles from "../../css/module/common/SettingItem.module.css";
/* Image */
import iconSettingItemArrowImg from "../../img/icon/icon_settingItem_arrow.svg"

const SettingItem = ({ id, option, itemTitle, itemContent, checked, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };
  const itemRef = useRef(null);

  useEffect(() => {
    if(itemRef.current.id === "SettingItem0") {
      setTimeout(() => {
        setIsActive(true);
      }, 300);
    }
  }, []);

  return (
    <li className={`${styles.setting__item} ${isActive ? styles["active"] : ""}`} ref={itemRef}>
      <div className={styles.setting__title} onClick={activeToggleHandler}>
        <div className={styles.setting__title_wrap}>
          {
            option ?
            <p>{itemTitle}</p>
            :
            <>
              <input type="checkbox" id={id} checked={checked} onChange={onChange} />
              <label htmlFor={id}>{itemTitle}</label>
            </>
          }
        </div>
          <img src={iconSettingItemArrowImg} alt="" className={styles.setting_arrow_img} />
      </div>
      <div className={styles.setting__content}>
        {/* <div className={styles.content__wrap}> */}
          {itemContent}
        {/* </div> */}
      </div>
    </li>
  )
}

export default SettingItem;