/* Import */
import React from "react";
/* Component */
import ProduceItem from "../common/ProduceItem";
import OptionTabFix from "../common/OptionTabFix";

const ProduceList = () => {
  return (
    <ul className="produce__list">
      <ProduceItem itemTitle="고정 탭 설정" itemContent={<OptionTabFix />}/>
      <ProduceItem itemTitle="배경" />
    </ul>
  )
}

export default ProduceList;