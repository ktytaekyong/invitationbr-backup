/* import */
import { useContext } from "react";
/* CSS Module */
import styles from "../../css/module/layout/SettingNotice.module.scss";
// Context
import { SetContext } from "../../store/option-set-context.js";

const SettingNotice = ({ children, mobile }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <ul className={`${isMobile && mobile ? styles.mobile__notice : ""} ${styles.notice__wrapper}`} >
      {children}
    </ul>
  )
}

export default SettingNotice;