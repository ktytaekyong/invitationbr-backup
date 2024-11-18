/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import ListOptionContent from "./ListOptionContent.js";
import CheckItem from "./CheckItem.js";
import TextareaWapperAttend from "./TextareaWapperAttend.js";
import RadioItem from "./RadioItem.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";
/* CSS Module */
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const AttendSetting = () => {
  const { attendList, setAttendList } = useContext(SetContext);
  const attendContentChangeHandler = (e) => {
    const { name, value } = e.target;
    setAttendList((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  useEffect(() => {
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
  }, [attendList.optionAttendMeal, attendList.optionAttendBus])
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="제목">
            <input type="text" name="attendTitle" value={attendList.attendTitle} onChange={(e) => attendContentChangeHandler(e)} placeholder="참석 의사 전달" />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="내용" multi={true}>
            <textarea name="attendContent" id="attendContent" value={attendList.attendContent} onChange={(e) => attendContentChangeHandler(e)} placeholder="내용을 입력해주세요." maxLength={100} />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="버튼명">
            <input type="text" name="attendButtonTitle" value={attendList.attendButtonTitle} onChange={(e) => attendContentChangeHandler(e)} placeholder="참석 의사 전달하기" />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="항목" multi="check">
            <CheckItem name="optionAttendName" type="attend" content="성함" id="optionAttendName"></CheckItem>
            <CheckItem name="optionAttendCount" type="attend" content="인원" id="optionAttendCount"></CheckItem>
            <CheckItem name="optionAttendMeal" type="attend" content="식사 여부" id="optionAttendMeal"></CheckItem>
            <ListOptionContent>
              {
                attendList.optionAttendMeal ?
                <CommonItemWrapper>
                  <TextareaWapperAttend content="식사함 항목 안내문구" id="attendMealNotice" value={attendList.attendMealNotice} onChange={(e) => attendContentChangeHandler(e)} placeholder="미 입력 시 문구는 노출되지 않습니다.&#10;예시) 스테이크와 한정식이 준비되어 있습니다."></TextareaWapperAttend>
                  <TextareaWapperAttend content="식사안함 항목 안내문구" id="attendNoMealNotice" value={attendList.attendNoMealNotice} onChange={(e) => attendContentChangeHandler(e)} placeholder="미 입력 시 문구는 노출되지 않습니다.&#10;예시) 식사 못하시는 분들을 위한 선물을 준비했으니 꼭 받아가세요."></TextareaWapperAttend>
                </CommonItemWrapper> : null
              }
              <CommonItemWrapper>
                <CheckItem name="optionAttendBus" type="attend" content="버스 탑승 여부" id="optionAttendBus"></CheckItem>
                {
                  attendList.optionAttendBus ?
                  <>
                    <TextareaWapperAttend content="탑승함 항목 안내문구" id="attendBusNoticeM" value={attendList.attendBusNoticeM} onChange={(e) => attendContentChangeHandler(e)} gender="M" division="(신랑측)" placeholder="미 입력 시 문구는 노출되지 않습니다.&#10;예시) 당일 오전 11시 강남역 1번 출구 맥도날드 앞"></TextareaWapperAttend>
                    <TextareaWapperAttend content="탑승안함 항목 안내문구" id="attendNoBusNoticeM" value={attendList.attendNoBusNoticeM} onChange={(e) => attendContentChangeHandler(e)} gender="M" division="(신랑측)" placeholder="미 입력 시 문구는 노출되지 않습니다.&#10;예시) 차량을 지원해드리고 있으니 원하시면 연락주세요."></TextareaWapperAttend>
                    <TextareaWapperAttend content="탑승함 항목 안내문구" id="attendBusNoticeF" value={attendList.attendBusNoticeF} onChange={(e) => attendContentChangeHandler(e)} gender="F" division="(신부측)" placeholder="미 입력 시 문구는 노출되지 않습니다.&#10;예시) 당일 오전 11시 강남역 1번 출구 맥도날드 앞"></TextareaWapperAttend>
                    <TextareaWapperAttend content="탑승안함 항목 안내문구" id="attendNoBusNoticeF" value={attendList.attendNoBusNoticeF} onChange={(e) => attendContentChangeHandler(e)} gender="F" division="(신부측)" placeholder="미 입력 시 문구는 노출되지 않습니다.&#10;예시) 차량을 지원해드리고 있으니 원하시면 연락주세요."></TextareaWapperAttend>
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
            <RadioItem name="optionAttendPopup" id="optionAttendPopupOpen" content="청첩장 오픈 시 바로 팝업 알림" radioidx="1"></RadioItem>
            <RadioItem name="optionAttendPopup" id="optionAttendPopupScroll" content="스크롤하여 참석 의사 전달 영역 보일 때 팝업" radioidx="2"></RadioItem>
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="카톡 알림" multi={true}>
            <CheckItem name="optionAttendKakao" type="attend" id="optionAttendKakao" content="참석 의사 전달 시 카카오톡으로 알림 발송"></CheckItem>
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