/* Import */
import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
/* Component */
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Footer.module.scss";
/* Image */
import footerLogo from "../../img/footer/footer_logo.png";
import iconShareKakao from "../../img/icon/icon_share_kakao.png";
import iconShareUrl from "../../img/icon/icon_share_url.png";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const Footer = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const [isActive, setIsActive] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.footer}`}>
      <div className={styles.footer__copy}>
        <div className={styles.footer__copy_wrap}>
          <Link to="#" onClick={(e => e.preventDefault())}>
            <img src={iconShareKakao} alt="" />
            <p>카카오톡 공유하기</p>
          </Link>
          <Link to="#" onClick={(e => e.preventDefault())}>
            <img src={iconShareUrl} alt="" />
            <p>링크주소 복사하기</p>
          </Link>
        </div>
      </div>
      <div className={styles.footer__content}>
        <div className={styles.footer__content_wrap}>
          <div className={styles.logo}>
            <img src={footerLogo} alt="" />
          </div>
          <p>Copyright © Weddingday All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;