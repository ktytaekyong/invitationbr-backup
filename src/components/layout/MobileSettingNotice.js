/* import */
import { useContext } from "react";
import { useLocation } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/layout/MobileSettingNotice.module.scss";
// Context
import { SetContext } from "../../store/option-set-context.js";

const MobileSettingNotice = ({ theme }) => {
  const previewLocation = useLocation();
  const isTargetPage = previewLocation.pathname === "/Preview";

  const { isMobile } = useContext(SetContext);
  return (
    !isTargetPage && isMobile ?
    <p className={`${styles.mobile__setting_notice} ${styles.theme}`}>텍스트, 이미지를 추가하고 편집할 수 있습니다. <br />선택 항목은 체크박스 표시가 있습니다.</p>
    : null
  )
}

export default MobileSettingNotice;