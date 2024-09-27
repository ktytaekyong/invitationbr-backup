/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import DateSettingImage from "./DateSettingImage.js";
import DateSettingCheckbox from "./DateSettingCheckbox.js";
import Button from "../layout/Button.js";
/* CSS Module */

const dateHourDistList = ["오전", "오후"];
const dateHourList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const dateMinuteList = [0, 10, 20, 30, 40, 50];

const DateSetting = () => {
  return (
    <div className="content__wrapper">
      <ul className="option__list">
        <CommonItemWrapper>
          <CommonItemContent title="예식일">
            <input type="date" name="" id="" />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="예식시간">
            <OptionSelector selectID="DateHourSelect" listName={dateHourList} type="hour" hour={dateHourDistList}></OptionSelector>
            <OptionSelector selectID="DateMinuteSelect" listName={dateMinuteList} styleType="minute__selector" type="minute"></OptionSelector>
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="이미지" multi={true}>
            <DateSettingImage />
          </CommonItemContent>
        </CommonItemWrapper>
      </ul>

      <ul className="option__list">
        <CommonItemWrapper>
          <CommonItemContent title="옵션">
            <DateSettingCheckbox />
          </CommonItemContent>
        </CommonItemWrapper>
      </ul>
    </div>
  )
}

export default DateSetting;