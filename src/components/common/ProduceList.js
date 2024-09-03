/* Import */
import React from "react";
/* Component */
import ProduceItem from "../common/ProduceItem";
import OptionTabFix from "../common/OptionTabFix";
import OptionBackground from "../common/OptionBackground";

const itemList = [
  {
    itemTitle: "고정 탭 설정",
    itemContent: <OptionTabFix />,
  }, 
  {
    itemTitle: "배경",
    itemContent: <OptionBackground />,
  }
]

const ProduceList = () => {
  return (
    <ul className="produce__list">
      {itemList.map((item, index) => (
        <ProduceItem itemTitle={item.itemTitle} itemContent={item.itemContent} id={`produceItem${index}`} key={index} />
      ))}
    </ul>
  )
}

export default ProduceList;