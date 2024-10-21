/* Import */
import { useState, useEffect, useContext } from "react";
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
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const GiftSetting = () => {
  const { accountInfoList, setAccountInfoList } = useContext(SetContext);
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

  const titleDataChangeHandler = (e) => {
    const { name, value } = e.target;
    setAccountInfoList(prev => ({
      ...prev,
      [name]: value
    }))
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
      <GiftSettingKaKaoDesc />
      
      <CommonOptionWrapper>
        <ListOptionContent list={true}>
          <CommonItemWrapper>
            <CommonItemContent title="그룹명">
              <input type="text" name="groomTitle" value={accountInfoList.groomTitle} onChange={(e) => {titleDataChangeHandler(e)}} placeholder="신랑측 계좌번호" />
            </CommonItemContent>
            <CommonItemContent title="펼쳐두기">
              <CheckItem content="신랑측 계좌정보를 펼쳐둡니다."></CheckItem>
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
        
        <ListOptionContent list={true}>
          <CommonItemWrapper>
            <CommonItemContent title="그룹명">
              <input type="text" name="brideTitle" value={accountInfoList.brideTitle} onChange={(e) => {titleDataChangeHandler(e)}} placeholder="신부측 계좌번호" />
            </CommonItemContent>
            <CommonItemContent title="펼쳐두기">
              <CheckItem content="신부측 계좌정보를 펼쳐둡니다."></CheckItem>
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

      </CommonOptionWrapper>
    </>
  )
}

export default GiftSetting;