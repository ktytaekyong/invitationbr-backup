/* Import */
import { useCallback, useContext, useEffect } from "react";
// Component
import Button from "./Button"
// CSS
import styles from "../../css/module/layout/MobileSettingButtonWrapper.module.scss"
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const MobileSettingButtonWrapper = ({ id, position, top }) => {
  const { isMobile, settingList, openSettingTab, setOpenSettingTab } = useContext(SetContext);
  const buttonTitleChanger = useCallback((id) => {
    const content = settingList.find((item) => item.itemId === id);
    return content.itemTitle; 
  }, [settingList, id]);
  return (
    openSettingTab ? null :
    <div 
      className={`${styles.wrapper} ${position === "absolute" ? styles.absolute : styles.static}`}
      style={{top: position === "absolute" ? top : "unset"}}
    >
      <Button 
        type="button" 
        content={buttonTitleChanger(id)} 
        styleType="mobile__setting"
        onClick={() => {
          if(isMobile) setOpenSettingTab(id);
        }}
      />
    </div>
  )
}

export default MobileSettingButtonWrapper;