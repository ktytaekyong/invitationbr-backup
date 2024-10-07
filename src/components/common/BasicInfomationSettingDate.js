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

const BasicInfomationSettingDate = ({ inputType }) => {
  return (
    <div className={styles.option__input}>
      {
        inputType === "date" ?
        <input type="date" id="BasicInfoDate" />
        :
        <>
          <OptionSelector selectID="BasicInfoDateHour" listName={dateHourList} type="hour" hour={dateHourDistList}></OptionSelector>
          <OptionSelector selectID="BasicInfoDateMin" listName={dateMinuteList} type="minute" styleType="minute__selector"></OptionSelector>
        </>
      }
    </div>
  )
}

export default BasicInfomationSettingDate;