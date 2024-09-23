/* Import */
import { useState, useEffect } from "react";
/* Component */
import OptionSelector from "./OptionSelector"
/* CSS Module */
import styles from "../../css/module/common/IntroPhotoSetting.module.css";
import CheckItem from "./CheckItem";

const CoupleInfomationSettingBasic = ({ couple, coupleKey }) => {
  const [depActive, setDepActive] = useState(false);
  const [relList, setRelList] = useState([]);
  const parents = [
    {
      itemName: "아버지",
      itemKey: "Father"
    },
    {
      itemName: "어머니",
      itemKey: "Mother"
    }
  ];
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
    <>
      <div className={styles.couple__info}>
        <input type="text" id={`${coupleKey}Name`} placeholder={`${couple} 이름`} />
        <input type="number" id={`${coupleKey}Number`} placeholder="전화 번호" />
        <OptionSelector selectID={`${coupleKey}RelSelect`} listName={relList} />
      </div>
      <div className={styles.couple__info}>
        {parents.map((parent) => (
          <div key={`${parent.itemKey}info`}>
            <input type="text" id={`${coupleKey}${parent.itemKey}Name`} placeholder={`${parent.itemName} 성함`} />
            <input type="number" id={`${coupleKey}${parent.itemKey}Number`} placeholder="전화 번호" />
            <CheckItem name={`${coupleKey}${parent.itemKey}Dep`} id={`${coupleKey}${parent.itemKey}Dep`} content={"故"} />
          </div>
        ))}
      </div>
    </>
  )
}

export default CoupleInfomationSettingBasic;