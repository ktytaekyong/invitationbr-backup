/* Import */
import React from "react";
/* Component */
import Button from "./Button";
/* CSS Module */
import styles from "../../css/module/layout/ButtonWrapper.module.css";

const ButtonWrapper = ({ children }) => {
  return (
    <div className={styles.button__wrapper}>
      {children}
    </div>
  )
}

export default ButtonWrapper;