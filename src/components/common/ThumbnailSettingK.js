/* Import */
import { useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import PhotoSelector from "./PhotoSelector.js";
import TextAreaWrapperCount from "./TextareaWapperCount.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";
/* CSS Module */
// import styles from "../../css/module/common/NoticeSettingT.module.css";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const ThumbnailSettingK = () => {
  const { kakaoInfoList, setKakaoInfoList } = useContext(SetContext);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setKakaoInfoList(prev => (
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
    setKakaoInfoList((prev) => {
      const newList = [...prev];
      newList[index].src = "";  
      return newList;
    });
  }
  const infoDataChangeHandler = (e, index) => {
    const { name, value } = e.target;
    setKakaoInfoList((prev) => {
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
            <PhotoSelector id='ThumbKPhoto' listName={kakaoInfoList} hasSrc={true} onChange={fileAddHandler} hasSrcFunction={() => photoDeleteHandler(0)} />
          </CommonItemContent>

          <CommonItemContent title='제목'>
            <input type='text' name="title" value={kakaoInfoList[0].title} onChange={(e) => infoDataChangeHandler(e, 0)} placeholder='제목 입력' />
          </CommonItemContent>

          <CommonItemContent title='내용' multi={true}>
            <TextAreaWrapperCount name="description" value={kakaoInfoList[0].description} onChange={(e) => infoDataChangeHandler(e, 0)} placeholder="내용을 입력하세요." maxLength={100} />
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
