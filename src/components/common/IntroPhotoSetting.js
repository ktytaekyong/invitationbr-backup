/* Import */
import { useState, useEffect } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import PhotoSelector from "./PhotoSelector.js";
import IntroPhotoSettingTextColor from "./IntroPhotoSettingTextColor.js";
import ButtonWrapper from "../layout/ButtonWrapper.js"
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
    }
  }
  const [isActive, setIsActive] = useState(false);
  const setActiveHandler = () => {
    setIsActive(!isActive);
  }

  return (
    <CommonOptionWrapper>
      <CommonOptionContent>

        <CommonItemWrapper>
          <CommonItemContent title="사진" multi={true}>
            <PhotoSelector id="photoList" listName={photoList} onChange={fileAddHandler} deleteFunction={setPhotoList} />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="편집" multi={true}>
            <ButtonWrapper>
              <Button type="button" content={"문구 및 색상 편집"} styleType="modify" onClick={setActiveHandler} />
            </ButtonWrapper>
            <IntroPhotoSettingTextColor listName={photoList} isActive={isActive} />
          </CommonItemContent>
        </CommonItemWrapper>
        
      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default IntroPhotoSetting;