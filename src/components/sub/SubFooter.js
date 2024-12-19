/* import */
import { useContext } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubFooter.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import logoImg from "../../img/main/logo.svg";
import myInfo from "../../img/icon/icon_info.png";

const SubFooter = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <footer class={styles.sub__footer}>
      <div class={styles.sub__footer_wrapper}>
        <div class={styles.logo}>
          <img src={logoImg} alt="시집가는 날 로고" />
        </div>
        <div class={styles.info}>
          <ul>
            <li>대표이사 오준오</li>
            <li>사업자등록번호 604-81-37410</li>
            <li>boram7979@boram.com</li>
            <li>1588-7979</li>
          </ul>
          <p>서울특별시 중구 세종대로 73 태평로빌딩 23층~27층</p>
        </div>
        <ul class={styles.menu}>
          <li>
            <a href="#">이용약관</a>
          </li>
          <li>
            <a href="#">개인정보처리방침</a>
          </li>
        </ul>
        <p class={styles.copy}>
          Copyright © Weddingday All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default SubFooter;