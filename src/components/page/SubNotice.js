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

const noticeList = [
  {
    src: "/Notice/Detail",
    type: "공지",
    title: "모바일 청첩장 서비스 시작",
    file: "",
    date: "2024-12-03"
  },
  {
    src: "/Notice/Detail",
    type: "공지",
    title: "모바일 청첩장 서비스 이용방법",
    file: "",
    date: "2024-12-03"
  },
  {
    src: "/Notice/Detail",
    type: "공지",
    title: "축하 화환 상품 추가",
    file: "",
    date: "2024-12-03"
  },
  {
    src: "/Notice/Detail",
    type: "안내",
    title: "운영 시간 조기 마감 안내",
    file: "",
    date: "2024-12-03"
  },
  {
    src: "/Notice/Detail",
    type: "공지",
    title: "12월 고객센터 휴무 안내(12/29. 12/30. 12/31)",
    file: "",
    date: "2024-12-03"
  },
  {
    src: "/Notice/Detail",
    type: "공지",
    title: "답례 상품 추가",
    file: "fileSrc",
    date: "2024-12-03"
  },
  {
    src: "/Notice/Detail",
    type: "공지",
    title: "축하 화환 주문 방법",
    file: "",
    date: "2024-12-03"
  },
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
    <div className={styles.SubNotice}>
      <SubTitle 
        subTitle="공지사항" 
        subContent="서비스에 대한 주요 공지사항을 확인하세요."
        subPhoto={"/img/sub/sub_notice.png"}
      />
      <SubWrapper>
        <SubSideMenu menuList={menuList}></SubSideMenu>
        <SubList list={noticeList}></SubList>

      </SubWrapper>
    </div>
  )
}

export default SubNotice;