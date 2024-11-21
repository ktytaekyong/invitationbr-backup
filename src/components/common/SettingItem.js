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

  const [translateY, setTranslateY] = useState(0); // 현재 요소의 Y축 위치
  const isDragging = useRef(false); // 드래그 상태
  const startY = useRef(0); // 드래그 시작 Y 좌표
  const startTranslateY = useRef(0); // 드래그 시작 시 translateY 값

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

  const handleStart = (e) => {
    isDragging.current = true;
    startY.current = e.touches ? e.touches[0].clientY : e.clientY;
    startTranslateY.current = translateY;
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;
    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const delta = currentY - startY.current; // 드래그 이동 거리
    const newTranslateY = startTranslateY.current + delta;
    if (newTranslateY >= 0) {
      setTranslateY(newTranslateY);
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
    if(translateY > 130){
      setOpenSettingTab("");
      setTranslateY(0);
    }
  };

  return (
    <li 
      id={id} 
      className={`${styles.setting__item} ${!isMobile && isActive ? styles["active"] : ""} ${isMobile && openSettingTab === id ? styles["active"] : ""}`} 
      ref={itemRef}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      {isMobile ? <MobileSettingDragTop onMouseDown={handleStart} onTouchStart={handleStart}/> : null}
      <div className={styles.setting__title} 
        onMouseDown={handleStart} 
        onTouchStart={handleStart}
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
      <div className={styles.setting__content} style={{}}>
        {itemContent}
      </div>
    </li>
  )
}

export default SettingItem;