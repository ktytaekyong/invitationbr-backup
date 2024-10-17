/* Import */
import { useState, useEffect } from "react";
/* Component */
import OptionSelector from "./OptionSelector.js";
/* CSS Module */
import styles from "../../css/module/common/BasicInfomationSettingDate.module.scss";

const dateHourList = [
  {itemKey: 8, itemName: "오전 8시"}, {itemKey: 9, itemName: "오전 9시"}, {itemKey: 10, itemName: "오전 10시"}, {itemKey: 11, itemName: "오전 11시"}, {itemKey: 12, itemName: "오후 12시"}, {itemKey: 13, itemName: "오후 1시"}, {itemKey: 14, itemName: "오후 2시"}, {itemKey: 15, itemName: "오후 3시"}, {itemKey: 16, itemName: "오후 4시"}, {itemKey: 17, itemName: "오후 5시"}, {itemKey: 18, itemName: "오후 6시"}, {itemKey: 19, itemName: "오후 7시"}, {itemKey: 20, itemName: "오후 8시"}, {itemKey: 21, itemName: "오후 9시"}
];
const dateMinuteList = [
  {itemKey: 0, itemName: "정각"}, {itemKey: 10, itemName: "10분"}, {itemKey: 20, itemName: "20분"}, {itemKey: 30, itemName: "30분"}, {itemKey: 40, itemName: "40분"}, {itemKey: 50, itemName: "50분"}
];

const BasicInfomationSettingDate = ({ inputType, onChange, dateInfo, timeInfo }) => {
  return (
    <div className={styles.option__input}>
      {inputType === "date" ? 
        <input 
          type="date" 
          id="BasicInfoDate" 
          name="date" 
          onChange={onChange} 
          value={dateInfo.date} 
        />
        :
        <>
          <OptionSelector selectID="BasicInfoHour" selectName="hour" listName={dateHourList} value={timeInfo.hour} onChange={onChange} />
          <OptionSelector selectID="BasicInfoMin" selectName="min" listName={dateMinuteList} value={timeInfo.min} onChange={onChange} styleType={"minute__selector"} />
        </>
      }
    </div>
  )
}

export default BasicInfomationSettingDate;