/* Import */
import { useContext } from "react";
import { DataChanger_ObjectArray, photoDeleter_ObjectArray } from "../../utils/helpers.js";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import PhotoSelector from "./PhotoSelector.js";
import TextAreaWrapperCount from "./TextareaWapperCount.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";
import InputBasic from "../layout/InputBasic";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

// C: 카카오톡 공유 썸네일
const ThumbnailSettingK = () => {
  const { kakaoInfoList, setKakaoInfoList } = useContext(SetContext);
  const fileAddHandler = (e, index) => {
    const file = e.target.files[0];
    if(file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setKakaoInfoList((prev) => {
          const newList = [...prev];
          newList[index] = { ...newList[index], src: e.target.result };
          console.log(newList);
          return newList;
        })
      };
      fileList.readAsDataURL(file);
    }
  }
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title='사진' multi={true}>
            <PhotoSelector 
              id="ThumbKPhoto" 
              limit={1} 
              listName={kakaoInfoList} 
              onChange={(e) => fileAddHandler(e, 0)} 
              deleteFunction={() => photoDeleter_ObjectArray(0, setKakaoInfoList)}
            />
          </CommonItemContent>

          <CommonItemContent title='제목'>
            <InputBasic 
              inputType="text" 
              inputName="title" 
              inputValue={kakaoInfoList[0].title} 
              onChange={(e) => DataChanger_ObjectArray(e, 0, setKakaoInfoList)} 
              onClear={setKakaoInfoList}
              placeholder='제목 입력' 
              maxLength={10} 
            />
          </CommonItemContent>

          <CommonItemContent title='내용' multi={true}>
            <TextAreaWrapperCount 
              name="description" 
              value={kakaoInfoList[0].description} 
              onChange={(e) => DataChanger_ObjectArray(e, 0, setKakaoInfoList)} 
              onClear={setKakaoInfoList}
              placeholder="내용을 입력하세요." 
              maxLength={100} 
            />
            <SettingNotice>
              <SettingNoticeContent>청첩장 하단 [카카오톡 공유하기] 로 전달 시 보여지는 화면입니다.</SettingNoticeContent>
              <SettingNoticeContent>가로 사진 사용을 권장합니다.</SettingNoticeContent>
            </SettingNotice>
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  );
};

export default ThumbnailSettingK;
