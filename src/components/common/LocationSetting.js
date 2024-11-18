/* Import */
import { useContext } from "react";
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

const LocationSetting = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const locationDataChangeHandler = (e, infoType) => {
    const { name, value } = e.target;
    setBasicInfoList(prev => ({
      ...prev,
      [infoType]: {
        ...prev[infoType],
        [name]: value
      }
    }))
  }
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="예식장 명">
            <LocationSettingName 
              name="placeName" 
              locationValue={basicInfoList.placeInfo.placeName} 
              onChange={(e) => locationDataChangeHandler(e, "placeInfo")}
            />
          </CommonItemContent>

          <CommonItemContent title="층과 홀">
            <LocationSettingName 
              name="placeDetail" 
              locationValue={basicInfoList.placeInfo.placeDetail} 
              onChange={(e) => locationDataChangeHandler(e, "placeInfo")}
            />
          </CommonItemContent>

          <CommonItemContent title="주소" multi={true}>
            <LocationSettingAddress />
          </CommonItemContent>

          <CommonItemContent title="약도 첨부">
            <LocationSettingFile />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>

      <TrafficSetting />
    </CommonOptionWrapper>
  )
}

export default LocationSetting;