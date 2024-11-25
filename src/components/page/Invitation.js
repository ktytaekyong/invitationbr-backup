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

const Invitation = () => {
  const previewLocation = useLocation();
  const isTargetPage = previewLocation.pathname === "/Preview";

  const { isMobile, settingList, selectSettingList, selectOptionList } = useContext(SetContext);
  const [isActiveTab, setIsActiveTab] = useState(false);
  const [visibleStates, setVisibleStates] = useState(
    selectSettingList.map(() => false)
  );
  
  const [popupOpened, setPopupOpened] = useState(false); 
  const setActiveTabHandler = () => {
    setIsActiveTab(!isActiveTab);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const refs = useRef([]);
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

  useEffect(() => {
    const refsCopy = refs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refsCopy.indexOf(entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleStates((prev) =>
              prev.map((state, i) => (i === index ? entry.isIntersecting : state))
            );
          }
        });
      },
      { threshold: 0.3 }
    );
    refsCopy.forEach((ref) => ref && observer.observe(ref));
    return () => {
      refsCopy.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);
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
    }
  }, [visibleStates, popupOpened, selectOptionList.optionAttendPopup, selectSettingList]);
  return (
    <div
      className={`${styles.invitation} ${
        isTargetPage ? styles.preview : ""
      } invitation-scroll`}
      style={{ backgroundColor: selectOptionList.backgroundColor }}
    >
      <Container>
        <>
          <Tab
            setActiveTabHandler={setActiveTabHandler}
            isActiveTab={isActiveTab}
            setIsActiveTab={setIsActiveTab}
          />
        </>
        <MobileSettingNotice />
        <Intro />
        <Effect />
        {settingList.map((item, index) => (
          item.itemEssential === false 
          || item.itemId === "settingLetter" 
          || item.itemId === "settingDate" 
          || item.itemId === "settingLocation" ?
          <div
            key={item.itemId}
            ref={(el) => (refs.current[index] = el)}
            style={{position: "relative"}}
            className={selectOptionList.scrollEffectOption ? `${styles.invitationSection} ${
              visibleStates[index] ? styles.visible : styles.hidden
            }` : ""}
          >
            {!isTargetPage && isMobile
              && (item.itemId !== "settingOutro" && item.itemId !== "settingThumbK" && item.itemId !== "settingThumbU" && item.itemId !== "settingOrder" && item.itemId !== "settingBgMusic") ? 
              <MobileSettingButtonWrapper id={item.itemId} position="absolute" top={5} />
              : null
            }
            {selectSettingList.includes(item.itemId) ? renderItemHandler(item.itemId) : null}
          </div> : null
        ))}
        <Banner />
        {settingList.map((item, index) => (
          item.itemEssential === false && item.itemId === "settingOutro" ?
          <div
            key={item.itemId}
            ref={(el) => (refs.current[selectSettingList.indexOf("settingOutro")] = el)}
            style={{position: "relative"}}
            className={selectOptionList.scrollEffectOption ? `${styles.invitationSection} ${
              visibleStates[index] ? styles.visible : styles.hidden
            }` : ""}
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
