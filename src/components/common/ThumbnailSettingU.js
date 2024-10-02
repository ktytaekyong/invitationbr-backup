/* Import */
import { useState, useEffect } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import PhotoSelector from "./PhotoSelector.js";
/* CSS Module */
import styles from "../../css/module/common/NoticeSettingT.module.css";

const ThumbnailSettingU = () => {
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
      <p>가로 사진 사용 권장..</p>
    </CommonOptionWrapper>
  )
}

export default ThumbnailSettingU;