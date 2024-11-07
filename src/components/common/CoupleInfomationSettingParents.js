/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import OptionSelector from "./OptionSelector"
import CheckItem from "./CheckItem";
/* CSS Module */
import styles from "../../css/module/common/CoupleInfomationSettingParents.module.scss";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const CoupleInfomationSettingParents = ({ pName, itemKey, coupleKey, data, onChange }) => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  // useEffect(() => {
  //   console.log(basicInfoList);
  // }, [basicInfoList])
  return (
    <div className={styles.couple__info}>
      <input 
        type="text" 
        id={`${coupleKey}${itemKey}Name`} 
        name={itemKey === "Dad" ? "dadName" : "momName"}
        className={styles.info__parentname} 
        placeholder={`${pName} 성함`} 
        value={itemKey === "Dad" ? data.dadName : data.momName}
        onChange={onChange}
      />
      <input type="number"
        id={`${coupleKey}${itemKey}Number`} 
        name={itemKey === "Dad" ? "dadNumber" : "momNumber"}
        className={styles.info__parentnumber} 
        placeholder="전화 번호 '-' 없이 입력" 
        value={itemKey === "Dad" ? data.dadNumber : data.momNumber}
        onChange={onChange}
      />
      <CheckItem 
        name={itemKey === "Dad" ? "dadDeceased" : "momDeceased"} 
        id={`${coupleKey}${itemKey}Dep`} 
        content={"故"} 
        infoType={coupleKey === "M" ? "groomParentInfo" : "brideParentInfo"}
        propsOnChange={true}
      />
    </div>
  )
}

export default CoupleInfomationSettingParents;