/* Import */
import { useContext } from "react";
import { DataChanger_NestedObject } from '../../utils/helpers';
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import DateSettingImage from "./DateSettingImage.js";
import DateSettingCheckbox from "./DateSettingCheckbox.js";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";
import { SetContext } from "../../store/option-set-context.js";

const dateHourList = [
  {itemKey: 8, itemName: "오전 8시"}, {itemKey: 9, itemName: "오전 9시"}, {itemKey: 10, itemName: "오전 10시"}, {itemKey: 11, itemName: "오전 11시"}, {itemKey: 12, itemName: "오후 12시"}, {itemKey: 13, itemName: "오후 1시"}, {itemKey: 14, itemName: "오후 2시"}, {itemKey: 15, itemName: "오후 3시"}, {itemKey: 16, itemName: "오후 4시"}, {itemKey: 17, itemName: "오후 5시"}, {itemKey: 18, itemName: "오후 6시"}, {itemKey: 19, itemName: "오후 7시"}, {itemKey: 20, itemName: "오후 8시"}, {itemKey: 21, itemName: "오후 9시"}
];
const dateMinuteList = [
  {itemKey: 0, itemName: "정각"}, {itemKey: 10, itemName: "10분"}, {itemKey: 20, itemName: "20분"}, {itemKey: 30, itemName: "30분"}, {itemKey: 40, itemName: "40분"}, {itemKey: 50, itemName: "50분"}
];

// C: 예식 일시
const DateSetting = () => {
  const { isMobile } = useContext(SetContext);
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="예식일">
            <input 
              type="date" 
              id="DateInfoDate" 
              name="date" 
              onChange={(e) => DataChanger_NestedObject(e, "dateInfo", setBasicInfoList)} 
              value={basicInfoList.dateInfo.date} 
            />
          </CommonItemContent>

          <CommonItemContent title="예식시간" wrap={isMobile}>
            <OptionSelector 
              selectID="DateInfoHour" 
              selectName="hour"
              listName={dateHourList} 
              value={basicInfoList.timeInfo.hour} 
              onChange={(e) => DataChanger_NestedObject(e, "timeInfo", setBasicInfoList)} 
            />
            <OptionSelector 
              selectID="DateInfoMin" 
              selectName="min" 
              listName={dateMinuteList} 
              value={basicInfoList.timeInfo.min} 
              onChange={(e) => DataChanger_NestedObject(e, "timeInfo", setBasicInfoList)} 
              styleType={"minute__selector"} 
            />
          </CommonItemContent>
          
          <DateSettingImage />
        </CommonItemWrapper>
      </CommonOptionContent>

      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="옵션">
            <DateSettingCheckbox />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default DateSetting;