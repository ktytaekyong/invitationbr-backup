/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
import TextEditor from "./TextEditor.js";
/* CSS Module */
import styles from "../../css/module/common/TrafficSetting.module.css";

const trafficList = [
  {
    traffic: "",
    content: ""
  },
  {
    traffic: "",
    content: ""
  },
]

const TrafficSetting = () => {
  return (
    <div className={styles.traffic__wrap}>
      <ul className={`option__list ${styles.traffic}`}>
        {
          trafficList.map((item, idx) => (
            <CommonItemWrapper key={`${item}${idx}`}>
              <CommonItemContent title="교통수단" multi={true}>
                <input type="text" />
                <TextEditor></TextEditor>
                  <Button type="button" content="교통수단 삭제" styleType="traffic__delete"></Button>
              </CommonItemContent>
            </CommonItemWrapper>
          ))
        }
      </ul>
      <ButtonWrapper styleType="center">
        <Button type="button" content="교통수단 추가" styleType="point"></Button>
      </ButtonWrapper>
    </div>
    
  )
}

export default TrafficSetting;