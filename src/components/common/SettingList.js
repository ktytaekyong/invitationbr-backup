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
    itemEssential: true,
    itemTitle: "고정 탭 설정",
    itemContent: <FixedTabSetting />,
  }, 
  {
    itemEssential: true,
    itemTitle: "기본 정보",
    itemContent: <BasicInfomationSetting />,
  },
  {
    itemEssential: true,
    itemTitle: "배경",
    itemContent: <BackgroundSetting />,
  }, 
  {
    itemEssential: true,
    itemTitle: "인트로 화면",
    itemContent: <IntroSetting />,
  }, 
  {
    itemEssential: true,
    itemTitle: "인트로 사진",
    itemContent: <IntroPhotoSetting />,
  }, 
  {
    itemEssential: true,
    itemTitle: "신랑/신부 정보",
    itemContent: <CoupleInfomationSetting />,
  }, 
  {
    itemEssential: true,
    itemTitle: "모시는 글",
    itemContent: <LetterSetting />,
  }, 
  {
    itemEssential: true,
    itemTitle: "예식 일시",
    itemContent: <DateSetting />,
  },
  {
    itemEssential: true,
    itemTitle: "오시는 길",
    itemContent: <LocationSetting />,
  }, 
  // {
  //   itemTitle: "교통수단",
  //   itemContent: <TrafficSetting />,
  // }, 
  {
    itemEssential: false,
    itemTitle: "갤러리",
    itemContent: <GallerySetting />,
  }, 
  {
    itemEssential: false,
    itemTitle: "동영상",
    itemContent: <VideoSetting />,
  }, 
  {
    itemEssential: false,
    itemTitle: "마음 전하기",
    itemContent: <GiftSetting />,
  }, 
  {
    itemEssential: false,
    itemTitle: "안내사항 (탭형)",
    itemContent: <NoticeSettingT />,
  }, 
  {
    itemEssential: false,
    itemTitle: "안내사항 (분리형)",
    itemContent: <NoticeSettingD />,
  }, 
  {
    itemEssential: false,
    itemTitle: "배경음악",
    itemContent: <BgMusicSetting />,
  }, 
  {
    itemEssential: false,
    itemTitle: "방명록",
    itemContent: <GuestbookSetting />,
  }, 
  {
    itemEssential: false,
    itemTitle: "참석의사 (RSVP)",
    itemContent: <AttendSetting />,
  }, 
  {
    itemEssential: false,
    itemTitle: "하단 글귀",
    itemContent: <OutroSetting />,
  }, 
  {
    itemEssential: false,
    itemTitle: "카카오톡 공유 썸네일",
    itemContent: <ThumbnailSettingK />,
  }, 
  {
    itemEssential: false,
    itemTitle: "URL 공유 썸네일",
    itemContent: <ThumbnailSettingU />,
  }, 
  {
    itemEssential: false,
    itemTitle: "메뉴 순서 변경",
    itemContent: <OrderSetting />,
  }
]

const SettingList = () => {
  return (
    <ul className={styles.setting__list}>
      {itemList.map((item, index) => (
        <SettingItem itemTitle={item.itemTitle} itemContent={item.itemContent} option={item.itemEssential} id={`SettingItem${index}`} key={index} />
      ))}
    </ul>
  )
}

export default SettingList;