/* Import */
import { useCallback, useContext, useEffect } from "react";
// CSS
import styles from "../../css/module/layout/MobileSettingButtonWrapper.module.scss"
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const MobileSettingButtonWrapper = ({ id, position, top }) => {
  const { isMobile, settingList, selectSettingList, openSettingTab, setOpenSettingTab } = useContext(SetContext);
  const buttonTitleChanger = useCallback((id) => {
    const content = settingList.find((item) => item.itemId === id);
    return content.itemTitle; 
  }, [settingList, id]);

  return (
    openSettingTab ? null :
    <div 
      className={`
        ${styles.wrapper} 
        ${position === "absolute" ? styles.absolute : styles.static}
      `}
      style={{top: position === "absolute" ? top : "unset"}}
    >
      <div 
        className={`
          ${styles.mobile__setting} 
          ${selectSettingList.includes(id) === -1 ? styles.disable : ""}
        `}
        onClick={() => {
          if(isMobile) {
            setOpenSettingTab(id);
          }
        }}
      >
        {
          selectSettingList.includes(id) && id !== "settingLetter" && id !== "settingDate" && id !== "settingLocation" ?
          <input 
            type="checkbox" 
            checked={selectSettingList.includes(id)}
            onClick={(e) => {
              e.stopPropagation();
            }}
          /> : null
        }
        <span>{buttonTitleChanger(id)}</span>
      </div>
    </div>
  )
}

export default MobileSettingButtonWrapper;