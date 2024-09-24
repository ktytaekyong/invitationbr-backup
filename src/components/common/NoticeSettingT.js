/* Import */
import { useState, useEffect } from "react";
/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import TabSelector from "./TabSelector.js"
import PhotoSelector from "./PhotoSelector.js";
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
  {
    title: "식사안내",
    id: "noticeTab2",
    view: false
  }, 
]; 

const NoticeSettingT = () => {
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
    <div className="content__wrapper">
      <CommonItemContent title="탭 순서">
        <TabSelector listName={noticeTList} onChange={setRadioActive} />
      </CommonItemContent>
      <ul className={styles.option__list}>
        {noticeTList.map((item, idx) => (
          <CommonItemWrapper key={`${item.title}${idx}`}>
            {/* <div className={`${styles.option__item} ${item.view ? styles.active : null}`}> */}
            <div className={`${styles.option__item}`}>
              <CommonItemContent title="제목">
                <input type="text" placeholder={item.title}/>
              </CommonItemContent>

              <CommonItemContent title="내용">
                <textarea name="" id=""></textarea>
              </CommonItemContent>

              <CommonItemContent title="사진">
                <PhotoSelector id="photoList" listName={videoList} onChange={fileAddHandler} deleteFunction={setVideoList} />
              </CommonItemContent>

              <CommonItemContent title="사진 위치">
                <ButtonWrapper>
                  <Button content="위"></Button>
                  <Button content="아래"></Button>
                </ButtonWrapper>
              </CommonItemContent>
            </div>
            
          </CommonItemWrapper>
        ))}
        
      </ul>
    </div>
  )
}

export default NoticeSettingT;