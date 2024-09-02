/* Import */
import React from "react";
/* CSS Module */
import styles from "../../css/module/layout/Button.module.css";

const Button = ({ type, styleType, content }) => {
  // props.styleType
  return (
    <button type={type} className={`${styles.btn} ${styles[styleType]}`}>
      {content}
    </button>
  )
}

export default Button;