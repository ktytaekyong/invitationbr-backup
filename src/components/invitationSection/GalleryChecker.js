/* Import */
import { useState, useEffect, useContext } from "react";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/GalleryChecker.module.scss";
/* Image */
import galleryPhoto from "../../img/gallery/slide_photo_test.png";
/* Context */
import { GalleryContext } from "../../store/option-gallery-context.js";

const GalleryChecker = () => {
  const { selectGalleryPhotoList, setSelectGalleryPhotoList, selectGalleryView, setSelectGalleryView } = useContext(GalleryContext);
  const [moreViewIdx, setMoreViewIdx] = useState(20);
  useEffect(() => {
    if(selectGalleryView) {
      setMoreViewIdx(9);
    } else {
      setMoreViewIdx(20);
    }
  }, [selectGalleryView])
  return (
    <div className={`${styles.gallery__type} ${styles.checker}`}>
      <div className={styles.checker__wrap}>
        {
          selectGalleryPhotoList.length === 0 ?
          <>
            <div className={styles.gallery__item}>
              <img src={galleryPhoto} alt="" />
            </div>
            <div className={styles.gallery__item}>
              <img src={galleryPhoto} alt="" />
            </div>
            <div className={styles.gallery__item}>
              <img src={galleryPhoto} alt="" />
            </div>
            <div className={styles.gallery__item}>
              <img src={galleryPhoto} alt="" />
            </div>
            <div className={styles.gallery__item}>
              <img src={galleryPhoto} alt="" />
            </div>
            <div className={styles.gallery__item}>
              <img src={galleryPhoto} alt="" />
            </div>
            <div className={styles.gallery__item}>
              <img src={galleryPhoto} alt="" />
            </div>
            <div className={styles.gallery__item}>
              <img src={galleryPhoto} alt="" />
            </div>
            <div className={styles.gallery__item}>
              <img src={galleryPhoto} alt="" />
            </div>
            <div className={styles.gallery__item}>
              <img src={galleryPhoto} alt="" />
            </div>
            <div className={styles.gallery__item}>
              <img src={galleryPhoto} alt="" />
            </div>
          </>
          :
          selectGalleryPhotoList.filter((_, idx) => idx < moreViewIdx)
          .map((item, idx) => (
            <div key={item + idx} className={styles.gallery__item}>
              <img src={item.src} alt="" />
            </div>
          ))
        }
      </div>
      {
        selectGalleryView === false ?
        null :
        <ButtonWrapper styleType="center">
          <Button content="더보기" styleType="invitation__gallery_view" />
        </ButtonWrapper>
      }
      {/* <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}
    </div>
  )
}

export default GalleryChecker;