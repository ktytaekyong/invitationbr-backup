/* Import */
import { useEffect, useState, useContext } from "react";
/* Component */
import TabSelector from "./TabSelector.js";
/* CSS Module */
// import styles from "../../css/module/common/GallerySettingType.module.scss";
/* Context */
import { GalleryContext } from "../../store/option-gallery-context.js";

const typeList = [
  {
    title: "슬라이드",
    id: "gallerySlideType"
  }, 
  {
    title: "바둑판",
    id: "galleryBoardType"
  }, 
  {
    title: "혼합",
    id: "galleryMixedType"
  }, 
]

const GallerySettingType = () => {
  const { selectGalleryType, setSelectGalleryType } = useContext(GalleryContext);
  const changeTypeHandler = (item) => {
    setSelectGalleryType(item.id);
  }
  return (
    <TabSelector listName={typeList} type="gallery" onChange={changeTypeHandler} />
  )
}

export default GallerySettingType;