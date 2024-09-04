/* Import */
import { useState, useEffect } from "react";
/* CSS Module */
import styles from "../../css/module/common/OptionBackgroundSelector.module.css";

const colorList = ["#000", "#EEE"];
const OptionBackgroundSelector = () => {
  const [isActive, setIsActive] = useState(false);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }
  useEffect(() => {
    setIsActive(0);
  }, []);

  return (
    <ul className={styles.bg__selector}>
      {colorList.map((item, idx) => (
        <li className={`${styles.bg__item} ${isActive === idx ? styles["active"] : ""}`} 
        style={{backgroundColor: item}} 
        key={item + idx} id={"color" + idx} onClick={() => setActiveHandler(idx)} 
        ></li>
      ))}
    </ul>
  )
}

export default OptionBackgroundSelector;