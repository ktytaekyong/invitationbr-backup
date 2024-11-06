/* Import */
import React, { useEffect } from "react";
/* CSS Module */
import styles from "../../css/module/layout/Button.module.scss";

const Button = ({ type, styleType, content, onClick, className }) => {
  // props.styleType
  // useEffect(()=>{
  //   console.log(styleType, onClick);
  // }, [])
  return (
    <button type={type} className={`${styles.btn} ${styles[styleType]} ${className ? className : ""}`} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button;