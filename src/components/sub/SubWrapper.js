/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubWrapper.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */

const SubWrapper = ({ children, column }) => {
  return (
    <div className={`${styles.sub__wrapper} ${column ? styles.column : ""}`}>{children}</div>
  )
}

export default SubWrapper;