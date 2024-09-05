/* Component */
import OptionCommonItem from "./OptionCommonItem.js";
import OptionListWrapper from "./OptionListWrapper.js";
import OptionSelector from "./OptionSelector.js";
import OptionBackgroundSelector from "./OptionBackgroundSelector.js";
import OptionEffectSelector from "./OptionEffectSelector.js";
import OptionCheckList from "./OptionCheckList.js";
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

const OptionBackgroundList = () => {
  return (
    <ul className="option__list">
      <OptionCommonItem>
        <OptionListWrapper title="테마">
          <OptionSelector listTitle={themeList} />
        </OptionListWrapper>
        <OptionBackgroundSelector />
      </OptionCommonItem>

      <OptionCommonItem>
        <OptionListWrapper title="폰트">
          <OptionSelector listTitle={fontList} />
          <OptionSelector listTitle={fontWeightList} />
        </OptionListWrapper>
      </OptionCommonItem>

      <OptionCommonItem>
        <OptionListWrapper title="효과">
          <OptionEffectSelector />
        </OptionListWrapper>
      </OptionCommonItem>

      <OptionCommonItem>
        <OptionListWrapper title="옵션">
          <OptionCheckList></OptionCheckList>
        </OptionListWrapper>
      </OptionCommonItem>
    </ul>
  )
}

export default OptionBackgroundList;