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
    title: "예식 전"
  },
  {
    src: "/",
    title: "예식"
  },
  {
    src: "/",
    title: "예식 후"
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
]

const SubWedding = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.sub__notice}>
      <SubTitle 
        subTitle="예식 순서" 
        subContent="결혼식 진행순서에 대해 안내 드립니다."
        subPhoto={"/img/sub/sub_wedding.png"}
      />
      <SubWrapper>
        <SubSideMenu menuList={menuList}></SubSideMenu>
        <SubList list={noticeList}></SubList>
      </SubWrapper>
    </div>
  )
}

export default SubWedding;