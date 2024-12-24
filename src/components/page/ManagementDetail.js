/* import */
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
/* CSS */
import styles from "../../css/module/page/ManagementDetail.module.scss";
/* Component */
import SubTitle from "../sub/SubTitle.js";
import SubWrapper from "../sub/SubWrapper.js";
import SubTitleTab from "../sub/SubTitleTab.js";
import SubTitleNotice from "../sub/SubTitleNotice.js";
import SubMngItem from "../sub/SubMngItem.js";
import SubMngSearch from "../sub/SubMngSearch.js";
import SubMngList from "../sub/SubMngList.js";
// Context
import { SetContext } from "../../store/option-set-context.js";
// Img
import iconMngImg1 from "../../img/icon/icon_mng1.png";
import iconMngImg2 from "../../img/icon/icon_mng2.png";
import iconMngImg3 from "../../img/icon/icon_mng3.png";

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
    <div className={styles.mng__detail}>
      {isMobile ?
        null :
        <SubTitle 
          type="mng"
          subTitle="제작 관리" 
          subContent=""
        />
      }
      <h3 className={styles.mng__detail_title}>참석 여부 확인</h3>
      <ul className={styles.mng__detail_total}>
        <SubMngItem
          img={iconMngImg1}
          type="참석 가능"
        ></SubMngItem>
        <SubMngItem
          img={iconMngImg2}
          type="식사 가능"
        ></SubMngItem>
        <SubMngItem
          img={iconMngImg3}
          type="버스 탑승"
        ></SubMngItem>
      </ul>
      <SubMngSearch></SubMngSearch>
      <SubMngList></SubMngList>
    </div>
  )
}

export default ManagementDetail;