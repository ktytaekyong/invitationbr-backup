/* Import */
import { useState, useEffect, useContext } from "react";
/* CSS Module */
import styles from "../../css/module/common/BackgroundSettingTheme.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const colorList = ["#FFF", "#E8E9EC", "#FFF3F3", "#FDFBF5"];
const BackgroundSettingTheme = () => {
  const { selectOptionList, setSelectOptionList } = useContext(SetContext);
  const backgroundColorHandler = (e) => {
    const { id } = e.target;
    setSelectOptionList((prev) => ({
      ...prev,
      "backgroundColor": id
    }))
  }
  return (
    <ul id="backgroundColorSelector" name="backgroundColor" className={styles.bg__selector}>
      {colorList.map((item, idx) => (
        <li 
          className={`${styles.bg__item} ${selectOptionList.backgroundColor === item ? styles["active"] : ""}`} 
          style={{backgroundColor: item}} 
          key={item + idx} 
          id={item}
          onClick={(e) => backgroundColorHandler(e)}
        ></li>
      ))}
    </ul>
  )
}

export default BackgroundSettingTheme;