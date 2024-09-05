/* Component */
import OptionTabFixItem from "../common/OptionTabFixItem";
/* CSS Module */
import styles from "../../css/module/common/OptionTabFixList.module.css";
import { useEffect, useState } from "react";

// 내가 봤을 땐 이거.. 1. 객체로 만든다 2. 선택한 목록을 새 배열에 넣는다 3. 꺼내 쓴다
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
    id: "tabDirection",
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
    content: "안내사항 (탭형)",
    isView: false
  },
  {
    id: "tabNoticeS",
    content: "안내사항 (분리형)",
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
//   "안내사항 (탭형)",
//   "안내사항 (분리형)",
//   "방명록",
//   "참석의사",
// ];

// const selectTablList = [

// ];

const OptionTabFixList = () => {
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
        <OptionTabFixItem 
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

export default OptionTabFixList;