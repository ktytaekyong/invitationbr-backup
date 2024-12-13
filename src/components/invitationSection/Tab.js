/* Import */
import { useState, useEffect, useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactDOM from 'react-dom';
/* Component */
import Button from "../layout/Button.js";
import MobileSettingButtonWrapper from "../layout/MobileSettingButtonWrapper.js";
import Toast from "../layout/Toast.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Tab.module.scss";
/* Context */
import { TabContext } from "../../store/option-tab-context.js";
import { SetContext } from "../../store/option-set-context.js";
import { InfoContext } from "../../store/option-info-context.js";
import { RefContext } from "../../store/option-ref-context.js";

const Tab = ({ setActiveTabHandler, isTabActive, setIsTabActive }) => {
  const previewLocation = useLocation();
  const isTargetPage = previewLocation.pathname === "/Preview";
  const { basicTabList, selectTabList } = useContext(TabContext); 
  const { isMobile, selectOptionList, basicSettingList, selectSettingList } = useContext(SetContext);
  const { basicInfoList } = useContext(InfoContext);
  const { invitationRef, letterRef, dateRef, locationRef, galleryRef, videoRef, giftRef, noticeTRef, noticeDRef, guestbookRef, attendRef } = useContext(RefContext);
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);

  const tabRef = useRef(null);
  const tabBtnRef = useRef(null);

  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }            
  const DDayCalculator = (date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    const diffTime = selectedDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  const scrollHandler = (refid) => {
    if(!(basicSettingList.includes("setting" + refid.substring(3))) && !(selectSettingList.includes("setting" + refid.substring(3)))) {
      setOpen(true);
      return false;
    } else {
      switch (refid) {
        case "tabLetter":
          letterRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "tabDate":
          dateRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "tabLocation":
          locationRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "tabGallery":
          galleryRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "tabVideo":
          videoRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "tabGift":
          giftRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "tabNoticeT":
          noticeTRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "tabNoticeD":
          noticeDRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "tabGuestbook":
          guestbookRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        case "tabAttend":
          attendRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
        default:
          break;
      }
    }
  }
  
  useEffect(() => {
    setIsActive(0);
  }, []);
  useEffect(() => {
    setIsTabActive(false);
  }, [selectOptionList.introFillType, setIsTabActive]);

  const firstMenuPositionHandler = () => {
    if(selectOptionList.theme === "themeModernBasic" && (selectOptionList.introFillType === "fillTemplate1" || selectOptionList.introFillType === "fillTemplate2" || selectOptionList.introFillType === "fillTemplate3" || selectOptionList.introFillType === "fillTemplate4")) {
      return 8;
    } else {
      return -8;
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const tab = tabRef.current;
      let currentPos = 0;
      if (isTargetPage || isMobile) {
        // `window` 스크롤 값 사용
        currentPos = window.scrollY;
      } else {
        // `invitationRef.current` 스크롤 값 사용
        currentPos = invitationRef.current?.scrollTop || 0;
      }
      if (!tab) return;
      if (currentPos > 0) {
        tab.classList.add(styles["active"]);
      } else {
        tab.classList.remove(styles["active"]);
      }
    };

    if(isTargetPage || isMobile) {
      if (window) {
        window.addEventListener("scroll", handleScroll);
      }
      return () => {
        if (window) {
          window.removeEventListener("scroll", handleScroll);
        }
      };
    } else {
      const invitationEl = invitationRef.current;
      if (invitationEl) {
        invitationEl.addEventListener("scroll", handleScroll);
      }
      return () => {
        if (invitationEl) {
          invitationEl.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, [isMobile, isTargetPage]);

  return (
    <>
      {!isTargetPage && isMobile ? 
      <MobileSettingButtonWrapper 
        id="settingFixedTab" 
        position="absolute"
        top={firstMenuPositionHandler()}
      /> : null}
      {
        selectTabList.length === 0 ?
        null
        :
        <div ref={tabRef} className={`${styles.tab__wrap} ${isTargetPage ? styles.preview : ""} ${styles[selectOptionList.theme === "themeModernBasic" ? selectOptionList.introFillType : ""]}`}>
          <div className={`${styles.backdrop} ${isTabActive ? styles["active"] : ""}`} onClick={setActiveTabHandler}></div>
          <div ref={tabBtnRef} className={styles.button__wrapper}>
            <Button onClick={setActiveTabHandler} className={`${isTabActive ? styles["active"] : ""}`} styleType="tab2" />
          </div>
          <ul className={`${styles.tab} ${isTabActive ? styles["active"] : ""}`} >
            {selectTabList
            .map((item, idx) => {
              const tabContent = basicTabList.find(tab => tab.id === item);
              return (
                <li key={"tab" + idx}
                  id={"scroll" + tabContent.id} 
                  className={`${styles.tab__item} ${isActive === idx ? styles["active"] : ""}`}
                  onClick={() => {
                    setActiveHandler(idx);
                    scrollHandler(tabContent.id);
                  }}
                >
                  {/* <Link to={`#${tabContent.id.substring(3)}`}> */}
                    <span>{tabContent ? tabContent.content : null}</span>
                  {/* </Link> */}
                </li>
              )
            })}
            <li className={styles.tab__day}>
              <p>보람<span>♥</span>신우의 결혼식<br /><span>{DDayCalculator(basicInfoList.dateInfo.date)}</span>일 남았습니다.</p>
            </li>
          </ul>
        </div>
      }
      {
        ReactDOM.createPortal(<Toast type="warn" open={open} setOpen={setOpen} message="사용하지 않는 항목입니다." />, document.body)
      }
    </>

  )
}

export default Tab;