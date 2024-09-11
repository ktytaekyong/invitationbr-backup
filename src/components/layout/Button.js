/* Import */
import React from "react";
/* CSS Module */
import styles from "../../css/module/layout/Button.module.css";

const Button = ({ type, styleType, content, onClick }) => {
  // props.styleType
  return (
    <button type={type} className={`${styles.btn} ${styles[styleType]}`} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button;