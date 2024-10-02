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
import styles from "../../css/module/common/NoticeSettingT.module.css";

const ThumbnailSettingU = () => {
  const [radioActive, setRadioActive] = useState(false);
  const [thumbUPhotoList, setThumbUPhotoList] = useState([]);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setThumbUPhotoList([
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
            <PhotoSelector id='ThumbUPhoto' listName={thumbUPhotoList} onChange={fileAddHandler} deleteFunction={setThumbUPhotoList} />
          </CommonItemContent>

          <CommonItemContent title='제목'>
            <input type='text' placeholder='제목 입력' />
          </CommonItemContent>

          <CommonItemContent title='내용' multi={true}>
            <TextEditor></TextEditor>
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
