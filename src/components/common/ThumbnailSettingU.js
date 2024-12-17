/* Import */
import { useContext } from "react";
import { DataChanger_ObjectArray, photoDeleter_ObjectArray } from "../../utils/helpers.js";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import TextAreaWrapperCount from "./TextareaWapperCount.js";
import PhotoSelector from "./PhotoSelector.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";
import InputBasic from "../layout/InputBasic";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

// C: URL 공유 썸네일
const ThumbnailSettingU = () => {
  const { urlInfoList, setUrlInfoList } = useContext(SetContext);
  const fileAddHandler = (e, index) => {
    const file = e.target.files[0];
    if(file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setUrlInfoList((prev) => {
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
              id="ThumbUPhoto" 
              limit={1} 
              listName={urlInfoList} 
              onChange={(e) => fileAddHandler(e, 0)} 
              deleteFunction={() => photoDeleter_ObjectArray(0, setUrlInfoList)} 
            />
          </CommonItemContent>
          <CommonItemContent title='제목'>
            <InputBasic 
              inputType="text" 
              inputName="title" 
              inputValue={urlInfoList[0].title} 
              onChange={(e) => DataChanger_ObjectArray(e, 0, setUrlInfoList)} 
              onClear={setUrlInfoList}
              placeholder='제목 입력' 
              maxLength={10} 
            />
          </CommonItemContent>
          <CommonItemContent title='내용' multi={true}>
            <TextAreaWrapperCount 
              name="description" 
              value={urlInfoList[0].description} 
              onChange={(e) => DataChanger_ObjectArray(e, 0, setUrlInfoList)} 
              placeholder="내용을 입력하세요." 
              maxLength={100} 
            />
            <SettingNotice>
              <SettingNoticeContent>가로 사진 사용을 권장합니다.</SettingNoticeContent>
              <SettingNoticeContent>이미지 변경 시 플랫폼별 정책에 따라 최대 3시간 소요됩니다.</SettingNoticeContent>
            </SettingNotice>
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  );
};

export default ThumbnailSettingU;
