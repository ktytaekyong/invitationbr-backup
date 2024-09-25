/* Import */
import { useState, useEffect } from "react";
/* Component */
import Button from "../layout/Button.js"
import OptionSelector from "./OptionSelector.js";
/* CSS Module */
import styles from "../../css/module/common/BasicInfomationSettingDate.module.css";

const dateHourDistList = ["오전", "오후"];
const dateHourList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const dateMinuteList = [0, 10, 20, 30, 40, 50];

const BasicInfomationSettingDate = ({ data }) => {
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
      {
        data === "date" ?
        <input type="date" />
        :
        <>
          <OptionSelector selectID="DateHourSelect" listName={dateHourList} type="hour" hour={dateHourDistList}></OptionSelector>
          <OptionSelector selectID="DateMinuteSelect" listName={dateMinuteList} type="minute"></OptionSelector>
        </>
      }
    </div>
  )
}

export default BasicInfomationSettingDate;