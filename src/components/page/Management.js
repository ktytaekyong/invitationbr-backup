/* import */
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
/* CSS */
import styles from "../../css/module/page/Management.module.scss";
/* Component */
import SubTitle from "../sub/SubTitle.js";
import SubTitleTab from "../sub/SubTitleTab.js";
import SubTitleNotice from "../sub/SubTitleNotice.js";
import ManageList from "../sub/ManageList.js";
// Context
import { SetContext } from "../../store/option-set-context.js";

const tabList = [
  {
    title: "청첩장 관리",
    link: "/Manager",
    list: ""
  }, 
  // {
  //   title: "감사장 관리",
  //   link: ""
  // }, 
]
const noticeList = [
  "제작한 청첩장을 확인하고 수정할 수 있습니다.",
  "청첩장을 복사하여 혼주나 친구/지인에 맞는 템플릿으로 변경할 수 있습니다.",
  "청첩장은 예식일로부터 <b>30일 후에 자동 삭제</b>됩니다."
]
const Management = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <div>
      <SubTitle 
        type="mng"
        subTitle="제작 관리" 
        subContent=""
      />
      {/* <SubTitleTab 
        tabList={tabList}
      /> */}
      <SubTitleNotice 
        noticeList={noticeList}
      />
      <ManageList></ManageList>
    </div>
  )
}

export default Management;