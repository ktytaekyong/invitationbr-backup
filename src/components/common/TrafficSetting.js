/* Component */
import CommonOptionContent from "./CommonOptionContent.js";
import ListItemWrapper from "./ListItemWrapper.js";
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
    <CommonOptionContent>
      <ListItemWrapper>
      {
        trafficList.map((item, idx) => (
          <CommonItemContent key={`${item}${idx}`} title="교통수단" multi={true}>
            <input type="text" />
            <TextEditor></TextEditor>
            <Button type="button" content="교통수단 삭제" styleType="remove"></Button>
          </CommonItemContent>
        ))
      }
      </ListItemWrapper>

      <ButtonWrapper styleType="center">
        <Button type="button" content="교통수단 추가" styleType="point"></Button>
      </ButtonWrapper>
    </CommonOptionContent>

  )
}

export default TrafficSetting;