/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
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
    <>
      <ul className={styles.option__list}>
        {
          trafficList.map((item, idx) => (
            <CommonItemWrapper key={`${item}${idx}`}>
              <CommonItemContent title="교통수단" multi={true}>
                <input type="text" />
                <TextEditor></TextEditor>
                <Button type="button" content="- 삭제"></Button>
              </CommonItemContent>
            </CommonItemWrapper>
          ))
        }
      </ul>
      <Button type="button" content="+ 추가"></Button>
    </>
  )
}

export default TrafficSetting;