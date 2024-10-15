/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import NoticeTItem from "./NoticeTItem.js";
import HeadLine from "../layout/HeadLine.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Guestbook.module.scss";
/* Image */
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const Guestbook = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const [isActive, setIsActive] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.guestbook} ${styles.style_theme_1}`}>
      <div className={styles.guestbook__wrap}>
        <HeadLine title="방명록" content="message" />
        <div className={styles.guestbook__content}>
          <div className={styles.input__wrap}>
            <input type="text" placeholder="이름" />
            <input type="password" placeholder="비밀번호" />
            <textarea name="" id="" placeholder="축하메시지(100자 이내)"></textarea>
          </div>
          <ButtonWrapper styleType="center">
            <Button content="등록하기" styleType="invitation__reg"></Button>
          </ButtonWrapper>
          {
            <div className={styles.guest}>
              <ul className={styles.guest__list}>
                <li className={styles.guest__item}>
                  <p className={styles.name}>강하늘</p>
                  <p className={styles.content}>두분 결혼 너무 축하드립니다. 행복하세요 :)</p>
                  <div className={styles.tool}>
                    <p>2024.08.22</p>
                    <Button content="" styleType="invitation__guest_remove"></Button>
                  </div>
                </li>
                <li className={styles.guest__item}>
                  <p className={styles.name}>한가은</p>
                  <p className={styles.content}>대리님, 사진 너무 이쁘게 나왔어요!! <br />
                  결혼 진심으로 축하드려요~ 예식날 봬요♥</p>
                  <div className={styles.tool}>
                    <p>2024.08.22</p>
                    <Button content="" styleType="invitation__guest_remove"></Button>
                  </div>
                </li>
              </ul>
              <ButtonWrapper styleType="center">
                <Button content="더보기" styleType="invitation__gallery_view"></Button>
              </ButtonWrapper>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Guestbook;