/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import ListOptionContent from "./ListOptionContent.js";
import CheckItem from "./CheckItem.js";
import TextareaWapper from "./TextareaWapper.js";
import RadioItem from "./RadioItem.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";
/* CSS Module */

const themeList = [
  {
    itemName: "[베이직] 모던",
    itemKey: "themeModernBasic"
  },
  {
    itemName: "[베이직] 클래식",
    itemKey: "themeClassicBasic"
  },
  {
    itemName: "[일러스트] 모던",
    itemKey: "themeModernIllust"
  },
  {
    itemName: "[일러스트] 클래식",
    itemKey: "themeClassicIllust"
  },
  {
    itemName: "심플",
    itemKey: "themeSimple"
  },
  {
    itemName: "플라워",
    itemKey: "themeFlower"
  },
];

const fontList = [
  {
    itemName: "맑은 고딕",
    itemKey: "font1"
  },
  {
    itemName: "돋움체",
    itemKey: "font2"
  },
];

const fontWeightList = [
  {
    itemName: "보통",
    itemKey: "400"
  },
  {
    itemName: "볼드",
    itemKey: "600"
  },
];

const AttendSetting = () => {
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="제목">
            <input type="text" />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="내용" multi={true}>
            <textarea name="" id=""></textarea>
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="버튼명">
            <input type="text" />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="항목" multi="check">
            <CheckItem content="성함" id="optionAttendName"></CheckItem>
            <CheckItem content="인원" id="optionAttendCount"></CheckItem>
            <CheckItem content="식사 여부" id="optionAttendMeat"></CheckItem>
            <ListOptionContent>
              <CommonItemWrapper>
                <TextareaWapper content="식사함 항목 안내문구" id="attendMealNotice"></TextareaWapper>
                <TextareaWapper content="식사안함 항목 안내문구" id="attendNoMealNotice"></TextareaWapper>
              </CommonItemWrapper>
              <CommonItemWrapper>
                <CheckItem content="버스 탑승 여부" id="optionAttendBus"></CheckItem>
                <TextareaWapper content="탑승함 항목 안내문구" id="attendBusNoticeM" gender="M" division="(신랑측)"></TextareaWapper>
                <TextareaWapper content="탑승안함 항목 안내문구" id="attendNoBusNoticeM" gender="M" division="(신랑측)"></TextareaWapper>
                <TextareaWapper content="탑승함 항목 안내문구" id="attendBusNoticeF" gender="F" division="(신부측)"></TextareaWapper>
                <TextareaWapper content="탑승안함 항목 안내문구" id="attendNoBusNoticeF" gender="F" division="(신부측)"></TextareaWapper>
              </CommonItemWrapper>
              <CommonItemWrapper>
                <CheckItem content="메시지 전달" id="optionAttendMsg"></CheckItem>
                <TextareaWapper content=" " id="attendMsgNoticeM" gender="M" division="신랑측"></TextareaWapper>
                <TextareaWapper content=" " id="attendMsgNoticeF" gender="F" division="신부측"></TextareaWapper>
              </CommonItemWrapper>
            </ListOptionContent>
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>

      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="노출 방식" multi="check">
            <RadioItem content="청첩장 오픈 시 바로 팝업 알림" radioName="optionAttendPopup" id="optionAttendPopupOpen"></RadioItem>
            <RadioItem content="스크롤하여 참석 의사 전달 영역 보일 때 팝업" radioName="optionAttendPopup" id="optionAttendPopupScroll"></RadioItem>
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="카톡 알림" multi={true}>
            <CheckItem content="참석 의사 전달 시 카카오톡으로 알림 발송" id="optionAttendKakao"></CheckItem>
            <SettingNotice>
              <SettingNoticeContent> 참석 의사 전달 회신 내용은 제작 관리에서 확인할 수 있습니다. <br />(참석자 이름, 인원, 식사 여부, 버스 탑승 여부  등)</SettingNoticeContent>
            </SettingNotice>
          </CommonItemContent>
        </CommonItemWrapper>

      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default AttendSetting;