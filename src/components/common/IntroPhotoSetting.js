/* Import */
import { useState, useEffect } from "react";
/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import PhotoSelector from "./PhotoSelector.js";
import IntroPhotoSettingTextColor from "./IntroPhotoSettingTextColor.js";
import Button from "../layout/Button.js"
/* CSS Module */
import styles from "../../css/module/common/IntroPhotoSetting.module.css";

const IntroPhotoSetting = () => {
  const [photoList, setPhotoList] = useState([]);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    if(file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setPhotoList([
          {
            src: e.target.result,
            alt: e.target.result,
          },
        ]);
      };
      fileList.readAsDataURL(file);
      // console.log(photoList);
    }
  }
  const [isActive, setIsActive] = useState(0);
  const [isActiveTab, setIsActiveTab] = useState(0);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }
  const setActiveTabHandler = (idx) => {
    setIsActiveTab(idx);
  }

  return (
    <div className="content__wrapper">
      <ul className="option__list">
        <CommonItemWrapper>
          <CommonItemContent title="사진" multi={true}>
            <PhotoSelector id="photoList" listName={photoList} onChange={fileAddHandler} deleteFunction={setPhotoList} />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="편집">
            <IntroPhotoSettingTextColor listName={photoList}></IntroPhotoSettingTextColor>
          </CommonItemContent>
        </CommonItemWrapper>
      </ul>
    </div>
  )
}

export default IntroPhotoSetting;