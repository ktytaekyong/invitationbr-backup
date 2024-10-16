/* Import */
import { useContext } from "react";
/* Component */
import Container from "../layout/Container";
import Tab from "../invitationSection/Tab";
import Intro from "../invitationSection/Intro";
import Letter from "../invitationSection/Letter";
import Date from "../invitationSection/Date";
import Location from "../invitationSection/Location";
import Gallery from "../invitationSection/Gallery";
import Video from "../invitationSection/Video";
import Gift from "../invitationSection/Gift";
import NoticeT from "../invitationSection/NoticeT.js";
import NoticeD from "../invitationSection/NoticeD.js";
import BgMusic from "../invitationSection/BgMusic";
import Guestbook from "../invitationSection/Guestbook";
import Attend from "../invitationSection/Attend";
import Outro from "../invitationSection/Outro";
import Banner from "../invitationSection/Banner.js";
import Footer from "../invitationSection/Footer.js";
import SettingOther from "../invitationSection/SettingOther.js";
/* CSS Module */
import styles from "../../css/module/page/Invitation.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const Invitation = () => {
  const { selectSettingList, setSelectSettingList, settingList } = useContext(SetContext);
  return (
    <div className={`${styles.invitation}`}>
      <Container>
        <Tab></Tab>
        <Intro></Intro>
        <Letter></Letter>
        <Date></Date>
        <Location></Location>
        {
          selectSettingList.includes("settingGallery") ?
          <Gallery></Gallery> : null
        }
        {
          selectSettingList.includes("settingVideo") ?
          <Video></Video> : null
        }
        {
          selectSettingList.includes("settingGift") ?
          <Gift></Gift> : null
        }
        {
          selectSettingList.includes("settingNoticeT") ?
          <NoticeT></NoticeT> : null
        }
        {
          selectSettingList.includes("settingNoticeD") ?
          <NoticeD></NoticeD> : null
        }
        <Banner></Banner>
        {
          selectSettingList.includes("settingGuestbook") ?
          <Guestbook></Guestbook> : null
        }
        {
          selectSettingList.includes("settingAttend") ?
          <Attend></Attend> : null
        }
        {
          selectSettingList.includes("settingOutro") ?
          <Outro></Outro> : null
        }
        <SettingOther />
        {
          selectSettingList.includes("settingBgMusic") ?
          <BgMusic></BgMusic> : null
        }
        <Footer></Footer>
      </Container>
    </div>
  )
}

export default Invitation;