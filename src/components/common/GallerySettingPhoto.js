/* Import */
import { useEffect, useState, useContext } from "react";
/* Component */
import PhotoSelector from "./PhotoSelector.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/GallerySettingPhoto.module.css";

const GallerySettingPhoto = () => {
  const [galleryPhotoList, setGalleryPhotoList] = useState([]);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    
    if(file) {
      const fileList = new FileReader();
      console.log(galleryPhotoList);
      fileList.onload = (e) => {
        setGalleryPhotoList([
          ...galleryPhotoList,
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
    <>
      <div className={styles.photo__wrap}>
        <div className={styles.photo__content}>
          <PhotoSelector id="galleryPhotoList" listName={galleryPhotoList} onChange={fileAddHandler} deleteFunction={setGalleryPhotoList} />
        </div>
        <div className={styles.photo__input}>
          <div className={styles.photo__input_wrap}>
            <input type="file" name="galleryFile" id="galleryFile" onChange={fileAddHandler} />
            <label htmlFor="galleryFile">사진 추가</label>
            {/* 아직 안됨 */}
            <p>사진을 끌어오셔도 됩니다.</p>
          </div>
          <div className={styles.photo__input_total}>
            <p>
              <span>{galleryPhotoList.length}</span>
              <span>/</span>
              <span>20</span>
            </p>
          </div>
        </div>
      </div>
      <SettingNotice>
        <SettingNoticeContent>파일 확장자명은 jpg, jpeg, gif, png, 용량 5mb이하로 최대 20장까지 등록하실 수 있습니다.</SettingNoticeContent>
      </SettingNotice>
      <SettingNotice>
        <SettingNoticeContent>사진을 드래그하여 순서를 변경할 수 있습니다.</SettingNoticeContent>
      </SettingNotice>
    </>
  )
}

export default GallerySettingPhoto;