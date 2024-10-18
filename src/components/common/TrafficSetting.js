/* Component */
import ListOptionContent from "./ListOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
import TextEditor from "./TextEditor.js";
/* CSS Module */
// import styles from "../../css/module/common/TrafficSetting.module.scss";



const TrafficSetting = () => {
  return (
    <ListOptionContent>
      {
        trafficList.map((item, idx) => (
        <CommonItemWrapper key={`${item}${idx}`}>
          <CommonItemContent title="교통수단" multi={true}>
            <input type="text" placeholder="교통수단명을 입력하세요. (ex : 지하철/버스/자가용)" />
            <TextEditor></TextEditor>
            <Button type="button" content="교통수단 삭제" styleType="remove" />
          </CommonItemContent>
        </CommonItemWrapper>
        ))
      }
      <ButtonWrapper styleType="center">
        <Button type="button" content="교통수단 추가" styleType="point" />
      </ButtonWrapper>
    </ListOptionContent>

  )
}

export default TrafficSetting;