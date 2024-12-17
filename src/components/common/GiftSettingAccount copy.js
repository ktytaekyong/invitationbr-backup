// Import
import { AccountHandler, AccountNameHandler } from "../../utils/helpers.js";
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
import iconKakaoImg from "../../img/icon/icon_kakao.png";

const bankList = [
  { itemName: "은행 선택", itemKey: "" },
  { itemName: "기업은행", itemKey: "기업은행" },
  { itemName: "우리은행", itemKey: "우리은행" },
  { itemName: "국민은행", itemKey: "국민은행" },
  { itemName: "농협은행", itemKey: "농협은행" },
];

let debounceTimeout = null;

// 계좌번호 입력값 처리: 숫자만, 최대 16자리
const handleAccountInput = (e, groupType, idx, onChange) => {
  clearTimeout(debounceTimeout); // 기존 타이머 제거
  const value = e.target.value.replace(/\D/g, ""); // 숫자만 허용
  debounceTimeout = setTimeout(() => {
    const filteredValue = value.slice(0, 16); // 최대 16자리 제한
    onChange({ target: { name: e.target.name, value: filteredValue } }, groupType, idx);
  }, 100); // 100ms 디바운스
};

// 예금주 입력값 처리: 한글, 영문, 공백만 허용, 최대 20자
const handleNameInput = (e, groupType, idx, onChange) => {
  clearTimeout(debounceTimeout); // 기존 타이머 제거
  const value = e.target.value.replace(/[^가-힣a-zA-Z\s]/g, ""); // 한글, 영문, 공백만 허용
  debounceTimeout = setTimeout(() => {
    const filteredValue = value.slice(0, 20); // 최대 20자 제한
    onChange({ target: { name: e.target.name, value: filteredValue } }, groupType, idx);
  }, 100); // 100ms 디바운스
};

// C: 마음 전하기 - 계좌정보
const GiftSettingAccount = ({ listName, gender, addFunction, deleteFunction, onChange }) => {
  return (
    <>
      {listName.map((item, idx) => (
        <CommonItemWrapper key={`${item}${idx}`}>
          {/* 계좌정보 */}
          <CommonItemContent title="계좌정보" multi={true}>
            <div className={styles.input__wrap}>
              <OptionSelector
                selectID={`${gender}${idx}bankType`}
                selectName="bankType"
                listName={bankList}
                value={item.bankType}
                onChange={
                  gender === "M"
                    ? (e) => onChange(e, "groomGroupList", idx)
                    : (e) => onChange(e, "brideGroupList", idx)
                }
              />
              <input
                type="text" // type="number" 대신 text 사용 (숫자만 제한은 handleAccountInput에서 처리)
                name="account"
                value={item.account}
                className={styles.input__account}
                onChange={
                  gender === "M"
                    ? (e) => handleAccountInput(e, "groomGroupList", idx, onChange)
                    : (e) => handleAccountInput(e, "brideGroupList", idx, onChange)
                }
                placeholder="계좌번호 입력 (숫자만)"
              />
            </div>
            <input
              type="text"
              name="name"
              value={item.name}
              onChange={
                gender === "M"
                  ? (e) => handleNameInput(e, "groomGroupList", idx, onChange)
                  : (e) => handleNameInput(e, "brideGroupList", idx, onChange)
              }
              placeholder="예금주 입력 (한글/영문)"
              maxLength={20}
            />
          </CommonItemContent>

          {/* 간편 송금 */}
          <CommonItemContent title="간편 송금" multi={true}>
            <CheckItem
              id={`${gender}accountKakaoOption${idx}`}
              name="kakaopayUse"
              content="카카오페이"
              labelImgSrc={iconKakaoImg}
              checkidx={idx}
              groupType={gender === "M" ? "groomGroupList" : "brideGroupList"}
            />
            {item.kakaopayUse ? (
              <input
                type="text"
                name="kakaopayLink"
                value={item.kakaopayLink}
                className={styles.input__account}
                onChange={
                  gender === "M"
                    ? (e) => onChange(e, "groomGroupList", idx)
                    : (e) => onChange(e, "brideGroupList", idx)
                }
                placeholder="송금 링크 복사 후 붙여넣기 하세요."
              />
            ) : null}
            <Button content="계좌정보 삭제" onClick={() => deleteFunction(idx)} styleType="remove" />
          </CommonItemContent>
        </CommonItemWrapper>
      ))}
      <ButtonWrapper styleType="center">
        <Button
          content={`${gender === "M" ? "신랑" : "신부"}측 계좌정보 추가`}
          onClick={addFunction}
          styleType="point"
        />
      </ButtonWrapper>
    </>
  );
};

export default GiftSettingAccount;
