/* Import */
import React from "react";
/* Component */
import OptionTabFixList from "./OptionTabFixList";

const OptionTabFix = () => {
  return (
    <div className="content__wrapper">
      <p>고정 탭 설정은 최대 4개 등록가능하며, 체크 순서대로 노출됩니다. 체크하지 않으면 예시로 선택된 항목이 노출됩니다.</p>
      <OptionTabFixList></OptionTabFixList>
    </div>
  )
}

export default OptionTabFix;