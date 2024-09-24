/* Import */
import { useEffect, useState, useContext } from "react";
/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import GallerySettingType from "./GallerySettingType.js";
import PhotoSelector from "./PhotoSelector.js";
/* CSS Module */

const GallerySetting = () => {
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
    <div className="content__wrapper">
      <ul className="option__list">
        <CommonItemWrapper>
          <CommonItemContent title="타입">
            <GallerySettingType />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <PhotoSelector id="galleryPhotoList" listName={galleryPhotoList} onChange={fileAddHandler} deleteFunction={setGalleryPhotoList} />
        </CommonItemWrapper>
      </ul>
    </div>
  )
}

export default GallerySetting;