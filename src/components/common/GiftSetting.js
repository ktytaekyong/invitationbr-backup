/* Import */
import { useContext, useState } from "react";
import { DataChanger_Object } from "../../utils/helpers.js";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import ListOptionContent from "./ListOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import GiftSettingAccount from "./GiftSettingAccount.js";
import GiftSettingKaKaoDesc from "./GiftSettingKaKaoDesc.js";
import CheckItem from "./CheckItem.js";
import CoupleInfomationSettingMobileTab from "./CoupleInfomationSettingMobileTab.js";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

// C: 마음 전하기
const GiftSetting = () => {
  const { isMobile, accountInfoList, setAccountInfoList } = useContext(SetContext);
  const [ mobileTabActive, setMobileTabActive ] = useState("M");
  const groomAccountAddHandler = () => {
    setAccountInfoList((prev) => {
      return {
        ...prev,
        groomGroupList: [
          ...prev.groomGroupList,
          {
            "bankType": "",
            "account": "",
            "name": "",
            "kakaopayLink": ""
          }
        ]
      }
    })
  }
  const brideAccountAddHandler = () => {
    setAccountInfoList((prev) => {
      return {
        ...prev,
        brideGroupList: [
          ...prev.brideGroupList,
          {
            "bankType": "",
            "account": "",
            "name": "",
            "kakaopayLink": ""
          }
        ]
      }
    })
  }
  const groomAccountRemoveHandler = (removeidx) => {
    setAccountInfoList((prev) => {
      return {
        ...prev,
        groomGroupList: prev.groomGroupList.filter((_, index) => index !== removeidx)
      };
    })
  }
  const brideAccountRemoveHandler = (removeidx) => {
    setAccountInfoList((prev) => {
      return {
        ...prev,
        brideGroupList: prev.groomGroupList.filter((_, index) => index !== removeidx)
      };
    })
  }
  const accountDataChangeHandler = (e, infoType, index) => {
    const { name, value } = e.target;
    setAccountInfoList(prev => ({
      ...prev,
      [infoType]: prev[infoType].map((item, i) => {
        if (i === index) {
          return {
            ...item,
            [name]: value
          };
        }
        return item;
      })
    }));
  };
  return (
    <>
      {isMobile ? <CoupleInfomationSettingMobileTab mobileTabActive={mobileTabActive} onClick={setMobileTabActive} /> : null}
      <GiftSettingKaKaoDesc />
      <CommonOptionWrapper>
        {
          isMobile && mobileTabActive === "F" ?
          null :
          <ListOptionContent list={true}>
            <CommonItemWrapper>
              <CommonItemContent title="그룹명">
                <input type="text" name="groomTitle" value={accountInfoList.groomTitle} onChange={(e) => {DataChanger_Object(e, setAccountInfoList)}} placeholder="신랑측 계좌번호" maxLength={10} />
              </CommonItemContent>
              <CommonItemContent title="펼쳐두기">
                <CheckItem name="groomAccountView" id="groomAccountView" content="신랑측 계좌정보를 펼쳐둡니다." />
              </CommonItemContent>
            </CommonItemWrapper>
            <GiftSettingAccount 
              gender="M" 
              listName={accountInfoList.groomGroupList} 
              addFunction={groomAccountAddHandler}
              deleteFunction={groomAccountRemoveHandler}
              onChange={accountDataChangeHandler}
            />
          </ListOptionContent>
        }
        {
          isMobile && mobileTabActive === "M" ?
          null :
          <ListOptionContent list={true}>
            <CommonItemWrapper>
              <CommonItemContent title="그룹명">
                <input type="text" name="brideTitle" value={accountInfoList.brideTitle} onChange={(e) => {DataChanger_Object(e, setAccountInfoList)}} placeholder="신부측 계좌번호" maxLength={10} />
              </CommonItemContent>
              <CommonItemContent title="펼쳐두기">
                <CheckItem name="brideAccountView" id="brideAccountView" content="신부측 계좌정보를 펼쳐둡니다." />
              </CommonItemContent>
            </CommonItemWrapper>
            <GiftSettingAccount 
              gender="F" 
              listName={accountInfoList.brideGroupList} 
              addFunction={brideAccountAddHandler}
              deleteFunction={brideAccountRemoveHandler}
              onChange={accountDataChangeHandler}
            />
          </ListOptionContent>
        }
      </CommonOptionWrapper>
    </>
  )
}

export default GiftSetting;