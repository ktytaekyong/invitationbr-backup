/* Import */
import { useState, useRef, useEffect, useContext } from "react";
// Component
import MobileSettingDragTop from "../layout/MobileSettingDragTop.js";
/* CSS Module */
import styles from "../../css/module/common/SettingItem.module.scss";
/* Image */
import iconSettingItemArrowImg from "../../img/icon/icon_settingItem_arrow.svg"
import iconSettingItemCloseImg from "../../img/icon/icon_close_modal.png"
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const SettingItem = ({ id, option, itemTitle, itemContent, checkboxID, checked, onChange }) => {
  const { isMobile, openSettingTab, setOpenSettingTab } = useContext(SetContext);
  const [isActive, setIsActive] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };
  const activeSettingHandler = () => {
    setOpenSettingTab("");
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
    <li id={id} className={`${styles.setting__item} ${!isMobile && isActive ? styles["active"] : ""} ${isMobile && openSettingTab === id ? styles["active"] : ""}`} ref={itemRef}>
      <MobileSettingDragTop />
      <div className={styles.setting__title} 
        onClick={() => {
          if(!isMobile) {
            activeToggleHandler();
          }
        }
      }>
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
          {
            !isMobile ?
            <img src={iconSettingItemArrowImg} alt="" className={styles.setting__arrow_img} />
            :
            <div className={styles.setting__close} onClick={activeSettingHandler}>
              <img src={iconSettingItemCloseImg} alt="" className={styles.setting__close_img} />
            </div>
          }
      </div>
      <div className={styles.setting__content}>
        {itemContent}
      </div>
    </li>
  )
}

export default SettingItem;