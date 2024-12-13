/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import OrderSettingState from "./OrderSettingState.js";
import CommonOptionContent from "./CommonOptionContent.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";

// C: 메뉴 순서 변경 - 외부
const OrderSetting = () => {
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <SettingNotice>
            <SettingNoticeContent>항목을 드래그하여 순서를 변경해주세요.</SettingNoticeContent>
            <SettingNoticeContent>고정 메뉴 설정, 기본 정보, 배경, 인트로 화면과 사진, 신랑/신부측 정보는 순서 변경할 수 없습니다.</SettingNoticeContent>
          </SettingNotice>
          <OrderSettingState />
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  );
};

export default OrderSetting;
