/* Import */
import { useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import SettingNotice from "../layout/SettingNotice";
import SettingNoticeContent from "../layout/SettingNoticeContent";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const GuestbookSetting = () => {
  const { guestbookAdminPassword, setGuestbookAdminPassword } = useContext(SetContext);
  const passwordChangeHandler = (e) => {
    const { value } = e.target;
    setGuestbookAdminPassword(value);
  }
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title='비밀번호' multi={true}>
            <input 
              type='password' 
              value={guestbookAdminPassword}
              onChange={(e) => passwordChangeHandler(e)}
              placeholder="비밀번호를 설정해 주세요." 
            />
            <SettingNotice>
              <SettingNoticeContent>비밀번호는 자유롭게 설정하시면 됩니다.</SettingNoticeContent>
              <SettingNoticeContent>작성된 방명록 글을 삭제하시려면 비밀번호를 설정해주세요.</SettingNoticeContent>
            </SettingNotice>
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  );
};

export default GuestbookSetting;
