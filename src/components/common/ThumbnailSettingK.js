/* Import */
import { useState, useEffect } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import PhotoSelector from "./PhotoSelector.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/common/NoticeSettingT.module.css";

const ThumbnailSettingK = () => {
  const [radioActive, setRadioActive] = useState(false);
  const [videoList, setVideoList] = useState([]);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    if(file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setVideoList([
          {
            src: e.target.result,
            alt: e.target.result,
          },
        ]);
      };
      fileList.readAsDataURL(file);
    }
  }
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="사진">
            <PhotoSelector id="photoList" listName={videoList} onChange={fileAddHandler} deleteFunction={setVideoList} />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="제목">
            <input type="text" />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="내용">
            <input type="text" />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
      <p>청첩장 하단 [카카오톡으로 공유하기]...</p>
      <p>가로 사진 사용 권장..</p>
    </CommonOptionWrapper>
  )
}

export default ThumbnailSettingK;