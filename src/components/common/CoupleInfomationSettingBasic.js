/* Import */
import { useState, useEffect } from "react";
/* Component */
import OptionSelector from "./OptionSelector"
import CheckItem from "./CheckItem";
/* CSS Module */
import styles from "../../css/module/common/CoupleInfomationSettingBasic.module.css";

const CoupleInfomationSettingBasic = ({ couple, coupleKey }) => {
  const [depActive, setDepActive] = useState(false);
  const [relList, setRelList] = useState([]);
  
  const MRelList = [
    {
      itemName: "아들",
      itemKey: "son0"
    },
    {
      itemName: "장남",
      itemKey: "son1"
    },
    {
      itemName: "차남",
      itemKey: "son2"
    },
  ];
  const FRelList = [
    {
      itemName: "딸",
      itemKey: "daughter0"
    },
    {
      itemName: "장녀",
      itemKey: "daughter1"
    },
    {
      itemName: "차녀",
      itemKey: "daughter2"
    },
  ];

  useEffect(() => {
    coupleKey === "M" ?
    setRelList(MRelList)
    :
    setRelList(FRelList)
  }, [coupleKey])

  return (
    <div className={styles.couple__info}>
      <input type="text" id={`${coupleKey}FirstName`} className={styles.info__firstname} placeholder={`성`} />
      <input type="text" id={`${coupleKey}Name`} className={styles.info__name} placeholder={`이름`} />
      <input type="number" id={`${coupleKey}Number`} className={styles.info__number} placeholder="전화 번호" />
      <OptionSelector selectID={`${coupleKey}RelSelect`} className={styles.info__firstname_selector} listName={relList} />
    </div>
  )
}

export default CoupleInfomationSettingBasic;