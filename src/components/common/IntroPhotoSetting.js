/* Import */
import { useState, useEffect, useContext } from "react";
import imageCompression from 'browser-image-compression';
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
/* Context */
import { IntroContext } from "../../store/option-intro-context.js";

const option = {
  maxSizeMB: 2,
  maxWidthOrHeight: 1024,
}

const IntroPhotoSetting = () => {
  const { selectIntroPhoto, setSelectIntroPhoto } = useContext(IntroContext);
  const [photoList, setPhotoList] = useState([]);
  const fileAddHandler = async (e) => {
    const file = e.target.files[0];
    const option = {
      maxSizeMB: 4,
      maxWidthOrHeight: 1200,
      initialQuality: 1,
    }
    if(file) {
      try {
        const compressedFile = await imageCompression(file, option);
        const originalSize = file.size / 1024; // KB 단위로 변환
        const fileList = new FileReader();
        fileList.onload = (e) => {
          setSelectIntroPhoto([
            {
              src: e.target.result,
              alt: compressedFile.name
            },
          ]);
          console.log(compressedFile);
          console.log(`압축 전 파일 크기: ${originalSize.toFixed(2)} KB`);
          const compressedSize = compressedFile.size / 1024; // KB 단위로 변환
          console.log(`압축 후 파일 크기: ${compressedSize.toFixed(2)} KB`);
        };
        fileList.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('이미지 압축 중 오류 발생:', error);
      }
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
            <PhotoSelector id="photoList" listName={selectIntroPhoto} onChange={fileAddHandler} deleteFunction={setSelectIntroPhoto} />
          </CommonItemContent>

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