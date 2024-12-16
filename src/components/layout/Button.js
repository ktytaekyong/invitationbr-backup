/* Import */
import { useEffect } from "react";
/* CSS Module */
import styles from "../../css/module/layout/Button.module.scss";
// Image
import { ReactComponent as TabBtn } from "../../img/icon/icon_header_menu.svg";

const Button = ({ type, styleType, content, onClick, className }) => {
  return (
    <button type={type} className={`${styles.btn} ${styles[styleType]} ${className ? className : ""}`} onClick={onClick}>
      {styleType === "tab2" ? <TabBtn /> : null}
      {content}
    </button>
  )
}

export default Button;