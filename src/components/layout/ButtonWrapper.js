/* Import */
import React from "react";
/* Component */
import Button from "./Button";
/* CSS Module */
import styles from "../../css/module/layout/ButtonWrapper.module.css";

const ButtonWrapper = ({ children, styleType }) => {
  return (
    <div className={`${styles.button__wrapper} ${styleType === "center" ? styles["center"] : null}`}>
      {children}
    </div>
  )
}

export default ButtonWrapper;