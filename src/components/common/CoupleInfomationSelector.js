/* Import */
import { useState, useEffect } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/common/OptionIntroPhotoList.module.css";

const CoupleInfomationSelector = ({ couple, coupleKey }) => {
  const [depActive, setDepActive] = useState(false);
  const [relList, setRelList] = useState([]);
  const parents = [
    {
      relName: "아버지",
      relKey: "Father"
    },
    {
      relName: "어머니",
      relKey: "Mather"
    }
  ];
  const MRelList = ["아들", "장남", "차남"];
  const FRelList = ["딸", "장녀", "차녀"];

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
        <select name="" id={`${coupleKey}Name`}>
          {relList.map((rel, idx) => (
            <option value={`${coupleKey}Rel${idx}`}>{rel}</option>
          ))}
        </select>
      </div>
      <div className={styles.couple__info}>
        {parents.map((parent) => (
          <>
            <input type="text" id={`${coupleKey}${parent.relKey}Name`} placeholder={`${parent.relName} 성함`} />
            <input type="number" id={`${coupleKey}${parent.relKey}Number`} placeholder="전화 번호" />
            <div className={styles.check__wrapper}>
              <input type="checkbox" name={`${coupleKey}${parent.relKey}Dep`} id={`${coupleKey}${parent.relKey}Dep`} onChange={() => {setDepActive(!depActive)}} />
              <label htmlFor={`${coupleKey}${parent.relKey}Dep`}>故</label>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default CoupleInfomationSelector;