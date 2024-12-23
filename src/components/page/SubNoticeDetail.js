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
import SubContent from "../sub/SubContent.js";
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

const noticeList = [
  {
    src: "/Notice/Detail",
    type: "공지",
    title: "고객 신뢰도 1위 프리미엄 브랜드상 수상",
    file: "fileSrc",
    date: "2024-12-03"
  },
]

const SubNotice = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.sub__notice}>
      <SubTitle 
        subTitle="공지사항" 
        subContent="서비스에 대한 주요 공지사항을 확인하세요."
        subPhoto={"/img/sub/sub_notice.png"}
      />
      <SubWrapper>
        <SubSideMenu menuList={menuList}></SubSideMenu>
        <SubContent item={noticeList[0]}></SubContent>
      </SubWrapper>
    </div>
  )
}

export default SubNotice;