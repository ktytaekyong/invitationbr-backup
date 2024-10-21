/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import TabSelector from "./TabSelector.js";
import VideoSettingOption from "./VideoSettingOption.js";
/* CSS Module */
// import styles from "../../css/module/common/VideoSetting.module.scss";

const typeList = [
  {
    id: "videoYoutubeOption",
    title: "유튜브 등록",
  },
  {
    id: "videoRegOption",
    title: "직접 등록",
  }
];
const VideoSetting = () => {
  const [isActiveTab, setIsActiveTab] = useState("videoYoutubeOption");
  const setActiveTabHandler = (item) => {
    setIsActiveTab(item);
  }

  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="등록방법" multi={true}>
            {/* 탭 활성화 필요 */}
            <TabSelector listName={typeList} onChange={setActiveTabHandler} />
            <VideoSettingOption active={isActiveTab} />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default VideoSetting;