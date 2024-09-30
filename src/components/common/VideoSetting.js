/* Import */
import { useState, useEffect } from "react";
/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import TabSelector from "./TabSelector.js";
import VideoSettingOption from "./VideoSettingOption.js";
/* CSS Module */
import styles from "../../css/module/common/VideoSetting.module.css";

const typeList = [
  {
    id: "vedioYoutubeOption",
    title: "유튜브 등록",
  },
  {
    id: "vedioRegOption",
    title: "직접 등록",
  }
];
const VideoSetting = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="content__wrapper">
      <ul className="option__list">
        <CommonItemWrapper>
          <CommonItemContent title="등록방법" multi={true}>
            {/* 탭 활성화 필요 */}
            <TabSelector listName={typeList} onChange={setActive}></TabSelector>
            <VideoSettingOption active={active} />
          </CommonItemContent>
        </CommonItemWrapper>
      </ul>
    </div>
  )
}

export default VideoSetting;