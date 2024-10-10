/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import ListOptionContent from "./ListOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import GiftSettingAccount from "./GiftSettingAccount.js";
import GiftSettingKaKaoDesc from "./GiftSettingKaKaoDesc.js";
import CheckItem from "./CheckItem.js";
/* CSS Module */
// import styles from "../../css/module/common/GiftSetting.module.scss";

const MGiftList = [
  {
    itemName: "",
    content: ""
  },
  {
    itemName: "",
    content: ""
  },
]

const FGiftList = [
  {
    itemName: "",
    content: ""
  },
  {
    itemName: "",
    content: ""
  },
]

const GiftSetting = () => {
  return (
    <>
      <GiftSettingKaKaoDesc />
      
      <CommonOptionWrapper>
        <ListOptionContent list={true}>
          <CommonItemWrapper>
            <CommonItemContent title="그룹명">
              <input type="text" placeholder="신랑측 계좌번호"/>
            </CommonItemContent>
            <CommonItemContent title="펼쳐두기">
              <CheckItem content="신랑측 계좌정보를 펼쳐둡니다."></CheckItem>
            </CommonItemContent>
          </CommonItemWrapper>
          <GiftSettingAccount gender="M" listName={MGiftList} />
        </ListOptionContent>
        
        <ListOptionContent list={true}>
          <CommonItemWrapper>
            <CommonItemContent title="그룹명">
              <input type="text" placeholder="신부측 계좌번호"/>
            </CommonItemContent>
            <CommonItemContent title="펼쳐두기">
              <CheckItem content="신부측 계좌정보를 펼쳐둡니다."></CheckItem>
            </CommonItemContent>
          </CommonItemWrapper>
          <GiftSettingAccount gender="F" listName={FGiftList} />
        </ListOptionContent>

      </CommonOptionWrapper>
    </>
  )
}

export default GiftSetting;