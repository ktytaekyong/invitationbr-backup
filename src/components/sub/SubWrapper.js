/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubWrapper.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */

const SubWrapper = ({ children }) => {
  return (
    <div className={styles.sub__wrapper}>{children}</div>
  )
}

export default SubWrapper;