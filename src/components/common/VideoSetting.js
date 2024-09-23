/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import BackgroundSettingTheme from "./BackgroundSettingTheme.js";
import BackgroundSettingEffect from "./BackgroundSettingEffect.js";
import CheckList from "./CheckList.js";
/* CSS Module */

const themeList = [
  {
    name: "[베이직] 모던 1",
    value: "modern1"
  },
  {
    name: "[베이직] 모던 2",
    value: "modern2"
  },
]

const fontList = [
  {
    name: "맑은 고딕",
    value: "font1"
  },
  {
    name: "돋움체",
    value: "font2"
  },
]

const fontWeightList = [
  {
    name: "보통",
    value: "400"
  },
  {
    name: "볼드",
    value: "600"
  },
]

const VideoSetting = () => {
  return (
    <div className="content__wrapper">
      <ul className="option__list">
        <CommonItemWrapper>
          <CommonItemContent title="테마">
            <OptionSelector listTitle={themeList} />
          </CommonItemContent>
          <BackgroundSettingTheme />
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="폰트">
            <OptionSelector listTitle={fontList} />
            <OptionSelector listTitle={fontWeightList} />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="효과">
            <BackgroundSettingEffect />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="옵션">
            <CheckList></CheckList>
          </CommonItemContent>
        </CommonItemWrapper>
      </ul>
    </div>
  )
}

export default VideoSetting;