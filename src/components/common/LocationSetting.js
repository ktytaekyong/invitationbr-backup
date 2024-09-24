/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import BackgroundSettingTheme from "./BackgroundSettingTheme.js";
import Button from "../layout/Button.js";
import LocationSettingCheckbox from "./LocationSettingCheckbox.js";
/* CSS Module */

const LocationSetting = () => {
  return (
    <div className="content__wrapper">
      <ul className="option__list">
        <CommonItemWrapper>
          <CommonItemContent title="예식장 명">
            <input type="text" />
          </CommonItemContent>
          <BackgroundSettingTheme />
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="층과 홀">
            <input type="text" />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="주소">
            <input type="text" />
            <Button content="검색"></Button>
            <div className="map"></div>
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="옵션">
            <LocationSettingCheckbox />
          </CommonItemContent>
        </CommonItemWrapper>
      </ul>
    </div>
  )
}

export default LocationSetting;