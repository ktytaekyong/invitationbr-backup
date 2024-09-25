/* Import */
import React from "react";
/* Component */
import FixedTabSettingList from "./FixedTabSettingList";

const FixedTabSetting = () => {
  return (
    <div className="content__wrapper">
      <p>※ 최대 4개 등록가능하며, 체크 순서대로 노출됩니다. 체크하지 않으면 화면 상단에 고정 탭 
      메뉴가 비노출 됩니다.</p>
      <FixedTabSettingList />
    </div>
  )
}

export default FixedTabSetting;