/* Import */
import { useState, useEffect } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/common/RadioList.module.scss";

const RadioList = ({ title, children }) => {
  const [radioActive, setRadioActive] = useState(false);
  return (
    <div className={`${styles.radio__wrap} ${styles["active"]}`}>
      {
        title ?
        <p>{title}</p>
        :
        null
      }
      {children}
    </div>
  )
}

export default RadioList;