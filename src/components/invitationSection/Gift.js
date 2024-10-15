/* Import */
import { useState, useEffect, useContext, useRef } from "react";
/* Component */
import Button from "../layout/Button.js";
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Gift.module.scss";
/* Image */
import iconGiftArrow from "../../img/icon/icon_gift_arrow.png";
import iconGiftKakao from "../../img/icon/icon_account_kakao.png";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const Gift = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };
  const activeToggleHandler2 = () => {
    setIsActive2(!isActive2);
  };

  // useEffect(() => {
  //   if(itemRef.current.id === "AccountM") {
  //     setTimeout(() => {
  //       setIsActive(true);
  //     }, 300);
  //   }
  // }, []);
  return (
    <div className={`${styles.gift} ${styles.style_theme_1}`}>
      <div className={styles.gift__wrap}>
        <HeadLine title="마음 전하기" content="account"></HeadLine>
        <div className={styles.gift__content}>
          <div id="AccountM" className={styles.account__list}>
            <div className={styles.account__list_title} onClick={activeToggleHandler}>
              <p>신랑측 계좌정보</p>
              <img src={iconGiftArrow} alt="" />
            </div>
            <div className={`${styles.account__list_content} ${isActive ? styles["active"] : ""}`}>
              <div className={styles.account__item}>
                <div className={styles.name}>
                  <p>신랑 <span>{`${basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname}`}</span></p>
                  <Button content="" styleType="invitation__kakao"></Button>
                  {/* <img src={iconGiftKakao} alt="" />   */}
                </div>
                <div className={styles.account}>
                  <p>토스 | <span>352-1212-5566-77</span></p>
                  <Button content="복사" styleType="invitation__copy"></Button>
                </div>
              </div>
              <div className={styles.account__item}>
                <div className={styles.name}>
                  <p>아버지 <span>{`${basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname}`}</span></p>
                  {/* <Button content="" styleType="invitation__kakao"></Button> */}
                </div>
                <div className={styles.account}>
                  <p>토스 | <span>352-1212-5566-77</span></p>
                  <Button content="복사" styleType="invitation__copy"></Button>
                </div>
              </div>
              <div className={styles.account__item}>
                <div className={styles.name}>
                  <p>어머니 <span>{`${basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname}`}</span></p>
                  {/* <Button content="" styleType="invitation__kakao"></Button> */}
                </div>
                <div className={styles.account}>
                  <p>토스 | <span>352-1212-5566-77</span></p>
                  <Button content="복사" styleType="invitation__copy"></Button>
                </div>
              </div>
            </div>
          </div>
          <div id="AccountF" className={styles.account__list}>
            <div className={styles.account__list_title} onClick={activeToggleHandler2}>
              <p>신부측 계좌정보</p>
              <img src={iconGiftArrow} alt="" />
            </div>
            <div className={`${styles.account__list_content} ${isActive2 ? styles["active"] : ""}`}>
              <div className={styles.account__item}>
                <div className={styles.name}>
                  <p>신랑 <span>{`${basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname}`}</span></p>
                  <Button content="" styleType="invitation__kakao"></Button>
                  {/* <img src={iconGiftKakao} alt="" />   */}
                </div>
                <div className={styles.account}>
                  <p>토스 | <span>352-1212-5566-77</span></p>
                  <Button content="복사" styleType="invitation__copy"></Button>
                </div>
              </div>
              <div className={styles.account__item}>
                <div className={styles.name}>
                  <p>아버지 <span>{`${basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname}`}</span></p>
                  {/* <Button content="" styleType="invitation__kakao"></Button> */}
                </div>
                <div className={styles.account}>
                  <p>토스 | <span>352-1212-5566-77</span></p>
                  <Button content="복사" styleType="invitation__copy"></Button>
                </div>
              </div>
              <div className={styles.account__item}>
                <div className={styles.name}>
                  <p>어머니 <span>{`${basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname}`}</span></p>
                  {/* <Button content="" styleType="invitation__kakao"></Button> */}
                </div>
                <div className={styles.account}>
                  <p>토스 | <span>352-1212-5566-77</span></p>
                  <Button content="복사" styleType="invitation__copy"></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gift;