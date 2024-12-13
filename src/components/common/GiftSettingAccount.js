/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import Button from "../layout/Button.js";
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/GiftSettingAccount.module.scss";
import ButtonWrapper from "../layout/ButtonWrapper.js";
/* Image */
import iconKakaoImg from "../../img/icon/icon_kakao.png"

const bankList = [
  {
    itemName: "은행 선택",
    itemKey: ""
  },
  {
    itemName: "기업은행",
    itemKey: "기업은행"
  },
  {
    itemName: "우리은행",
    itemKey: "우리은행"
  },
  {
    itemName: "국민은행",
    itemKey: "국민은행"
  },
  {
    itemName: "농협은행",
    itemKey: "농협은행"
  },
]

// C: 마음 전하기 - 계좌정보
const GiftSettingAccount = ({ listName, gender, addFunction, deleteFunction, onChange }) => {
  return (
    <>
      {
        listName.map((item, idx) => (
          <CommonItemWrapper key={`${item}${idx}`}>
            <CommonItemContent title="계좌정보" multi={true}>
              <div className={styles.input__wrap}>
                <OptionSelector 
                  selectID={`${gender}${idx}bankType`} 
                  selectName="bankType"
                  listName={bankList} 
                  value={item.bankType}
                  onChange={
                    gender === "M" ?
                    (e) => onChange(e, "groomGroupList", idx)
                    : (e) => onChange(e, "brideGroupList", idx)
                  } 
                />
                <input type="number" 
                  name="account" 
                  value={item.account} 
                  className={styles.input__account} 
                  maxLength={16}
                  onChange={
                    gender === "M" ?
                    (e) => onChange(e, "groomGroupList", idx)
                    : (e) => onChange(e, "brideGroupList", idx)
                  } 
                  placeholder="계좌번호 입력" 
                />
              </div>
              <input 
                type="text" 
                name="name" 
                value={item.name} 
                onChange={
                  gender === "M" ?
                  (e) => onChange(e, "groomGroupList", idx)
                  : (e) => onChange(e, "brideGroupList", idx)
                } 
                placeholder="예금주 입력" 
              />
            </CommonItemContent>
            
            <CommonItemContent title="간편 송금" multi={true}>
              <CheckItem 
                id={`${gender}accountKakaoOption${idx}`} 
                name="kakaopayUse" 
                content="카카오페이"
                labelImgSrc={iconKakaoImg}
                checkidx={idx}
                groupType={gender === "M" ? "groomGroupList" : "brideGroupList"}
              />
              {
                item.kakaopayUse ?
                <input 
                  type="text" 
                  name="kakaopayLink" 
                  value={item.kakaopayLink} 
                  className={styles.input__account} 
                  onChange={
                    gender === "M" ?
                    (e) => onChange(e, "groomGroupList", idx)
                    : (e) => onChange(e, "brideGroupList", idx)
                  } 
                  placeholder="송금 링크 복사 후 붙여넣기 하세요." 
                />
                : null
              }
              <Button content="계좌정보 삭제" onClick={() => deleteFunction(idx)} styleType="remove" />
            </CommonItemContent>
          </CommonItemWrapper>
        ))
      }
      <ButtonWrapper styleType="center">
        <Button
          content={`${gender === "M" ? "신랑" : "신부"}측 계좌정보 추가`} 
          onClick={addFunction} 
          styleType="point" 
        />
      </ButtonWrapper>
    </>
  )
}

export default GiftSettingAccount;