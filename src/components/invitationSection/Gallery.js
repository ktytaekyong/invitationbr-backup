/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import GallerySlide from "./GallerySlide.js";
import GalleryChecker from "./GalleryChecker.js";
import GalleryMix from "./GalleryMix.js";
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Gallery.module.scss";
/* Image */
// import tempMapImg from "../../img/location/temp_map.png";
/* Context */
import { GalleryContext } from "../../store/option-gallery-context.js";



// const Gallery = ({ galleryType }) => {
const Gallery = () => {
  const { selectGalleryType, setSelectGalleryType } = useContext(GalleryContext);
  const renderContent = (selectGalleryType) => {
    switch (selectGalleryType) {
      case "gallerySlideType":
        return (
          <GallerySlide></GallerySlide>
        );
      case "galleryBoardType":
        return (
          <GalleryChecker></GalleryChecker>
        );
      case "galleryMixedType":
        return (
          <GalleryMix></GalleryMix>
        );
      default:
        return;
    }
  };
  return (
    <div className={`${styles.gallery} ${styles.style_theme_1}`}>
      <div className={styles.gallery__wrap}>
        <HeadLine title="갤러리" content="gallery"></HeadLine>
        <div className={styles.gallery__content}>
          {renderContent(selectGalleryType)}
        </div>
      </div>
    </div>
  )
}

export default Gallery;