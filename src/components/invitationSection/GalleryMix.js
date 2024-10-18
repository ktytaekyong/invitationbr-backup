/* Import */
import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/GalleryMix.module.scss";
/* Image */
import galleryPhoto from "../../img/gallery/slide_photo_test.png";
/* Context */
import { GalleryContext } from "../../store/option-gallery-context.js";

const GalleryMix = () => {
  const { selectGalleryPhotoList, setSelectGalleryPhotoList } = useContext(GalleryContext);
  return (
    <div className={`${styles.gallery__type} ${styles.mix}`}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={true}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >

        {
          selectGalleryPhotoList.length !== 0 ?
          <SwiperSlide>
            <div className={styles.slide__wrap}>
              {
                selectGalleryPhotoList.filter((_, idx) => idx < 5)
                .map((item, idx) => (
                  <img src={item.src} alt={item.alt} />
                ))
              }
            </div>
          </SwiperSlide>
          :
          <>
            <SwiperSlide>
              <div className={styles.slide__wrap}>
                <img src={galleryPhoto} alt="" />
                <img src={galleryPhoto} alt="" />
                <img src={galleryPhoto} alt="" />
                <img src={galleryPhoto} alt="" />
                <img src={galleryPhoto} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide__wrap}>
                <img src={galleryPhoto} alt="" />
                <img src={galleryPhoto} alt="" />
                <img src={galleryPhoto} alt="" />
                <img src={galleryPhoto} alt="" />
                <img src={galleryPhoto} alt="" />
              </div>
            </SwiperSlide>
          </>
        }
        {
          selectGalleryPhotoList.length > 5 ?
          <SwiperSlide>
            <div className={styles.slide__wrap}>
            {
              selectGalleryPhotoList.filter((_, idx) => (idx > 4) && (idx < 10))
              .map((item, idx) => (
                <img src={item.src} alt={item.alt} />
              ))
            }
            </div>
          </SwiperSlide>
          :
          null
        }
        {
          selectGalleryPhotoList.length > 10 ?
          <SwiperSlide>
            <div className={styles.slide__wrap}>
            {
              selectGalleryPhotoList.filter((_, idx) => (idx > 9) && (idx < 15))
              .map((item, idx) => (
                <img src={item.src} alt={item.alt} />
              ))
            }
            </div>
          </SwiperSlide>
          :
          null
        }
        {
          selectGalleryPhotoList.length > 15 ?
          <SwiperSlide>
            <div className={styles.slide__wrap}>
            {
              selectGalleryPhotoList.filter((_, idx) => (idx > 14) && (idx < 20))
              .map((item, idx) => (
                <img src={item.src} alt={item.alt} />
              ))
            }
            </div>
          </SwiperSlide>
          :
          null
        }
        
      </Swiper>
    </div>
  )
}

export default GalleryMix;