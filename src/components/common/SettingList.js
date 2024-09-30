/* Import */
import React from "react";
/* Component */
import SettingItem from "./SettingItem";
import FixedTabSetting from "./FixedTabSetting";
import BackgroundSetting from "./BackgroundSetting";
import BasicInfomationSetting from "./BasicInfomationSetting";
import IntroSetting from "./IntroSetting";
import IntroPhotoSetting from "./IntroPhotoSetting";
import CoupleInfomationSetting from "./CoupleInfomationSetting";
import LetterSetting from "./LetterSetting";
import DateSetting from "./DateSetting";
import LocationSetting from "./LocationSetting";
import TrafficSetting from "./TrafficSetting";
import GallerySetting from "./GallerySetting";
import VideoSetting from "./VideoSetting";
import GiftSetting from "./GiftSetting";
import NoticeSettingT from "./NoticeSettingT";
import NoticeSettingD from "./NoticeSettingD";
import BgMusicSetting from "./BgMusicSetting";
import GuestbookSetting from "./GuestbookSetting";
import AttendSetting from "./AttendSetting";
import OutroSetting from "./OutroSetting";
import ThumbnailSettingK from "./ThumbnailSettingK";
import ThumbnailSettingU from "./ThumbnailSettingU";
import OrderSetting from "./OrderSetting";
/* CSS Module */
import styles from "../../css/module/common/SettingList.module.css";

const itemList = [
  {
    itemTitle: "고정 탭 설정",
    itemContent: <FixedTabSetting />,
  }, 
  {
    itemTitle: "기본 정보",
    itemContent: <BasicInfomationSetting />,
  },
  {
    itemTitle: "배경",
    itemContent: <BackgroundSetting />,
  }, 
  {
    itemTitle: "인트로 화면",
    itemContent: <IntroSetting />,
  }, 
  {
    itemTitle: "인트로 사진",
    itemContent: <IntroPhotoSetting />,
  }, 
  {
    itemTitle: "신랑/신부측 정보",
    itemContent: <CoupleInfomationSetting />,
  }, 
  {
    itemTitle: "모시는 글",
    itemContent: <LetterSetting />,
  }, 
  {
    itemTitle: "예식 일시",
    itemContent: <DateSetting />,
  },
  {
    itemTitle: "오시는 길",
    itemContent: <LocationSetting />,
  }, 
  // {
  //   itemTitle: "교통수단",
  //   itemContent: <TrafficSetting />,
  // }, 
  {
    itemTitle: "갤러리",
    itemContent: <GallerySetting />,
  }, 
  {
    itemTitle: "동영상",
    itemContent: <VideoSetting />,
  }, 
  {
    itemTitle: "마음 전하기",
    itemContent: <GiftSetting />,
  }, 
  {
    itemTitle: "안내사항 (탭형)",
    itemContent: <NoticeSettingT />,
  }, 
  {
    itemTitle: "안내사항 (분리형)",
    itemContent: <NoticeSettingD />,
  }, 
  {
    itemTitle: "배경음악",
    itemContent: <BgMusicSetting />,
  }, 
  {
    itemTitle: "방명록",
    itemContent: <GuestbookSetting />,
  }, 
  {
    itemTitle: "참석의사 (RSVP)",
    itemContent: <AttendSetting />,
  }, 
  {
    itemTitle: "하단 글귀",
    itemContent: <OutroSetting />,
  }, 
  {
    itemTitle: "카카오톡 공유 썸네일",
    itemContent: <ThumbnailSettingK />,
  }, 
  {
    itemTitle: "URL 공유 썸네일",
    itemContent: <ThumbnailSettingU />,
  }, 
  {
    itemTitle: "메뉴 순서 변경",
    itemContent: <OrderSetting />,
  }
]

const SettingList = () => {
  return (
    <ul className={styles.setting__list}>
      {itemList.map((item, index) => (
        <SettingItem itemTitle={item.itemTitle} itemContent={item.itemContent} id={`SettingItem${index}`} key={index} />
      ))}
    </ul>
  )
}

export default SettingList;