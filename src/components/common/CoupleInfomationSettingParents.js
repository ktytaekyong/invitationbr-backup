/* Import */
import { useState, useEffect } from "react";
/* Component */
import OptionSelector from "./OptionSelector"
import CheckItem from "./CheckItem";
/* CSS Module */
import styles from "../../css/module/common/CoupleInfomationSettingParents.module.scss";

const CoupleInfomationSettingParents = ({ name, itemKey, coupleKey }) => {
  const [depActive, setDepActive] = useState(false);
  return (
    <div className={styles.couple__info}>
      <input type="text" id={`${coupleKey}${itemKey}Name`} className={styles.info__parentname} placeholder={`${name} 성함`} />
      <input type="number" id={`${coupleKey}${itemKey}Number`} className={styles.info__parentnumber} placeholder="전화 번호 '-' 없이 입력" />
      <CheckItem name={`${coupleKey}${itemKey}Dep`} id={`${coupleKey}${itemKey}Dep`} content={"故"} />
    </div>
  )
}

export default CoupleInfomationSettingParents;