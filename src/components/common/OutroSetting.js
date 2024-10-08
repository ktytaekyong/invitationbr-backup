/* Import */
import { useState, useEffect } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import PhotoSelector from "./PhotoSelector.js";
import TextEditor from "./TextEditor.js";
import RadioList from "./RadioList.js";
import RadioItem from "./RadioItem.js";
/* CSS Module */
// import styles from "../../css/module/common/NoticeSettingT.module.css";

const OutroSetting = () => {
  const [radioActive, setRadioActive] = useState(false);
  const [outroImgList, setOutroImgList] = useState([]);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setOutroImgList([
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
          <CommonItemContent title='내용'>
            <TextEditor></TextEditor>
          </CommonItemContent>

          <CommonItemContent title='사진' multi={true}>
            <PhotoSelector id='OutroPhoto' listName={outroImgList} onChange={fileAddHandler} deleteFunction={setOutroImgList} />
            <RadioList title='사진 위치 (사진 첨부는 선택사항 입니다.)'>
              <RadioItem radioName='noticePhotoDPosition' id='noticePhotoIntro' content='본문 위쪽' defaultChecked={true}></RadioItem>
              <RadioItem radioName='noticePhotoDPosition' id='noticePhotoAll' content='본문 아래쪽'></RadioItem>
            </RadioList>
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  );
};

export default OutroSetting;
