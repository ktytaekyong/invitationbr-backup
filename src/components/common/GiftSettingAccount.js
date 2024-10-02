/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import Button from "../layout/Button.js";
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/GiftSettingAccount.module.css";
import ButtonWrapper from "../layout/ButtonWrapper.js";

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
const MGiftList = [
  {
    traffic: "",
    content: ""
  },
  {
    traffic: "",
    content: ""
  },
]

const FGiftList = [
  {
    traffic: "",
    content: ""
  },
  {
    traffic: "",
    content: ""
  },
]

const GiftSettingAccount = () => {
  return (
    <>
      <ul className={styles.gift__list}>
        {
          MGiftList.map((item, idx) => (
            <li key={`${item}${idx}`} className={styles.gift__item}>
              <CommonItemContent title="계좌정보" multi={true}>
                <div className={styles.input__wrap}>
                  <OptionSelector listName={bankList} />
                  <input type="text" className={styles.input__account} placeholder="계좌번호 입력" />
                </div>
                <input type="text" placeholder="예금주 입력" />
              </CommonItemContent>
              <CommonItemContent title="간편 송금" multi={true}>
                <CheckItem id={`accountKakaoOption${idx}`} content="카카오페이"></CheckItem>
                {
                  <input type="text" className={styles.input__account} placeholder="송금 링크 복사 후 붙여넣기 하세요." />
                }
                <Button content="계좌정보 삭제" styleType="remove"></Button>
              </CommonItemContent>
            </li>
          ))
        }
      </ul>
      <li className="">
        <ButtonWrapper styleType="center">
          <Button></Button>
        </ButtonWrapper>
      </li>
    </>
    
  )
}

export default GiftSettingAccount;