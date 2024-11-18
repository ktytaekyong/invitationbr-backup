/* Import */
import { useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import TextAreaWrapperCount from "./TextareaWapperCount.js";
import PhotoSelector from "./PhotoSelector.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";
/* CSS Module */
// import styles from "../../css/module/common/NoticeSettingT.module.css";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const ThumbnailSettingU = () => {
  const { urlInfoList, setUrlInfoList } = useContext(SetContext);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setUrlInfoList(prev => (
          [{
            ...prev,
            src: e.target.result,
          }]
        ))
      };
      fileList.readAsDataURL(file);
    }
  };
  const photoDeleteHandler = (index) => {
    setUrlInfoList((prev) => {
      const newList = [...prev];
      newList[index].src = "";  
      return newList;
    });
  }
  const infoDataChangeHandler = (e, index) => {
    const { name, value } = e.target;
    setUrlInfoList((prev) => {
      const newList = [...prev];
      newList[index][name] = value;  
      return newList;
    });
  }
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title='사진' multi={true}>
            <PhotoSelector id="ThumbUPhoto" listName={urlInfoList} onChange={fileAddHandler} hasSrc={true} hasSrcFunction={() => photoDeleteHandler(0)} />
          </CommonItemContent>
          <CommonItemContent title='제목'>
            <input type="text" name="title" value={urlInfoList[0].title} onChange={(e) => infoDataChangeHandler(e, 0)} placeholder='제목 입력' />
          </CommonItemContent>
          <CommonItemContent title='내용' multi={true}>
            <TextAreaWrapperCount name="description" value={urlInfoList[0].description} onChange={(e) => infoDataChangeHandler(e, 0)} placeholder="내용을 입력하세요." maxLength={100} />
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
