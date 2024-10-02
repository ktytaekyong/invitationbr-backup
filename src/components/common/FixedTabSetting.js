/* Import */
import React from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";
import FixedTabSettingList from "./FixedTabSettingList";

const FixedTabSetting = () => {
  return (
    <CommonOptionWrapper>

      <SettingNotice>
        <SettingNoticeContent>최대 4개 등록가능하며, 체크 순서대로 노출됩니다. 체크하지 않으면 화면 상단에 고정 탭 메뉴가 비노출 됩니다.</SettingNoticeContent>
      </SettingNotice>

      <CommonOptionContent>
        <CommonItemWrapper>
          <FixedTabSettingList />
        </CommonItemWrapper>
      </CommonOptionContent>
      
    </CommonOptionWrapper>
  )
}

export default FixedTabSetting;