/* Import */
import { useEffect, useState, useContext } from "react";
/* Component */
import TabSelector from "./TabSelector.js";
/* CSS Module */
// import styles from "../../css/module/common/GallerySettingType.module.scss";

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
  const [radioActive, setRadioActive] = useState(false);
  return (
    <>
      <TabSelector listName={typeList} onChange={setRadioActive} />
    </>
  )
}

export default GallerySettingType;