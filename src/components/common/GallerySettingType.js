/* Import */
import { useEffect, useState, useContext } from "react";
/* Component */
import TabSelector from "./TabSelector.js";
/* CSS Module */
// import styles from "../../css/module/common/GallerySettingType.module.scss";
/* Context */
// import { GalleryContext } from "../../store/option-gallery-context.js";

const typeList = [
  {
    title: "혼합",
    id: "galleryMixedType"
  }, 
  {
    title: "바둑판",
    id: "galleryBoardType"
  }, 
  {
    title: "슬라이드",
    id: "gallerySlideType"
  }
]

const GallerySettingType = () => {
  // const { selectGalleryType, setSelectGalleryType } = useContext(GalleryContext);
  return (
    <TabSelector 
      listName={typeList} 
      name="galleryType"
    />
  )
}

export default GallerySettingType;