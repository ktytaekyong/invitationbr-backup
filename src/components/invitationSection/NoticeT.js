/* Import */
import { useState, useEffect, useContext, useRef } from "react";
/* Component */
import Button from "../layout/Button.js";
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/NoticeT.module.scss";
/* Image */
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const NoticeT = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const [isActive, setIsActive] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.notice} ${styles.style_theme_1}`}>
      <div className={styles.notice__wrap}>
        <HeadLine title="안내사항" content="information"></HeadLine>
        <div className={styles.notice__content}>
          <div id="AccountM" className={styles.account__list}>
            <div className={styles.account__list_title} onClick={activeToggleHandler}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeT;