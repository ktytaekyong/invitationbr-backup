/* Import */
import { useState, useEffect, useContext, useRef } from "react";
/* Component */
import NoticeTItem from "./NoticeTItem.js";
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/NoticeD.module.scss";
/* Image */
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const NoticeD = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const [isActive, setIsActive] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.notice} ${styles.style_theme_1}`}>
      <div className={styles.notice__wrap}>
        <HeadLine title="공지사항" content="notice" />
        <div className={styles.notice__content}>
          <div className={styles.content}>
            <div className={styles.title}>
              <p>답례품 안내</p>
            </div>
            <p>식사를 못하고 가시는 분들을 위해 피로연 출구에<br />
            작은 선물을 준비했으니 잊지 마시고 챙겨 가세요.</p>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeD;