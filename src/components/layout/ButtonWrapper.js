/* Import */
import React from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/layout/ButtonWrapper.module.scss";

const ButtonWrapper = ({ children, styleType }) => {
  return (
    <div className={`${styles.button__wrapper}
      ${styleType === "center" ? styles["center"] : null} 
      ${styleType === "centerfill" ? styles["centerfill"] : null}`}
    >
      {children}
    </div>
  )
}

export default ButtonWrapper;