/* Import */
import { useState, useEffect } from "react";
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
/* CSS Module */
// import styles from "../../css/module/common/IntroPhotoSetting.module.css";

const BasicInfomationSetting = () => {
  const [isActive, setIsActive] = useState(0);
  const [isActiveTab, setIsActiveTab] = useState(0);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }
  const setActiveTabHandler = (idx) => {
    setIsActiveTab(idx);
  }
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="신랑" essential={true}>
            <BasicInfomationSettingName></BasicInfomationSettingName>
          </CommonItemContent>

          <CommonItemContent title="신부" essential={true}>
            <BasicInfomationSettingName></BasicInfomationSettingName>
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>

      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="예식일">
            <BasicInfomationSettingDate data="date"></BasicInfomationSettingDate>
          </CommonItemContent>

          <CommonItemContent title="예식시간">
            <BasicInfomationSettingDate data="time"></BasicInfomationSettingDate>
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>

      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="예식장 명">
            <BasicInfomationSettingPlace data="name"></BasicInfomationSettingPlace>
          </CommonItemContent>
          
          <CommonItemContent title="층과 홀">
            <BasicInfomationSettingPlace data="place"></BasicInfomationSettingPlace>
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