/* Import */
import { useContext } from "react";
import { DataChanger_NestedObject } from "../../utils/helpers.js";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import LocationSettingAddress from "./LocationSettingAddress.js";
import LocationSettingName from "./LocationSettingName.js";
import LocationSettingFile from "./LocationSettingFile.js";
import TrafficSetting from "./TrafficSetting.js";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

// C: 오시는 길 편집
const LocationSetting = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="예식장 명">
            <LocationSettingName 
              name="placeName" 
              locationValue={basicInfoList.placeInfo.placeName} 
              onChange={(e) => DataChanger_NestedObject(e, "placeInfo", setBasicInfoList)}
            />
          </CommonItemContent>
          <CommonItemContent title="층과 홀">
            <LocationSettingName 
              name="placeDetail" 
              locationValue={basicInfoList.placeInfo.placeDetail} 
              onChange={(e) => DataChanger_NestedObject(e, "placeInfo", setBasicInfoList)}
            />
          </CommonItemContent>
          <CommonItemContent title="주소" multi={true}>
            <LocationSettingAddress
              onChange={(e) => DataChanger_NestedObject(e, "placeInfo", setBasicInfoList)}
            />
          </CommonItemContent>
          <CommonItemContent title="약도 첨부">
            <LocationSettingFile />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>

      {/* {isMobile ? null : <TrafficSetting />} */}
      <TrafficSetting />
    </CommonOptionWrapper>
  )
}

export default LocationSetting;