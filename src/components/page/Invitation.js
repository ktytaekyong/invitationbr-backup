import { useContext, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
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
import styles from "../../css/module/page/Invitation.module.scss";
import { SetContext } from "../../store/option-set-context.js";

const Invitation = () => {
  const previewLocation = useLocation();
  const isTargetPage = previewLocation.pathname === "/Preview";

  const { selectSettingList, selectOptionList } = useContext(SetContext);

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
        return <Attend handleOpen={handleOpen} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleStates((prev) =>
              prev.map((state, i) => (i === index ? entry.isIntersecting : state))
            );
          }
        });
      },
      { threshold: 0.5 } // 요소가 50% 이상 화면에 들어올 때 감지
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      refs.current.forEach((ref) => ref && observer.unobserve(ref));
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
  }, [visibleStates, popupOpened]); 

  return (
    <div
      className={`${styles.invitation} ${
        isTargetPage ? styles.preview : ""
      } invitation-scroll`}
      style={{ backgroundColor: selectOptionList.backgroundColor }}
    >
      <Container>
        <Tab
          setActiveTabHandler={setActiveTabHandler}
          isActiveTab={isActiveTab}
          setIsActiveTab={setIsActiveTab}
        />
        <Intro />
        <Effect />
        {selectSettingList.map((itemId, index) => (
          <div
            key={itemId}
            ref={(el) => (refs.current[index] = el)} // 각 아이템에 ref 설정
            className={selectOptionList.scrollEffectOption ? `${styles.invitationSection} ${
              visibleStates[index] ? styles.visible : styles.hidden
            }` : ""}
          >
            {renderItemHandler(itemId)}
          </div>
        ))}
        <Banner />
        {selectSettingList.includes("settingOutro") && (
          <div
            ref={(el) => (refs.current[selectSettingList.indexOf("settingOutro")] = el)} // 아웃트로
            className={selectOptionList.scrollEffectOption ? `${styles.invitationSection} ${
              visibleStates[selectSettingList.indexOf("settingOutro")]
                ? styles.visible
                : styles.hidden
            }` : ""}
          >
            <Outro />
          </div>
        )}

        <Footer />
      </Container>
      {ReactDOM.createPortal(
        <InvitationModalAttend openvar={open} onClose={handleClose} />,
        document.body
      )}
    </div>
  );
};

export default Invitation;
