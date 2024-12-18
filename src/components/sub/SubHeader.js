/* import */
import { useContext } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubHeader.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import logoImg from "../../img/main/logo.svg";
import myInfo from "../../img/icon/icon_info.png";

const SubHeader = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.sub__header}>
      <div className={styles.sub__header_wrapper}>
        <Link to="/Manager" className={styles.logo}>
          <img src={logoImg} alt="시집가는 날" />
        </Link>
        <ul className={styles.sub__menu}>
          <li><Link to="/Produce">청첩장 만들기</Link></li>
          {/* <li><Link to="/">감사장 만들기</Link></li> */}
          <li><Link to="/Manager" className={styles.active}>제작 관리</Link></li>
          <li><Link to="/Produce">예식순서</Link></li>
          <li><Link to="/Produce">공지사항</Link></li>
          <li><Link to="/Produce">자주하는 질문</Link></li>
        </ul>
        <ul className={styles.sub__tool}>
          <li><Link tp="/"><img src={myInfo} alt="" /><span>정보수정</span></Link></li>
          <li><Link tp="/"><span>로그아웃</span></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default SubHeader;