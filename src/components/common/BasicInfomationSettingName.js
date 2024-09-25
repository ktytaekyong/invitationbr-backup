/* Import */
import { useState, useEffect } from "react";
/* Component */
import Button from "../layout/Button.js"
/* CSS Module */
import styles from "../../css/module/common/BasicInfomationSettingName.module.css";

const BasicInfomationSettingName = () => {
  const [isActive, setIsActive] = useState(0);
  const [isActiveTab, setIsActiveTab] = useState(0);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }
  const setActiveTabHandler = (idx) => {
    setIsActiveTab(idx);
  }
  return (
    <div className={styles.option__input}>
      <input type="text" placeholder="성" required={true} />
      <input type="text" placeholder="이름" required={true} />
    </div>
  )
}

export default BasicInfomationSettingName;