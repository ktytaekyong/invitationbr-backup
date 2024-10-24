/* Import */
import { useEffect, useState, useContext } from "react";
import imageCompression from 'browser-image-compression';
/* Component */
import PhotoSelector from "./PhotoSelector.js";
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/GallerySettingPhoto.module.scss";
/* Context */
import { GalleryContext } from "../../store/option-gallery-context.js";

const GallerySettingPhoto = () => {
  const { selectGalleryPhotoList, setSelectGalleryPhotoList } = useContext(GalleryContext);
  const fileAddHandler = async (e) => {
    const file = e.target.files;
    const option = {
      maxSizeMB: 4,
      maxWidthOrHeight: 1200,
      initialQuality: 1,
    }
    if(file && file.length > 0) {
      try {
        const filesArray = Array.from(file);
        filesArray.forEach(async (file) => {
          const compressedFile = await imageCompression(file, option);
          const fileList = new FileReader();
          fileList.onload = (e) => {
            setSelectGalleryPhotoList((prevList) => {
              if (prevList.length >= 20) {
                /* 토스트 알림 추가 가능 */
                return prevList;
              } else {
                return [
                  ...prevList,
                  {
                    src: e.target.result,
                    alt: e.target.result,
                  },
                ];
              }
            });
          };
          fileList.readAsDataURL(compressedFile);
        });
      } catch (error) {
        console.error('이미지 압축 중 오류 발생:', error);
      }
    }
  }
  return (
    <>
      <div className={styles.photo__wrap}>
        <div className={styles.photo__content}>
          <PhotoSelector id="galleryPhotoList" listName={selectGalleryPhotoList} onChange={fileAddHandler} deleteFunction={setSelectGalleryPhotoList} />
        </div>
        <div className={styles.photo__input}>
          <div className={styles.photo__input_wrap}>
            <input type="file" name="galleryFile" id="galleryFile" multiple onChange={fileAddHandler} />
            <label htmlFor="galleryFile">사진 추가</label>
            {/* 아직 안됨 */}
            <p>사진을 끌어오셔도 됩니다.</p>
          </div>
          <div className={styles.photo__input_total}>
            <p>
              <span>{selectGalleryPhotoList.length}</span>
              <span>/</span>
              <span>20</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default GallerySettingPhoto;