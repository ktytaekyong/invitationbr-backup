/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import Button from "../layout/Button.js";
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/GiftSettingAccount.module.css";
import ButtonWrapper from "../layout/ButtonWrapper.js";
/* Image */
import iconKakaoImg from "../../img/icon/icon_kakao.png"

const bankList = [
  {
    itemName: "우리은행",
    itemKey: "woori"
  },
  {
    itemName: "국민은행",
    itemKey: "kb"
  },
]

const GiftSettingAccount = ({ listName, gender }) => {
  return (
    <>
      {
        listName.map((_, idx) => (
          <CommonItemWrapper>
            <CommonItemContent title="계좌정보" multi={true}>
              <div className={styles.input__wrap}>
                <OptionSelector listName={bankList} />
                <input type="text" className={styles.input__account} placeholder="계좌번호 입력" />
              </div>
              <input type="text" placeholder="예금주 입력" />
            </CommonItemContent>
            
            <CommonItemContent title="간편 송금" multi={true}>
              <CheckItem id={`accountKakaoOption${idx}`} content="카카오페이" labelImgSrc={iconKakaoImg}></CheckItem>
              {
                <input type="text" className={styles.input__account} placeholder="송금 링크 복사 후 붙여넣기 하세요." />
              }
              <Button content="계좌정보 삭제" styleType="remove"></Button>
            </CommonItemContent>
          </CommonItemWrapper>
        ))
      }
      <ButtonWrapper styleType="center">
        <Button content={`${gender === "M" ? "신랑" : "신부"}측 계좌정보 추가`} styleType="point"></Button>
      </ButtonWrapper>
    </>
  )
}

export default GiftSettingAccount;