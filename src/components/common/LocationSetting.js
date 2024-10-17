/* Import */
import { useRef, useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import LocationSettingAddress from "./LocationSettingAddress.js";
import LocationSettingName from "./LocationSettingName.js";
import LocationSettingFile from "./LocationSettingFile.js";
import TrafficSetting from "./TrafficSetting.js";
/* CSS Module */
// import styles from "../../css/module/common/BasicInfomationSettingDate.module.css";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const LocationSetting = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="예식장 명">
            <LocationSettingName data="name" locationValue={basicInfoList.placeInfo.placeName} />
          </CommonItemContent>

          <CommonItemContent title="층과 홀">
            <LocationSettingName data="place" locationValue={basicInfoList.placeInfo.placeDetail} />
          </CommonItemContent>

          <CommonItemContent title="주소" multi={true}>
            <LocationSettingAddress />
          </CommonItemContent>

          <CommonItemContent title="약도 첨부">
            <LocationSettingFile></LocationSettingFile>
          </CommonItemContent>
        </CommonItemWrapper>

        {/* <CommonItemWrapper>
          
        </CommonItemWrapper> */}

        {/* <CommonItemWrapper> */}
          {/* 멀티 구분도 필요 */}
          
        {/* </CommonItemWrapper> */}

        {/* <CommonItemWrapper>
          
        </CommonItemWrapper> */}
      </CommonOptionContent>

      <TrafficSetting />
    </CommonOptionWrapper>
  )
}

export default LocationSetting;