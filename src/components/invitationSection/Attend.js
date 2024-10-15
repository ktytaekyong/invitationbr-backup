/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import NoticeTItem from "./NoticeTItem.js";
import HeadLine from "../layout/HeadLine.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Attend.module.scss";
/* Image */
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const Attend = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const [isActive, setIsActive] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.attend} ${styles.style_theme_1}`}>
      <div className={styles.attend__wrap}>
        <HeadLine title="참석 의사 전달" content="rsvp" />
        <div className={styles.attend__content}>
          <p>
          한 분 한 분 정성껏 모실 수 있도록<br />
          참석 의사 전달 부탁 드립니다.
          </p>
          <ButtonWrapper styleType="center">
            <Button content="참석 의사 전달하기" styleType="invitation__attend"></Button>
          </ButtonWrapper>
        </div>
      </div>
    </div>
  )
}

export default Attend;