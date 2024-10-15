/* Import */
import { useState, useEffect, useContext, useRef } from "react";
/* Component */
import NoticeTItem from "./NoticeTItem.js";
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
        <HeadLine title="안내사항" content="information" />
        <div className={styles.notice__content}>
          <NoticeTItem></NoticeTItem>
          <div className={styles.content}>
            <img src="" alt="" />
            <p>포토부스가 예식장 좌측에 설치될 예정이오니<br />
            바쁘시더라도 가벼운 마음으로 즐겨주세요~</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeT;