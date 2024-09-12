/* Import */
import { useState, useEffect } from "react";
/* Component */
import OptionCommonItem from "./OptionCommonItem.js";
import OptionListWrapper from "./OptionListWrapper.js";
import PhotoSelector from "./PhotoSelector.js";
/* CSS Module */
import styles from "../../css/module/common/OptionIntroPhotoList.module.css";

const OptionIntroPhotoList = () => {
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
      console.log(photoList);
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
      <ul className={styles.option__list}>
        <OptionCommonItem>
          <OptionListWrapper title="사진">
            <PhotoSelector listTitle={photoList} onChange={fileAddHandler} deleteFunction={setPhotoList}/>
          </OptionListWrapper>
        </OptionCommonItem>

        <OptionCommonItem>
          <OptionListWrapper title="문구 및 색상 편집">
            <></>
          </OptionListWrapper>
        </OptionCommonItem>
      </ul>
    </div>
  )
}

export default OptionIntroPhotoList;