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
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/common/NoticeSettingT.module.css";

const noticeTList = [
  {
    title: "포토부스",
    id: "noticeTab1",
    view: true,
  },
  {
    title: "식사안내",
    id: "noticeTab2",
    view: false,
  },
];

const NoticeSettingD = () => {
  const [radioActive, setRadioActive] = useState(false);
  const [noticeDImgList, setNoticeDImgList] = useState([]);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setNoticeDImgList([
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
          <CommonItemContent title='제목'>
            <input type='text' placeholder='제목 입력' />
          </CommonItemContent>

          <CommonItemContent title='내용'>
            <TextEditor></TextEditor>
          </CommonItemContent>

          <CommonItemContent title='사진' multi={true}>
            <PhotoSelector id='NoticeDPhotoList' listName={noticeDImgList} onChange={fileAddHandler} deleteFunction={setNoticeDImgList} />
            <RadioList title='사진 위치'>
              <RadioItem radioName='noticePhotoDPosition' id='noticePhotoIntro' content='본문 위쪽' defaultChecked={true}></RadioItem>
              <RadioItem radioName='noticePhotoDPosition' id='noticePhotoAll' content='본문 아래쪽'></RadioItem>
            </RadioList>
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  );
};

export default NoticeSettingD;
