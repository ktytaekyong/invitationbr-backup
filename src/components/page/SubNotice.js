/* import */
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
/* CSS */
import styles from "../../css/module/page/SubNotice.module.scss";
/* Component */
import SubTitle from "../sub/SubTitle.js";
import SubWrapper from "../sub/SubWrapper.js";
import SubSideMenu from "../sub/SubSideMenu.js";
import SubList from "../sub/SubList.js";
// Context
import { SetContext } from "../../store/option-set-context.js";

const menuList = [
  {
    src: "/",
    title: "전체"
  },
  {
    src: "/",
    title: "공지사항"
  },
  {
    src: "/",
    title: "안내사항"
  },
]

const SubNotice = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.SubNotice}>
      <SubTitle 
        subTitle="공지사항" 
        subContent="서비스에 대한 주요 공지사항을 확인하세요."
        subPhoto={"/img/sub/sub_notice.png"}
      />
      <SubWrapper>
        <SubSideMenu menuList={menuList}></SubSideMenu>
        <SubList></SubList>
      </SubWrapper>
    </div>
  )
}

export default SubNotice;