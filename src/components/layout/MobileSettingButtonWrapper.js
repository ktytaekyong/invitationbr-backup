/* Import */
import { useCallback, useContext } from "react";
// CSS
import styles from "../../css/module/layout/MobileSettingButtonWrapper.module.scss"
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const MobileSettingButtonWrapper = ({ id, position, top }) => {
  const { isMobile, settingList, basicSettingList, selectSettingList, setSelectSettingList, openSettingTab, setOpenSettingTab } = useContext(SetContext);
  const buttonTitleChanger = useCallback((id) => {
    const content = settingList.find((item) => item.itemId === id);
    return content.itemTitle; 
  }, [settingList, id]);
  const changeSettingHandler = (id) => {
    setSelectSettingList(prevList => {
      if(selectSettingList.includes(id)) {
        return prevList.filter(item => item !== id);
      } else {
        return [...prevList, id];
      }
    });
  };
  return (
    openSettingTab ? null :
    <div 
      className={`
        ${styles.wrapper} 
        ${position === "absolute" ? styles.absolute : styles.static}
        ${selectSettingList.includes(id) || basicSettingList.includes(id) ? "" : styles.disable}
      `}
      style={{top: position === "absolute" ? top : "unset"}}
    >
      <div 
        className={`
          ${styles.mobile__setting}
          ${selectSettingList.includes(id) || basicSettingList.includes(id) ? "" : styles.disable}
        `}
        onClick={(e) => {
          if (isMobile && e.currentTarget.classList.contains(styles.disable)) {
            e.preventDefault(); 
            return; 
          }
          setOpenSettingTab(id);
        }}
      >
        {settingList.map((item) => (
          (item.itemEssential === false && item.itemId === id && id !== "settingLetter" && id !== "settingDate" && id !== "settingLocation" ?
            <input 
              key={item.itemId + item.itemEssential}
              type="checkbox" 
              checked={selectSettingList.includes(id)}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={() => {
                changeSettingHandler(id);
              }}
            /> : null
          )))
        }
        <span>{buttonTitleChanger(id)}</span>
      </div>
    </div>
  )
}

export default MobileSettingButtonWrapper;