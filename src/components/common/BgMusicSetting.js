/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import BgMusicSettingSelector from "./BgMusicSettingSelector.js";
import BgMusicSettingPlayer from "./BgMusicSettingPlayer.js";
import CheckItem from "./CheckItem.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";
/* CSS Module */
// import styles from "../../css/module/common/GallerySettingType.module.css";
/* Image */

const BgMusicSetting = () => {
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent>
            <BgMusicSettingPlayer></BgMusicSettingPlayer>
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="무료음원 (4곡)" multi={true}>
            <BgMusicSettingSelector></BgMusicSettingSelector>
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="자동재생" multi="check">
            <CheckItem content="청첩장에 접속하면 자동재생"></CheckItem>
            <SettingNotice>
              <SettingNoticeContent>카톡 브라우저를 제외한 타 브라우저는 보안 정책상 자동재생이 불가능합니다.</SettingNoticeContent>
            </SettingNotice>
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default BgMusicSetting;