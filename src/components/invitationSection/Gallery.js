/* Import */
import { useContext } from "react";
import { useLocation } from "react-router-dom";
/* Component */
import GallerySlide from "./GallerySlide.js";
import GalleryChecker from "./GalleryChecker.js";
import GalleryMix from "./GalleryMix.js";
import HeadLine from "../layout/HeadLine.js";
import MobileSettingButtonWrapper from "../layout/MobileSettingButtonWrapper.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Gallery.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const Gallery = () => {
  const previewLocation = useLocation();
  const isTargetPage = previewLocation.pathname === "/Preview";

  const { isMobile, selectOptionList } = useContext(SetContext);
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
      {!isTargetPage && isMobile ? <MobileSettingButtonWrapper id="settingGallery" position="absolute" top="30px" /> : null}
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