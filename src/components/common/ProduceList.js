/* Import */
import React from "react";
/* Component */
import ProduceItem from "../common/ProduceItem";
import OptionTabFix from "../common/OptionTabFix";
import OptionBackground from "../common/OptionBackground";
import OptionIntroList from "./OptionIntroList";

const itemList = [
  {
    itemTitle: "고정 탭 설정",
    itemContent: <OptionTabFix />,
  }, 
  {
    itemTitle: "배경",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "인트로 화면",
    itemContent: <OptionIntroList />,
  }, 
  {
    itemTitle: "인트로 사진",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "신랑/신부측 정보",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "모시는 글",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "예식 일시",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "교통수단",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "갤러리",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "동영상",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "마음 전하기",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "안내사항 (탭형)",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "안내사항 (분리형)",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "배경음악",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "방명록",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "참석의사 (RSVP)",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "하단 글귀",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "카카오톡 공유 썸네일",
    itemContent: <OptionBackground />,
  }, 
  {
    itemTitle: "메뉴 순서 변경",
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