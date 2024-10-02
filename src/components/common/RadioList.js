/* Import */
import { useState, useEffect } from "react";
/* Component */
import TabSelector from "./TabSelector"
import RadioItem from "./RadioItem"
/* CSS Module */
import styles from "../../css/module/common/BackgroundSettingEffect.module.css";

const RadioList = ({ title, children }) => {
  const [radioActive, setRadioActive] = useState(false);
  return (
    <div className={`${styles.radio__wrap} ${styles["active"]}`}>
      <p>{title}</p>
      {children}
    </div>
  )
}

export default RadioList;