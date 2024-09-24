/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import Button from "../layout/Button.js";
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
  {
    traffic: "",
    content: ""
  }
]

const TrafficSetting = () => {
  return (
    <div className="content__wrapper">
      <ul className={styles.option__list}>
        {
          trafficList.map((item, idx) => (
            <CommonItemWrapper key={`${item}${idx}`}>
              <CommonItemContent title="교통수단">
                <input type="text" />
              </CommonItemContent>

              <CommonItemContent title="내용">
                <input type="text" />
              </CommonItemContent>
            </CommonItemWrapper>
          ))
        }
      </ul>
        <CommonItemContent>
          <Button type="button" content="+ 추가"></Button>
          <Button type="button" content="- 삭제"></Button>
        </CommonItemContent>

    </div>
  )
}

export default TrafficSetting;