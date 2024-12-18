/* import */
import { useContext } from "react";
import { useLocation } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/layout/MobileSettingNotice.module.scss";
// Context
import { SetContext } from "../../store/option-set-context.js";

const MobileSettingNotice = () => {
  const previewLocation = useLocation();
  const isTargetPage = previewLocation.pathname === "/Produce/Preview";
  const { isMobile, selectOptionList } = useContext(SetContext);
  const noticeRenderer = () => {
    if(selectOptionList.theme === "themeModernBasic" 
      && (selectOptionList.introFillType === "basicTemplate1" 
      || selectOptionList.introFillType === "basicTemplate2"
      || selectOptionList.introFillType === "basicTemplate3"
      || selectOptionList.introFillType === "basicTemplate4")
    ) {
      return <p className={`${styles.mobile__setting_notice}`}>텍스트, 이미지를 추가하고 편집할 수 있습니다. <br />선택 항목은 체크박스 표시가 있습니다.</p>;
    } else if (selectOptionList.theme === "themeModernBasic"
      && (selectOptionList.introFillType === "fillTemplate1" 
      || selectOptionList.introFillType === "fillTemplate2"
      || selectOptionList.introFillType === "fillTemplate3"
      || selectOptionList.introFillType === "fillTemplate4")
    ) {
      return <p className={`${styles.mobile__setting_notice}`} style={{position: "absolute", top: "350px", left: "50%", width: "80%", transform: "translateX(-50%)", zIndex: "1", borderRadius: "4px", background: "rgba(255, 255, 255, 0.7)", padding: "10px 5px"}}>텍스트, 이미지를 추가하고 편집할 수 있습니다. <br />선택 항목은 체크박스 표시가 있습니다.</p>
    } else if (selectOptionList.theme === "themeSimple" || selectOptionList.theme === "themeFlower") {
      return <p className={`${styles.mobile__setting_notice}`} style={{position: "absolute", top: "80px", left: "50%", width: "80%", transform: "translateX(-50%)", zIndex: "1", borderRadius: "4px", background: "rgba(255, 255, 255, 0.7)", padding: "10px 5px"}}>텍스트, 이미지를 추가하고 편집할 수 있습니다. <br />선택 항목은 체크박스 표시가 있습니다.</p>
    }
  }
  return !isTargetPage && isMobile ? noticeRenderer() : null;
}

export default MobileSettingNotice;