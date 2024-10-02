/* Import */
import { useState, useEffect } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import TabSelector from "./TabSelector.js"
import TextEditor from "./TextEditor.js";
import PhotoSelector from "./PhotoSelector.js";
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
    view: true
  }, 
  // {
  //   title: "식사안내",
  //   id: "noticeTab2",
  //   view: false
  // }, 
]; 

const NoticeSettingT = () => {
  const [radioActive, setRadioActive] = useState(false);
  const [noticeTImgList, setNoticeTImgList] = useState([]);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    if(file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setNoticeTImgList([
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
          <CommonItemContent title="탭 순서" multi="check">
            <TabSelector listName={noticeTList} onChange={setRadioActive} />
            <ButtonWrapper>
              <Button content="탭 추가" styleType="add"></Button>
            </ButtonWrapper>
          </CommonItemContent>
        </CommonItemWrapper>
        {noticeTList.map((item, idx) => (
          <CommonItemWrapper key={`${item.title}${idx}`}>
            {/* <div className={`${styles.option__item} ${item.view ? styles.active : null}`}> */}
              <CommonItemContent title="제목">
                <input type="text" placeholder={item.title}/>
              </CommonItemContent>

              <CommonItemContent title="내용">
                <TextEditor></TextEditor>
              </CommonItemContent>

              <CommonItemContent title="사진" multi={true}>
                <PhotoSelector id="NoticeTPhotoList" listName={noticeTImgList} onChange={fileAddHandler} deleteFunction={setNoticeTImgList} />
                <RadioList title="사진 위치">
                  <RadioItem radioName="noticePhotoPosition" id="noticePhotoIntro" content="본문 위쪽" defaultCheck={true}></RadioItem>
                  <RadioItem radioName="noticePhotoPosition" id="noticePhotoAll" content="본문 아래쪽"></RadioItem>
                </RadioList>
              </CommonItemContent>
          </CommonItemWrapper>
        ))}
      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default NoticeSettingT;