/* Import */
import { useEffect } from "react";
/* CSS Module */
import styles from "../../css/module/common/OptionBackgroundSelector.module.css";

// useEffect

const colorList = ["#000", "#EEE"];
const OptionBackgroundSelector = () => {
  return (
    <ul className={styles.bg__selector}>
      {colorList.map((item, idx) => (
        <li className={styles.bg__item} style={{backgroundColor: item}} key={item + idx}></li>
      ))}
    </ul>
  )
}

export default OptionBackgroundSelector;