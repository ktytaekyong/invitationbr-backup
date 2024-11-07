/* Import */
import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
/* Component */
import Toast from "../layout/Toast.js";
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
  const [open, setOpen] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const copyAccountHandler = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      handleClick();
    } catch (error) {
      console.error("복사에 실패했습니다:", error); 
    }
  };
  return (
    <div className={`${styles.footer}`}>
      {
        ReactDOM.createPortal(<Toast type="copy" open={open} setOpen={setOpen} message="주소가 복사되었습니다." />, document.body)
      }
      <div className={styles.footer__copy}>
        <div className={styles.footer__copy_wrap}>
          <Link to="#" onClick={(e => e.preventDefault())}>
            <img src={iconShareKakao} alt="" />
            <p>카카오톡 공유하기</p>
          </Link>
          <Link to="#" onClick={() => copyAccountHandler(window.location.href)}>
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