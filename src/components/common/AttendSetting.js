/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import BackgroundSettingTheme from "./BackgroundSettingTheme.js";
import BackgroundSettingEffect from "./BackgroundSettingEffect.js";
import BackgroundSettingCheckbox from "./BackgroundSettingCheckbox.js";
/* CSS Module */

const themeList = [
  {
    itemName: "[베이직] 모던 1",
    itemKey: "modern1"
  },
  {
    itemName: "[베이직] 모던 2",
    itemKey: "modern2"
  },
]

const fontList = [
  {
    itemName: "맑은 고딕",
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

const AttendSetting = () => {
  return (
    <div className="content__wrapper">
      <div className="option__list">
        <CommonItemWrapper>
          <CommonItemContent title="테마">
            <OptionSelector listName={themeList} />
          </CommonItemContent>
          <BackgroundSettingTheme />
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="폰트">
            <OptionSelector listName={fontList} />
            <OptionSelector listName={fontWeightList} />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="효과">
            <BackgroundSettingEffect />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="옵션">
            <BackgroundSettingCheckbox></BackgroundSettingCheckbox>
          </CommonItemContent>
        </CommonItemWrapper>
      </div>
    </div>
  )
}

export default AttendSetting;