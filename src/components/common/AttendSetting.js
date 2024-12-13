/* Import */
import { useEffect, useContext } from "react";
import { DataChanger_Object } from "../../utils/helpers.js";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import ListOptionContent from "./ListOptionContent.js";
import CheckItem from "./CheckItem.js";
import TextareaWapperAttend from "./TextareaWapperAttend.js";
import TextareaWapperCount from "./TextareaWapperCount.js";
import RadioItem from "./RadioItem.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

// C: 참석 의사 모달 편집
const AttendSetting = () => {
  const { attendList, setAttendList } = useContext(SetContext);
  useEffect(() => { // 체크박스 옵션 선택에 따른 모달 내용 결정
    if(attendList.optionAttendMeal === false) {
      setAttendList((prev) => {
        return {
          ...prev,
          "attendMealNotice": "",
          "attendNoMealNotice": "",
        }
      })
    }
    if(attendList.optionAttendBus === false) {
      setAttendList((prev) => {
        return {
          ...prev,
          "attendBusNoticeM": "",
          "attendNoBusNoticeM": "",
          "attendBusNoticeF": "",
          "attendNoBusNoticeF": ""
        }
      })
    }
  }, [setAttendList, attendList.optionAttendMeal, attendList.optionAttendBus]);
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="제목">
            <input 
              type="text" 
              name="attendTitle" 
              value={attendList.attendTitle} 
              maxLength={10}
              onChange={(e) => DataChanger_Object(e, setAttendList)} 
              placeholder="참석 의사 전달" 
            />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="내용" multi={true}>
            <TextareaWapperCount 
              name="attendContent" 
              id="attendContent" 
              value={attendList.attendContent} 
              onChange={(e) => DataChanger_Object(e, setAttendList)} 
              placeholder="내용을 입력해주세요." 
              maxLength={100} 
            />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="버튼명">
            <input 
              type="text" 
              name="attendButtonTitle" 
              value={attendList.attendButtonTitle}
              maxLength={10}
              onChange={(e) => DataChanger_Object(e, setAttendList)} 
              placeholder="참석 의사 전달하기" 
            />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="항목" multi="check">
            <CheckItem name="optionAttendName" type="attend" content="성함" id="optionAttendName" />
            <CheckItem name="optionAttendCount" type="attend" content="인원" id="optionAttendCount" />
            <CheckItem name="optionAttendMeal" type="attend" content="식사 여부" id="optionAttendMeal" />
            <ListOptionContent>
              {
                attendList.optionAttendMeal ?
                <CommonItemWrapper>
                  <TextareaWapperAttend 
                    content="식사함 항목 안내문구" 
                    id="attendMealNotice" 
                    value={attendList.attendMealNotice} 
                    onChange={(e) => DataChanger_Object(e, setAttendList)} 
                    placeholder="미 입력 시 문구는 노출되지 않습니다.&#10;예시) 스테이크와 한정식이 준비되어 있습니다." 
                  />
                  <TextareaWapperAttend 
                    content="식사안함 항목 안내문구" 
                    id="attendNoMealNotice" 
                    value={attendList.attendNoMealNotice} 
                    onChange={(e) => DataChanger_Object(e, setAttendList)} 
                    placeholder="미 입력 시 문구는 노출되지 않습니다.&#10;예시) 식사 못하시는 분들을 위한 선물을 준비했으니 꼭 받아가세요." 
                  />
                </CommonItemWrapper> : null
              }
              <CommonItemWrapper>
                <CheckItem name="optionAttendBus" type="attend" content="버스 탑승 여부" id="optionAttendBus"></CheckItem>
                {
                  attendList.optionAttendBus ?
                  <>
                    <TextareaWapperAttend 
                      content="탑승함 항목 안내문구" 
                      id="attendBusNoticeM" 
                      value={attendList.attendBusNoticeM} 
                      onChange={(e) => DataChanger_Object(e, setAttendList)} 
                      gender="M" 
                      division="(신랑측)" 
                      placeholder="미 입력 시 문구는 노출되지 않습니다.&#10;예시) 당일 오전 11시 강남역 1번 출구 맥도날드 앞" 
                    />
                    <TextareaWapperAttend 
                      content="탑승안함 항목 안내문구" 
                      id="attendNoBusNoticeM" 
                      value={attendList.attendNoBusNoticeM} 
                      onChange={(e) => DataChanger_Object(e, setAttendList)} 
                      gender="M" 
                      division="(신랑측)" 
                      placeholder="미 입력 시 문구는 노출되지 않습니다.&#10;예시) 차량을 지원해드리고 있으니 원하시면 연락주세요." 
                    />
                    <TextareaWapperAttend 
                      content="탑승함 항목 안내문구" 
                      id="attendBusNoticeF" 
                      value={attendList.attendBusNoticeF} 
                      onChange={(e) => DataChanger_Object(e, setAttendList)} 
                      gender="F" 
                      division="(신부측)" 
                      placeholder="미 입력 시 문구는 노출되지 않습니다.&#10;예시) 당일 오전 11시 강남역 1번 출구 맥도날드 앞" 
                    />
                    <TextareaWapperAttend 
                      content="탑승안함 항목 안내문구" 
                      id="attendNoBusNoticeF" 
                      value={attendList.attendNoBusNoticeF} 
                      onChange={(e) => DataChanger_Object(e, setAttendList)} 
                      gender="F" 
                      division="(신부측)" 
                      placeholder="미 입력 시 문구는 노출되지 않습니다.&#10;예시) 차량을 지원해드리고 있으니 원하시면 연락주세요." 
                    />
                  </> : null
                }
              </CommonItemWrapper>
              {/* <CommonItemWrapper>
                <CheckItem content="메시지 전달" id="optionAttendMsg"></CheckItem>
                <TextareaWapperAttend content=" " id="attendMsgNoticeM" gender="M" division="신랑측"></TextareaWapperAttend>
                <TextareaWapperAttend content=" " id="attendMsgNoticeF" gender="F" division="신부측"></TextareaWapperAttend>
              </CommonItemWrapper> */}
            </ListOptionContent>
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>

      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="노출 방식" multi="check">
            <RadioItem name="optionAttendPopup" id="optionAttendPopupOpen" content="청첩장 오픈 시 바로 팝업 알림" radioidx="1" />
            <RadioItem name="optionAttendPopup" id="optionAttendPopupScroll" content="스크롤하여 참석 의사 전달 영역 보일 때 팝업" radioidx="2" />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="카톡 알림" multi={true}>
            <CheckItem name="optionAttendKakao" type="attend" id="optionAttendKakao" content="참석 의사 전달 시 카카오톡으로 알림 발송" />
            <SettingNotice>
              <SettingNoticeContent> 참석 의사 전달 회신 내용은 제작 관리에서 확인할 수 있습니다. <br />(참석자 이름, 인원, 식사 여부, 버스 탑승 여부 등)</SettingNoticeContent>
            </SettingNotice>
          </CommonItemContent>
        </CommonItemWrapper>

      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default AttendSetting;