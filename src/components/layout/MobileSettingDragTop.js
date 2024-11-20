/* Import */
import { useCallback, useContext, useEffect } from "react";
// Component
import Button from "./Button"
// CSS
import styles from "../../css/module/layout/MobileSettingDragTop.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const MobileSettingDragTop = ({ id, position }) => {
  const { isMobile, settingList, openSettingTab, setOpenSettingTab } = useContext(SetContext);
  const buttonTitleChanger = useCallback((id) => {
    const content = settingList.find((item) => item.itemId === id);
    return content.itemTitle; 
  }, [settingList]);
  return (
    <div className={styles.drag__top}>
      <div className={styles.drag__divide}></div>
    </div>
  )
}

export default MobileSettingDragTop;