/* Component */
import TabSelector from "./TabSelector.js";

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
  return (
    <TabSelector 
      listName={typeList} 
      name="galleryType"
    />
  )
}

export default GallerySettingType;