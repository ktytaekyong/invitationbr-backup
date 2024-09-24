/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/common/TrafficSetting.module.css";

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
    <div className="content__wrapper">
      <CommonItemContent title="그룹명">
        <input type="text" placeholder="신랑측 계좌번호"/>
        <Button type="button" content="+"></Button>
      </CommonItemContent>
      <ul className={styles.option__list}>
        {
          
          MGiftList.map((item, idx) => (
            <CommonItemWrapper key={`${item}${idx}`}>
              <CommonItemContent title="계좌번호">
                <OptionSelector listName={bankList} />
                <input type="text" placeholder="계좌번호 입력" />
              </CommonItemContent>
              <CommonItemContent title="예금주">
                <input type="text" placeholder="예금주 입력" />
              </CommonItemContent>
              <CommonItemContent title="간편송금">
                <input type="checkbox" />
              </CommonItemContent>
              <CommonItemContent title="펼쳐두기">
                <input type="checkbox" />
              </CommonItemContent>
            </CommonItemWrapper>
          ))
        }
      </ul>
      <hr></hr>
      <CommonItemContent title="그룹명">
        <input type="text" placeholder="신부측 계좌번호"/>
        <Button type="button" content="+"></Button>
      </CommonItemContent>
      <ul className={styles.option__list}>
        {
          FGiftList.map((item, idx) => (
            <CommonItemWrapper key={`${item}${idx}`}>
              <CommonItemContent title="계좌번호">
                <OptionSelector listName={bankList} />
                <input type="text" placeholder="계좌번호 입력" />
              </CommonItemContent>
              <CommonItemContent title="예금주">
                <input type="text" placeholder="예금주 입력" />
              </CommonItemContent>
              <CommonItemContent title="간편송금">
                <input type="checkbox" />
              </CommonItemContent>
              <CommonItemContent title="펼쳐두기">
                <input type="checkbox" />
              </CommonItemContent>
            </CommonItemWrapper>
          ))
        }
      </ul>
    </div>
  )
}

export default GiftSetting;