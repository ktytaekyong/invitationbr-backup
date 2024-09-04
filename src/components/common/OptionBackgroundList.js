/* Component */
import OptionCommonItem from "./OptionCommonItem.js";
import OptionListWrapper from "./OptionListWrapper.js";
import OptionSelector from "./OptionSelector.js";
import OptionBackgroundSelector from "./OptionBackgroundSelector.js";
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
          <OptionSelector listTitle={themeList} />
        </OptionListWrapper>
      </OptionCommonItem>
      <OptionCommonItem>
        <OptionListWrapper title="효과">
        </OptionListWrapper>
      </OptionCommonItem>
      <OptionCommonItem>
        <OptionListWrapper title="옵션">
        </OptionListWrapper>
      </OptionCommonItem>
    </ul>
  )
}

export default OptionBackgroundList;