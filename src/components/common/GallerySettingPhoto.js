/* Import */
import { useState, useContext } from "react";
import ReactDOM from 'react-dom';
import imageCompression from 'browser-image-compression';
/* Component */
import PhotoSelector from "./PhotoSelector.js";
import Toast from "../layout/Toast.js";
/* CSS Module */
import styles from "../../css/module/common/GallerySettingPhoto.module.scss";
/* Context */
import { GalleryContext } from "../../store/option-gallery-context.js";

const GallerySettingPhoto = () => {
  const { selectGalleryPhotoList, setSelectGalleryPhotoList } = useContext(GalleryContext);
  const [open, setOpen] = useState(false);
  const fileAddHandler = async (e) => {
    e.preventDefault();
    const files = e.type === 'drop' ? e.dataTransfer.files : e.target.files;
    const option = {
      maxSizeMB: 4,
      maxWidthOrHeight: 1200,
      initialQuality: 1,
    }
    if (files && files.length > 0) {
      try {
        const filesArray = Array.from(files);
        for (const file of filesArray) { 
          const compressedFile = await imageCompression(file, option);
          const fileList = new FileReader();
          
          fileList.onload = (event) => {
            setSelectGalleryPhotoList((prevList) => {
              if (prevList.length >= 20) {
                setOpen(true);
                return prevList;
              } else {
                return [
                  ...prevList,
                  {
                    src: event.target.result,
                    alt: event.target.result,
                  },
                ];
              }
            });
          };
          fileList.readAsDataURL(compressedFile);
        }
      } catch (error) {
        console.error('이미지 압축 중 오류 발생:', error);
      }
    }
  }

  return (
    <>
      <div 
        className={styles.photo__wrap}
        onDragOver={(e) => e.preventDefault()}
        onDrop={fileAddHandler}
      >
        <div className={styles.photo__content} >
          <PhotoSelector id="galleryPhotoList" listName={selectGalleryPhotoList} onChange={fileAddHandler} deleteFunction={setSelectGalleryPhotoList} />
        </div>
        <div className={styles.photo__input}>
          <div className={styles.photo__input_wrap}>
            <input type="file" name="galleryFile" id="galleryFile" multiple onChange={fileAddHandler} /> 
            <label htmlFor="galleryFile">사진 추가</label>
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
      {
        ReactDOM.createPortal(<Toast type="warn" open={open} setOpen={setOpen} message="최대 20장입니다." />, document.body)
      }
    </>
  )
}

export default GallerySettingPhoto;