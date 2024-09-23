/* Component */
import FixedTabSettingItem from "../common/FixedTabSettingItem";
/* CSS Module */
import styles from "../../css/module/common/FixedTabSettingList.module.css";
import { useEffect, useState } from "react";


const basicTablList = [
  "모시는 글",
  "예식 일시",
  "오시는 길",
  "교통수단",
  "갤러리",
  "동영상",
  "마음 전하기",
  "안내사항 (탭형)",
  "안내사항 (분리형)",
  "방명록",
  "참석의사",
];

const selectTablList = [

];

const FixedTabSettingList = () => {
  const [isChecked, setIsChecked] = useState(Array(basicTablList.length).fill(false));
  const [selectTablList, setSelectTablList] = useState([]);

  useEffect(() => {
    setIsChecked((prev) => 
      prev.map((item, idx) => (
        idx >= 0 && idx < 4 ? true : item
      ))
    )
  }, []);

  useEffect(() => {
    const trueChecked = isChecked.filter(checked => checked === true);
    if(trueChecked.length > 4) {
      alert("최대 4개 등록 가능합니다.");
    }
  }, [isChecked]);

  const setCheckedHandler = (idx) => {
    setIsChecked((prev) =>
      prev.map((item, index) => (index === idx ? !item : item))
    );
  }

  return (
    <ul className={styles.option__list}>
      {basicTablList.map((item, idx) => (
        <FixedTabSettingItem 
          key={`tabOption${idx}`} 
          id={`tabOption${idx}`} 
          optionTitle={item} 
          checked={isChecked[idx]}
          onChange={() => setCheckedHandler(idx)}
        />
      ))}
    </ul>
  )
}

export default FixedTabSettingList;