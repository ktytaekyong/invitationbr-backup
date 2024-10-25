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
import { SetContext } from "../../store/option-set-context.js";

const Gift = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const { accountInfoList, setAccountInfoList, selectOptionList, setSelectOptionList } = useContext(SetContext);
  const [isActive, setIsActive] = useState(selectOptionList.groomAccountView);
  const [isActive2, setIsActive2] = useState(selectOptionList.brideAccountView);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };
  const activeToggleHandler2 = () => {
    setIsActive2(!isActive2);
  };
  return (
    <div className={`${styles.gift} ${styles.style_theme_1}`}>
      <div className={styles.gift__wrap}>
        <HeadLine title="마음 전하기" content="account" />
        <div className={styles.gift__content}>
          <div id="AccountM" className={styles.account__list}>
            <div className={styles.account__list_title} onClick={activeToggleHandler}>
              <p>{accountInfoList.groomTitle}</p>
              <img src={iconGiftArrow} alt="" />
            </div>
            <div className={`${styles.account__list_content} ${isActive ? styles["active"] : ""}`}>
              {
                accountInfoList.groomGroupList.map((item, idx) => (
                  <div key={item.name + idx} className={styles.account__item}>
                    <div className={styles.name}>
                      <p>
                        {/* 신랑  */}
                        <span>{item.name}</span>
                      </p>
                      {
                        <Button content="" styleType="invitation__kakao"></Button>
                      }
                      {/* <img src={iconGiftKakao} alt="" />   */}
                    </div>
                    <div className={styles.account}>
                      <p>
                        {item.bankType} | <span>{item.account}</span></p>
                      <Button content="복사" styleType="invitation__copy"></Button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div id="AccountF" className={styles.account__list}>
            <div className={styles.account__list_title} onClick={activeToggleHandler2}>
              <p>{accountInfoList.brideTitle}</p>
              <img src={iconGiftArrow} alt="" />
            </div>
            <div className={`${styles.account__list_content} ${isActive2 ? styles["active"] : ""}`}>
              {
                accountInfoList.brideGroupList.map((item, idx) => (
                  <div key={item.name + idx} className={styles.account__item}>
                    <div className={styles.name}>
                      <p>
                        {/* 신부 */}
                        <span>{item.name}</span>
                      </p>
                      {
                        <Button content="" styleType="invitation__kakao"></Button>
                      }
                      {/* <img src={iconGiftKakao} alt="" />   */}
                    </div>
                    <div className={styles.account}>
                      <p>
                        {item.bankType} | <span>{item.account}</span></p>
                      <Button content="복사" styleType="invitation__copy"></Button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gift;