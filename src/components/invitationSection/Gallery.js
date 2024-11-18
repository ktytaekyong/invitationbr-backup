/* Import */
import { useContext } from "react";
/* Component */
import GallerySlide from "./GallerySlide.js";
import GalleryChecker from "./GalleryChecker.js";
import GalleryMix from "./GalleryMix.js";
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Gallery.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const Gallery = () => {
  const { selectOptionList } = useContext(SetContext);
  const renderContent = (selectGalleryType) => {
    switch (selectGalleryType) {
      case "gallerySlideType":
        return <GallerySlide />;
      case "galleryBoardType":
        return <GalleryChecker />;
      case "galleryMixedType":
        return <GalleryMix />;
      default:
        return;
    }
  };
  return (
    <div id="Gallery" className={`${styles.gallery}`}>
      <div className={styles.gallery__wrap}>
        <HeadLine title="갤러리" content="gallery" />
        <div className={styles.gallery__content}>
          {renderContent(selectOptionList.galleryType)}
        </div>
      </div>
    </div>
  )
}

export default Gallery;