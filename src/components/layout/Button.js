/* Import */
import React from "react";
/* CSS Module */
import styles from "../../css/module/layout/Button.module.scss";

const Button = ({ type, styleType, content, onClick, className }) => {
  // props.styleType
  return (
    <button type={type} className={`${styles.btn} ${styles[styleType]} ${className}`} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button;