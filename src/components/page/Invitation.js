/* import */
import { useContext, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
/* Component */
import Container from "../layout/Container";
import Tab from "../invitationSection/Tab";
import Intro from "../invitationSection/Intro";
import Effect from "../invitationSection/Effect.js";
import Letter from "../invitationSection/Letter";
import Calendar from "../invitationSection/Calendar.js";
import Location from "../invitationSection/Location";
import Gallery from "../invitationSection/Gallery";
import Video from "../invitationSection/Video";
import Gift from "../invitationSection/Gift";
import NoticeT from "../invitationSection/NoticeT.js";
import NoticeD from "../invitationSection/NoticeD.js";
import Guestbook from "../invitationSection/Guestbook";
import Attend from "../invitationSection/Attend";
import Outro from "../invitationSection/Outro";
import Banner from "../invitationSection/Banner.js";
import Footer from "../invitationSection/Footer.js";
import InvitationModalAttend from "../layout/modal/InvitationModalAttend.js";
import MobileSettingButtonWrapper from "../layout/MobileSettingButtonWrapper.js";
import MobileSettingNotice from "../layout/MobileSettingNotice.js";
import SettingOther from "../invitationSection/SettingOther.js";
/* CSS */
import styles from "../../css/module/page/Invitation.module.scss";
// Context
import { SetContext } from "../../store/option-set-context.js";
import { TabContext } from "../../store/option-tab-context.js";
import { RefContext } from "../../store/option-ref-context.js";

// C: 청첩장 섹션 컴포넌트
const Invitation = () => {
  const previewLocation = useLocation();
  const isTargetPage = previewLocation.pathname === "/Preview";

  const { isMobile, settingList, selectSettingList, selectOptionList } = useContext(SetContext);
  const { isTabActive, setIsTabActive } = useContext(TabContext);
  const { invitationRef } = useContext(RefContext);

  const [visibleStates, setVisibleStates] = useState(
    selectSettingList.map(() => false)
  );
  
  const [popupOpened, setPopupOpened] = useState(false); 
  const setActiveTabHandler = () => {
    setIsTabActive(!isTabActive);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const refs = useRef({});
  const renderItemHandler = (id) => {
    switch (id) {
      case "settingLetter":
        return <Letter />;
      case "settingDate":
        return <Calendar />;
      case "settingLocation":
        return <Location />;
      case "settingGallery":
        return <Gallery />
      case "settingVideo":
        return <Video />;
      case "settingGift":
        return <Gift />;
      case "settingNoticeT":
        return <NoticeT />;
      case "settingNoticeD":
        return <NoticeD />;
      case "settingGuestbook":
        return <Guestbook />;
      case "settingAttend":
        return <Attend handleOpen={handleOpen} />;
      default:
        return null;
    }
  };

  const [isDomReady, setIsDomReady] = useState(false);

  useEffect(() => {
    const checkDomReady = () => {
      const allReady = selectSettingList.every((itemId) => refs.current[itemId]);
      if (allReady) setIsDomReady(true);
    };
    checkDomReady();
    // DOM 업데이트를 감지
    const observer = new MutationObserver(checkDomReady);
    observer.observe(document.body, { childList: true, subtree: true });
  
    return () => observer.disconnect(); // 옵저버 정리
  }, [selectSettingList]);

  useEffect(() => {
    if (!isDomReady) return;
  
    // 옵저버 설정
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.id;
          if (id && entry.isIntersecting) {
            setVisibleStates((prev) => {
              const newStates = [...prev];
              newStates[selectSettingList.indexOf(id)] = true;
              return newStates;
            });
          }
        });
      },
      { threshold: 0.3 }
    );
  
    selectSettingList.forEach((itemId) => {
      const element = refs.current[itemId];
      if (element) observer.observe(element);
    });
  
    return () => {
      selectSettingList.forEach((itemId) => {
        const element = refs.current[itemId];
        if (element) observer.unobserve(element);
      });
    };
  }, [isDomReady, selectSettingList]);

  useEffect(() => {
    if (
      selectOptionList.optionAttendPopup === "optionAttendPopupScroll" &&
      selectSettingList.includes("settingAttend") &&
      !popupOpened
    ) {
      const attendIndex = selectSettingList.indexOf("settingAttend");
      if (attendIndex !== -1 && visibleStates[attendIndex]) {
        handleOpen();
        setPopupOpened(true); 
      }
    } else if (selectOptionList.optionAttendPopup === "optionAttendPopupOpen" &&
      selectSettingList.includes("settingAttend") && !popupOpened) {
        handleOpen();
        setPopupOpened(true); 
    }
  }, [visibleStates, popupOpened, selectOptionList.optionAttendPopup, selectSettingList]);

  const [sortedSettingList, setSortedSettingList] = useState([]); 
  
  useEffect(() => {
    const sortedList = [...settingList].sort((a, b) => {
      return selectSettingList.indexOf(a.itemId) - selectSettingList.indexOf(b.itemId);
    });
    setSortedSettingList(sortedList);
  }, [selectSettingList, settingList]);
  
  useEffect(() => {
    if(isTabActive) {
      document.documentElement.style.overflowY = "hidden";
      invitationRef.current.style.overflowY = "hidden";
    } else if(!isTabActive || isMobile) {
      document.documentElement.style.overflowY = "visible";
      invitationRef.current.style.overflowY = "scroll";
    }
  }, [isTabActive]);

  return (
    <div
      ref={invitationRef}
      className={`${styles.invitation} ${
        isTargetPage ? styles.preview : ""
      } ${selectOptionList.theme === "themeModernBasic" ? styles[selectOptionList.introFillType] : ""}`}
    >
      <Container>
        <>
          <Tab
            setActiveTabHandler={setActiveTabHandler}
            isTabActive={isTabActive}
            setIsTabActive={setIsTabActive}
          />
        </>
        <MobileSettingNotice />
        <Intro />
        <Effect />
        {sortedSettingList
        .filter(
          (setting) =>
            setting.itemEssential === false ||
            setting.itemId === "settingLetter" ||
            setting.itemId === "settingDate" ||
            setting.itemId === "settingLocation"
        )
        .map((item, idx) => {
          const isInSelectList = selectSettingList.includes(item.itemId);
          return (
            <div
              key={item.itemId}
              ref={(el) => (refs.current[item.itemId] = el)}
              data-id={item.itemId}
              style={{ position: "relative" }}
              className={
                selectOptionList.scrollEffectOption
                  ? `${styles.invitationSection} ${visibleStates[idx] ? styles.visible : styles.hidden}`
                  : ""
              }
            >
              {!isTargetPage && isMobile && (item.itemId !== "settingOutro" && item.itemId !== "settingThumbK" && item.itemId !== "settingThumbU" && item.itemId !== "settingOrder" && item.itemId !== "settingBgMusic") ?
              <MobileSettingButtonWrapper id={item.itemId} position="absolute" top={5} />
                : null
              }
              {isInSelectList ? renderItemHandler(item.itemId) : null}
            </div>
          );
        })}
        <Banner />
        {settingList.map((item, index) => (
          item.itemEssential === false && item.itemId === "settingOutro" ?
          <div
            key={item.itemId}
            style={{position: "relative"}}
          >
            {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingOutro" position="absolute" top={5} /> : null}
            {selectSettingList.includes(item.itemId) ? <Outro /> : null}
          </div> : null
        ))}
        {!isTargetPage ? <SettingOther /> : null}
        <Footer />
      </Container>
      {ReactDOM.createPortal(
        <InvitationModalAttend openvar={open} onClose={handleClose} />, document.body
      )}
    </div>
  );
};

export default Invitation;
