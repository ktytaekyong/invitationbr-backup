/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import GiftSettingAccount from "./GiftSettingAccount.js";
import Button from "../layout/Button.js";
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/GiftSetting.module.css";

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

const GiftSetting = () => {
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="그룹명">
            <input type="text" className={styles.input__group} placeholder="신랑측 계좌번호"/>
          </CommonItemContent>
          <CommonItemContent title="펼쳐두기">
            <CheckItem content="신랑측 계좌정보를 펼쳐둡니다."></CheckItem>
          </CommonItemContent>
        </CommonItemWrapper>
        <GiftSettingAccount listName={MGiftList} />
      </CommonOptionContent>
      {/* <ul className={`option__list ${styles.gift}`}>
      </ul> */}
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="그룹명">
            <input type="text" className={styles.input__group} placeholder="신부측 계좌번호"/>
          </CommonItemContent>
          <CommonItemContent title="펼쳐두기">
            <CheckItem content="신부측 계좌정보를 펼쳐둡니다."></CheckItem>
          </CommonItemContent>
        </CommonItemWrapper>
        <GiftSettingAccount listName={FGiftList} />
      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default GiftSetting;