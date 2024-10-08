/* Import */
import { useState, useEffect } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import PhotoSelector from "./PhotoSelector.js";
import TextEditor from "./TextEditor.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";
/* CSS Module */
// import styles from "../../css/module/common/NoticeSettingT.module.css";

const ThumbnailSettingK = () => {
  const [radioActive, setRadioActive] = useState(false);
  const [thumbKPhotoList, setThumbKPhotoList] = useState([]);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setThumbKPhotoList([
          {
            src: e.target.result,
            alt: e.target.result,
          },
        ]);
      };
      fileList.readAsDataURL(file);
    }
  };
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title='사진' multi={true}>
            <PhotoSelector id='ThumbKPhoto' listName={thumbKPhotoList} onChange={fileAddHandler} deleteFunction={setThumbKPhotoList} />
          </CommonItemContent>

          <CommonItemContent title='제목'>
            <input type='text' placeholder='제목 입력' />
          </CommonItemContent>

          <CommonItemContent title='내용' multi={true}>
            <TextEditor></TextEditor>
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
