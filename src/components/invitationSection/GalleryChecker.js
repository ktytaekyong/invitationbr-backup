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
import { SetContext } from "../../store/option-set-context.js";

const GalleryChecker = () => {
  const { selectGalleryPhotoList } = useContext(GalleryContext);
  const { selectOptionList, setSelectOptionList } = useContext(SetContext);
  const [moreViewIdx, setMoreViewIdx] = useState(20);
  useEffect(() => {
    if(selectOptionList.galleryMoreOption) {
      setMoreViewIdx(9);
    } else {
      setMoreViewIdx(20);
    }
  }, [selectOptionList.galleryMoreOption])
  const moreViewHandler = () => {
    setSelectOptionList((prev) => ({
      ...prev,
      galleryMoreOption: !selectOptionList.galleryMoreOption
    }))
  }
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
            {
              selectOptionList.galleryMoreOption === false ?
              <>
                <div className={styles.gallery__item}>
                  <img src={galleryPhoto} alt="" />
                </div>
                <div className={styles.gallery__item}>
                  <img src={galleryPhoto} alt="" />
                </div>
              </>
              : null
            }
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
        selectOptionList.galleryMoreOption ?
        <ButtonWrapper styleType="center">
          <Button 
            content="더보기" 
            styleType="invitation__gallery_view"
            onClick={moreViewHandler}
          />
        </ButtonWrapper>
        : null
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