/* Component */
import FixedTabSettingItem from "../common/FixedTabSettingItem";
/* CSS Module */
import styles from "../../css/module/common/FixedTabSettingList.module.css";
import { useEffect, useState } from "react";

const basicTablList = [
  {
    id: "tabLetter",
    content: "모시는 글",
    isView: true
  },
  {
    id: "tabDate",
    content: "예식 일시",
    isView: true
  },
  {
    id: "tabLocation",
    content: "오시는 길",
    isView: true
  },
  {
    id: "tabTraffic",
    content: "교통수단",
    isView: false
  },
  {
    id: "tabGallery",
    content: "갤러리",
    isView: false
  },
  {
    id: "tabMovie",
    content: "동영상",
    isView: false
  },
  {
    id: "tabMovie",
    content: "동영상",
    isView: false
  },
  {
    id: "tabGift",
    content: "마음 전하기",
    isView: false
  },
  {
    id: "tabNoticeT",
    content: "안내사항",
    isView: false
  },
  {
    id: "tabNoticeD",
    content: "공지사항",
    isView: false
  },
  {
    id: "tabGuestbook",
    content: "방명록",
    isView: true
  },
  {
    id: "tabAttend",
    content: "참석의사",
    isView: false
  }
];
// const basicTablList = [
//   "모시는 글",
//   "예식 일시",
//   "오시는 길",
//   "교통수단",
//   "갤러리",
//   "동영상",
//   "마음 전하기",
//   "안내사항",
//   "공지사항",
//   "방명록",
//   "참석의사",
// ];

// const selectTablList = [

// ];

const FixedTabSettingList = () => {
  // const [isChecked, setIsChecked] = useState(Array(basicTablList.length).fill(false));
  const [tabList, setTabList] = useState(basicTablList);

  useEffect(() => {
    
  }, []);

  useEffect(() => {

  }, []);

  const setCheckedHandler = (idx) => {
    // setIsChecked((prev) =>
    //   prev.map((item, index) => (index === idx ? !item : item))
    // );
  }

  return (
    <ul className={styles.option__list}>
      {basicTablList.map((item, idx) => (
        <FixedTabSettingItem 
          key={`tabOption${idx}`} 
          id={item.id} 
          optionTitle={item.content} 
          checked={item.isView}
          onChange={() => setCheckedHandler(idx)}
        />
      ))}
    </ul>
  )
}

export default FixedTabSettingList;