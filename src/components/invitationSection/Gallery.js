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
import { InfoContext } from "../../store/option-info-context.js";
const renderContent = (galleryType) => {
  switch (galleryType) {
    case "slide":
      return (
        <GallerySlide></GallerySlide>
      );
    case "checker":
      return (
        <GalleryChecker></GalleryChecker>
      );
    case "mix":
      return (
        <GalleryMix></GalleryMix>
      );
    default:
      return;
  }
};

// const Gallery = ({ galleryType }) => {
const Gallery = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const galleryType = "mix";
  return (
    <div className={`${styles.gallery} ${styles.style_theme_1}`}>
      <div className={styles.gallery__wrap}>
        <HeadLine title="갤러리" content="gallery"></HeadLine>
        <div className={styles.gallery__content}>
          {renderContent(galleryType)}
        </div>
      </div>
    </div>
  )
}

export default Gallery;