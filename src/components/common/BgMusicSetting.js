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

// C: 배경 음악 편집
// 클릭 시 데이터 변경만 퍼블리싱
const BgMusicSetting = () => {
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent>
            <BgMusicSettingPlayer />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="무료음원 (8곡)" multi={true}>
            <BgMusicSettingSelector />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="자동재생" multi="check">
            <CheckItem content="청첩장에 접속하면 자동재생" />
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