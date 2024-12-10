/* Import */
import { useState, useRef, useEffect, useContext } from "react";
import ReactDOM from 'react-dom';
// Component
import MobileSettingDragTop from "../layout/MobileSettingDragTop.js";
import Toast from "../layout/Toast.js";
/* CSS Module */
import styles from "../../css/module/common/SettingItem.module.scss";
/* Image */
import iconSettingItemArrowImg from "../../img/icon/icon_settingItem_arrow.svg"
import iconSettingItemCloseImg from "../../img/icon/icon_close_modal.png"
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { RefContext } from "../../store/option-ref-context.js";

// C: 셋팅 하나씩 포장 (모바일에서 외형이 바뀜)
const SettingItem = ({ id, option, itemTitle, itemContent, checkboxID, checked, onChange, style }) => {
  const { isMobile, openSettingTab, setOpenSettingTab, basicSettingList, selectSettingList } = useContext(SetContext);
  const { introRef, outroRef, letterRef, dateRef, locationRef, galleryRef, videoRef, giftRef, noticeTRef, noticeDRef, guestbookRef, attendRef } = useContext(RefContext);

  const [translateY, setTranslateY] = useState(0); // 현재 요소의 Y축 위치
  const isDragging = useRef(false); // 드래그 상태
  const startY = useRef(0); // 드래그 시작 Y 좌표
  const startTranslateY = useRef(0); // 드래그 시작 시 translateY 값

  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);

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
    e.stopPropagation();
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

  const handleEnd = (e) => {
    const element = e.currentTarget; 
    const elementHeight = element.getBoundingClientRect().height; 
    const maxHeight = elementHeight * 0.85; 
    const currentTranslateY = translateY; 
    isDragging.current = false;
  
    if (currentTranslateY > maxHeight) {
      setOpenSettingTab("");
      setTranslateY(0);
    }
  };

  const scrollHandler = (refid) => {
    if(!(basicSettingList.includes(refid)) && !(selectSettingList.includes(refid))) {
      setOpen(true);
      return false;
    } else {
      switch (refid) {
        case "settingFixedTab":
        case "settingBgMusic":
          break;
        case "settingBasicInfomation":
        case "settingBackground":
        case "settingIntro":
        case "settingIntroPhoto":
          introRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "settingLetter":
        case "settingCoupleInfomation":
          letterRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "settingDate":
          dateRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "settingLocation":
          locationRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "settingGallery":
          galleryRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "settingVideo":
          videoRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "settingGift":
          giftRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "settingNoticeT":
          noticeTRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "settingNoticeD":
          noticeDRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "settingGuestbook":
          guestbookRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "settingAttend":
          attendRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "settingOutro":
          outroRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        default:
          break;
      }
    }
  }

  return (
    <>
      <li 
        id={id} 
        className={`${styles.setting__item} ${!isMobile && isActive ? styles["active"] : ""} ${isMobile && openSettingTab === id ? styles["active"] : ""}`} 
        ref={itemRef}
        onMouseMove={isMobile ? handleMove : null}
        onMouseUp={isMobile ? handleEnd : null}
        onTouchMove={isMobile ? handleMove : null}
        onTouchEnd={isMobile ? handleEnd : null}
        onClick={() => { 
          if(isMobile) {
            scrollHandler(id);
          }
        }}
        style={{
          transform: `translateY(${translateY}px)`,
        }}
      >
      {isMobile ? <MobileSettingDragTop onMouseDown={handleStart} onTouchStart={handleStart} /> : null}
      <div className={styles.setting__title} 
        onMouseDown={isMobile ? handleStart : null} 
        onTouchStart={isMobile ? handleStart : null}
        onClick={() => { 
          if(!isMobile) {
            activeToggleHandler();
            scrollHandler(id);
          }
        }
      }>
        <div className={styles.setting__title_wrap}>
          {
            !isMobile && option ?
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
            <div className={styles.setting__close} 
              onClick={(e) => {
                e.stopPropagation();
                activeSettingHandler();
              }}
            >
              <img src={iconSettingItemCloseImg} alt="" className={styles.setting__close_img} />
            </div>
          }
      </div>
      <div className={styles.setting__content} style={style ? style : null}>
        {itemContent}
      </div>
    </li>
    {
      ReactDOM.createPortal(<Toast type="warn" open={open} setOpen={setOpen} message="사용하지 않는 항목입니다." />, document.body)
    }
    </>

  )
}

export default SettingItem;