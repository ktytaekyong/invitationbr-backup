/* Import */
import { useContext, useEffect } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import BackgroundSettingTheme from "./BackgroundSettingTheme.js";
import BackgroundSettingEffect from "./BackgroundSettingEffect.js";
import BackgroundSettingCheckbox from "./BackgroundSettingCheckbox.js";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const themeList = [
  {
    itemName: "[베이직] 모던",
    itemKey: "themeModernBasic"
  },
  // {
  //   itemName: "[베이직] 클래식",
  //   itemKey: "themeClassicBasic"
  // },
  // {
  //   itemName: "[일러스트] 모던",
  //   itemKey: "themeModernIllust"
  // },
  // {
  //   itemName: "[일러스트] 클래식",
  //   itemKey: "themeClassicIllust"
  // },
  {
    itemName: "심플",
    itemKey: "themeSimple"
  },
  {
    itemName: "플라워",
    itemKey: "themeFlower"
  },
];
const fontList = [
  {
    itemName: "서울한강",
    itemKey: "SeoulHangang"
  },
  {
    itemName: "프리텐다드",
    itemKey: "Pretendard"
  },
  {
    itemName: "돋움체",
    itemKey: "돋움체"
  },
  {
    itemName: "고딕체",
    itemKey: "고딕체"
  },
]
const fontSizeList = [
  {
    itemName: "보통",
    itemKey: "16px"
  },
  {
    itemName: "크게",
    itemKey: "19px"
  },
  {
    itemName: "작게",
    itemKey: "14px"
  }
]
const BackgroundSetting = () => {
  const { selectOptionList, isMobile } = useContext(SetContext);
  useEffect(() => {
    document.documentElement.style.setProperty('--font-family--theme', selectOptionList.fontFamily);
  }, [selectOptionList.fontFamily]);
  useEffect(() => {
    document.documentElement.style.setProperty('--font-size--base', selectOptionList.fontSize);
  }, [selectOptionList.fontSize]);
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-select-color', selectOptionList.backgroundColor);
  }, [selectOptionList.backgroundColor]);
  return (
    // 전체
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="테마" multi={isMobile}>
            <OptionSelector 
              selectID="themeSelector" 
              selectName="theme" 
              listName={themeList} 
              value={selectOptionList.theme} 
            />
            <BackgroundSettingTheme />
          </CommonItemContent>

          <CommonItemContent title="폰트" wrap={isMobile}>
            <OptionSelector 
              selectID="fontSelector" 
              selectName="fontFamily" 
              listName={fontList} 
              value={selectOptionList.fontFamily} 
            />
            <OptionSelector 
              selectID="fontSizeSelector" 
              selectName="fontSize" 
              listName={fontSizeList} 
              value={selectOptionList.fontSize} 
            />
          </CommonItemContent>

          <CommonItemContent title="효과" multi={true}>
            <BackgroundSettingEffect />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>

      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="옵션" multi={true}>
            <BackgroundSettingCheckbox />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>

    </CommonOptionWrapper>
  )
}

export default BackgroundSetting;