/* Import */
import { useState, useRef, useEffect } from "react";
/* CSS Module */
import styles from "../../css/module/common/SettingItem.module.css";
/* Image */
import iconSettingItemArrowImg from "../../img/icon/icon_settingItem_arrow.svg"

const SettingItem = (props) => {
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
    <li className={`${styles.setting__item} ${isActive ? styles["active"] : ""}`} ref={itemRef} id={props.id}>
      <div className={styles.setting__title} onClick={activeToggleHandler}>
        <p>{props.itemTitle}</p>
        <img src={iconSettingItemArrowImg} alt="" className={styles.setting_arrow_img} />
      </div>
      <div className={styles.setting__content}>
        {/* <div className={styles.content__wrap}> */}
          {props.itemContent}
        {/* </div> */}
      </div>
    </li>
  )
}

export default SettingItem;