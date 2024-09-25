/* Import */
import { useState, useEffect } from "react";
/* Component */
import Button from "../layout/Button.js"
import OptionSelector from "./OptionSelector.js";
/* CSS Module */
import styles from "../../css/module/common/BasicInfomationSettingPlace.module.css";

const dateHourDistList = ["오전", "오후"];
const dateHourList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const dateMinuteList = [0, 10, 20, 30, 40, 50];

const BasicInfomationSettingPlace = ({ data }) => {
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
        data === "name" ?
        <input type="text" placeholder="예식장 명 입력"/>
        :
        <input type="text" placeholder="층과 홀 입력"/>
      }
    </div>
  )
}

export default BasicInfomationSettingPlace;