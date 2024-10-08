/* Component */
import ListOptionContent from "./ListOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
import TextEditor from "./TextEditor.js";
/* CSS Module */
// import styles from "../../css/module/common/TrafficSetting.module.scss";

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
    <ListOptionContent>
      {
        trafficList.map((item, idx) => (
        <CommonItemWrapper key={`${item}${idx}`}>
          <CommonItemContent title="교통수단" multi={true}>
            <input type="text" />
            <TextEditor></TextEditor>
            <Button type="button" content="교통수단 삭제" styleType="remove"></Button>
          </CommonItemContent>
        </CommonItemWrapper>
        ))
      }
      <ButtonWrapper styleType="center">
        <Button type="button" content="교통수단 추가" styleType="point"></Button>
      </ButtonWrapper>
    </ListOptionContent>

  )
}

export default TrafficSetting;