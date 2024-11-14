/* Import */
import { useContext, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import ReactDOM from 'react-dom';
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
// import BgMusic from "../invitationSection/BgMusic";
import Guestbook from "../invitationSection/Guestbook";
import Attend from "../invitationSection/Attend";
import Outro from "../invitationSection/Outro";
import Banner from "../invitationSection/Banner.js";
import Footer from "../invitationSection/Footer.js";
import SettingOther from "../invitationSection/SettingOther.js";
import InvitationModalAttend from "../layout/modal/InvitationModalAttend.js";
/* CSS Module */
import styles from "../../css/module/page/Invitation.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const Invitation = () => {
  const previewnLocation = useLocation();
  const isTargetPage = previewnLocation.pathname === '/Preview';
  const { settingList, selectSettingList, selectOptionList } = useContext(SetContext);
  const [isActiveTab, setIsActiveTab] = useState(false);
  const setActiveTabHandler = () => {
    setIsActiveTab(!isActiveTab);
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if(selectOptionList.optionAttendPopup === "optionAttendPopupOpen" && selectSettingList.includes("settingAttend")) {
      if (!open) {  // 이미 모달이 열려 있지 않다면 열기
        handleOpen();
      }
    }
  }, [])
  const renderItemHandler = (id) => {
    switch(id) {
      case "settingLetter":
        return <Letter />;
      case "settingDate":
        return <Calendar />;
      case "settingLocation":
        return <Location />;
      case "settingGallery":
        return <Gallery />;
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
        return <Attend ref={attendRef} handleOpen={handleOpen} />;
      default:
        return null;
    }
  }
  const [attendRef, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.5,
  });
  useEffect(() => {
    if(selectOptionList.optionAttendPopup === "optionAttendPopupScroll" && selectSettingList.includes("settingAttend")) {
      if (inView) {
        handleOpen();
      }
    } 
  }, [inView]);
  useEffect(() => {
    settingList.map((item) => (
      selectSettingList.includes(item.itemId) ?
      renderItemHandler(item.itemId)
      : null
    ))
  }, [settingList, selectSettingList]) 
  useEffect(() => {
    document.documentElement.style.setProperty('--font-family--theme', selectOptionList.fontFamily);
  }, [selectOptionList.fontFamily]);
  useEffect(() => {
    document.documentElement.style.setProperty('--font-size--base', selectOptionList.fontSize);
  }, [selectOptionList.fontSize]);
  // useEffect(() => {
    
  // }, [selectOptionList.scrollEffectOption]);
  return (
    <div 
      className={`${styles.invitation} ${isTargetPage ? styles.preview : ""} invitation-scroll`}
      style={{ backgroundColor: selectOptionList.backgroundColor }}
    >
      <Container 
        style={{
          ...(selectOptionList.effectRange === "effectIntro" ? { position: "relative" } : {}),
          ...(isActiveTab ? { overflow: "hidden" } : {}),
        }}
      >
        <Tab 
          setActiveTabHandler={setActiveTabHandler} 
          isActiveTab={isActiveTab} 
          setIsActiveTab={setIsActiveTab}
        />
        <Intro />
        <Effect />
        {/* <Letter></Letter>
        <Calendar></Calendar>
        <Location></Location> */}
        {selectSettingList.map((itemId) =>
          selectSettingList.includes(itemId) ? (
            <div key={itemId}>{renderItemHandler(itemId)}</div>
          ) : null
        )}
        <Banner />
        {/* 위치 방명록 위 */}
        {selectSettingList.includes("settingOutro") && <Outro />}
        {/* {isTargetPage ? null: <SettingOther />} */}
        <Footer />
      </Container>
      {
        ReactDOM.createPortal(<InvitationModalAttend openvar={open} onClose={handleClose} />, document.body)
      }
    </div>
  )
}

export default Invitation;