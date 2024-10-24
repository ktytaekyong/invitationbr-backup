/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import BackgroundSettingTheme from "./BackgroundSettingTheme.js";
import BackgroundSettingEffect from "./BackgroundSettingEffect.js";
import BackgroundSettingCheckbox from "./BackgroundSettingCheckbox.js";
/* CSS Module */
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const themeList = [
  {
    itemName: "[베이직] 모던",
    itemKey: "themeModernBasic"
  },
  {
    itemName: "[베이직] 클래식",
    itemKey: "themeClassicBasic"
  },
  {
    itemName: "[일러스트] 모던",
    itemKey: "themeModernIllust"
  },
  {
    itemName: "[일러스트] 클래식",
    itemKey: "themeClassicIllust"
  },
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
    itemKey: "font1"
  },
  {
    itemName: "돋움체",
    itemKey: "font2"
  },
]
const fontWeightList = [
  {
    itemName: "보통",
    itemKey: "400"
  },
  {
    itemName: "볼드",
    itemKey: "600"
  },
]
const BackgroundSetting = () => {
  const { selectOptionList, setSelectOptionList } = useContext(SetContext);
  const optionChangeHandler = (option, type) => {
    setSelectOptionList((prev) => ({
      ...prev,
      [type]: option
    }))
    console.log(selectOptionList);
  }
  return (
    // 전체
    <CommonOptionWrapper>
      {/* 섹션 */}
      <CommonOptionContent>
        {/* 섹션 아이템 */}
        <CommonItemWrapper>
          <CommonItemContent title="테마">
            <OptionSelector 
              selectID="themeSelector" 
              selectName="themeSelector" 
              listName={themeList} 
              optionSet={(option) => optionChangeHandler(option, "theme")} 
              defaultValue={selectOptionList.theme}
              value={selectOptionList.theme} 
            />
            <BackgroundSettingTheme />
          </CommonItemContent>

          <CommonItemContent title="폰트">
            <OptionSelector listName={fontList} />
            <OptionSelector listName={fontWeightList} />
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