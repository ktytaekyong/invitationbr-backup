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
  const copyAccountHandler = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("텍스트가 복사되었습니다!");
    } catch (error) {
      console.error("복사에 실패했습니다:", error);
    }
  };
  return (
    <div id="Gift" className={`${styles.gift}`}>
      <div className={styles.gift__wrap}>
        <HeadLine title="마음 전하기" content="account" />
        <div className={styles.gift__content}>
          <div id="AccountM" className={styles.account__list}>
            <div className={styles.account__list_title} onClick={activeToggleHandler}>
              <p>{accountInfoList.groomTitle ? accountInfoList.groomTitle : "신랑측 계좌번호"}</p>
              <img src={iconGiftArrow} alt="" />
            </div>
            <div className={`${styles.account__list_content} ${isActive ? styles["active"] : ""}`}>
              {
                accountInfoList.groomGroupList.map((item, idx) => (
                  <div key={item.name + idx} className={styles.account__item}>
                    <div className={styles.name}>
                      <p>
                        {/* 신랑  */}
                        <span>{item.name ? item.name : "예금주"}</span>
                      </p>
                      {
                        item.kakaopayUse ?<Button styleType="invitation__kakao" /> : null
                      }
                    </div>
                    <div className={styles.account}>
                      <p>
                        {item.bankType ? item.bankType : "은행"} | <span>{item.account ? item.account : "계좌번호"}</span></p>
                        <Button content="복사" styleType="invitation__copy" onClick={() => copyAccountHandler(item.account ? `${item.bankType} ${item.account}` : "계좌번호 없음")} />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div id="AccountF" className={styles.account__list}>
            <div className={styles.account__list_title} onClick={activeToggleHandler2}>
              <p>{accountInfoList.brideTitle ? accountInfoList.brideTitle : "신부측 계좌번호"}</p>
              <img src={iconGiftArrow} alt="" />
            </div>
            <div className={`${styles.account__list_content} ${isActive2 ? styles["active"] : ""}`}>
              {
                accountInfoList.brideGroupList.map((item, idx) => (
                  <div key={item.name + idx} className={styles.account__item}>
                    <div className={styles.name}>
                      <p>
                        {/* 신부 */}
                        <span>{item.name ? item.name : "예금주"}</span>
                      </p>
                      {
                        item.kakaopayUse ?<Button styleType="invitation__kakao" /> : null
                      }
                      {/* <img src={iconGiftKakao} alt="" />   */}
                    </div>
                    <div className={styles.account}>
                      <p>
                      {item.bankType ? item.bankType : "은행"} | <span>{item.account ? item.account : "계좌번호"}</span></p>
                      <Button content="복사" styleType="invitation__copy" onClick={() => copyAccountHandler(item.account ? `${item.bankType} ${item.account}` : "계좌번호 없음")} />
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