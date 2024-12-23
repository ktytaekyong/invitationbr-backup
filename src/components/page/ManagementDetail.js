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
const ManagementDetail = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.management}>
      <SubTitle 
        type="mng"
        subTitle="제작 관리" 
        subContent=""
      />
      
    </div>
  )
}

export default ManagementDetail;