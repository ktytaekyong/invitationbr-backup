/* Import */
import { useContext } from "react";
import { DataChanger_NestedObject } from "../../utils/helpers.js";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import BasicInfomationSettingName from "./BasicInfomationSettingName.js";
import BasicInfomationSettingDate from "./BasicInfomationSettingDate.js";
import BasicInfomationSettingPlace from "./BasicInfomationSettingPlace.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

// C: 기본 정보 편집
const BasicInfomationSetting = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="신랑" essential={true}>
            <BasicInfomationSettingName 
              genderCode="M"
              nameInfo={basicInfoList.groomInfo}
              onChange={(e) => DataChanger_NestedObject(e, "groomInfo", setBasicInfoList)}
            />
          </CommonItemContent>
          <CommonItemContent title="신부" essential={true}>
            <BasicInfomationSettingName 
              genderCode="F" 
              nameInfo={basicInfoList.brideInfo} 
              onChange={(e) => DataChanger_NestedObject(e, "brideInfo", setBasicInfoList)} 
            />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>

      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="예식일">
            <BasicInfomationSettingDate 
              inputType="date"
              dateInfo={basicInfoList.dateInfo} 
              onChange={(e) => DataChanger_NestedObject(e, "dateInfo", setBasicInfoList)}
            />
          </CommonItemContent>

          <CommonItemContent title="예식시간">
            <BasicInfomationSettingDate 
              inputType="time" 
              timeInfo={basicInfoList.timeInfo}
              onChange={(e) => DataChanger_NestedObject(e, "timeInfo", setBasicInfoList)}
            />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>

      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="예식장 명">
            <BasicInfomationSettingPlace
              inputType="placeName"
              placeInfo={basicInfoList.placeInfo}
              onChange={(e) => DataChanger_NestedObject(e, "placeInfo", setBasicInfoList)}
            />
          </CommonItemContent>
          
          <CommonItemContent title="층과 홀">
            <BasicInfomationSettingPlace 
              placeInfo={basicInfoList.placeInfo}
              onChange={(e) => DataChanger_NestedObject(e, "placeInfo", setBasicInfoList)}
            />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>

      <SettingNotice>
        <SettingNoticeContent>신랑/신부 이름은 필수 정보이며 미 입력 시 저장되지 않습니다.</SettingNoticeContent>
        <SettingNoticeContent>인트로 화면의 문구를 변경하시려면 기본 정보 입력칸이 아닌 인트로 사진 항목의 문구 입력칸에서 변경해 주세요.</SettingNoticeContent>
      </SettingNotice>
    </CommonOptionWrapper>
  )
}

export default BasicInfomationSetting;