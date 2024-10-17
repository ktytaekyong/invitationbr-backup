/* Import */
import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/GallerySlide.module.scss";
/* Image */
import galleryPhoto from "../../img/gallery/slide_photo_test.png";
/* Context */
import { GalleryContext } from "../../store/option-gallery-context.js";

const GallerySlide = () => {
  const { selectGalleryPhotoList, setSelectGalleryPhotoList } = useContext(GalleryContext);
  return (
    <div className={`${styles.gallery__type} ${styles.slide}`}>
      <Swiper
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
        {/* {
          selectIntroPhoto.length === 0 ?
          <img src={introPhoto} alt="표지 사진" />
          : <img src={selectIntroPhoto[0].src} alt="표지 사진" />
        } */}
        {
          selectGalleryPhotoList.length === 0 ?
          <>
            <SwiperSlide>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
          </>
          :
          selectGalleryPhotoList.map((item, idx) => (
            <SwiperSlide key={item + idx}>
              <img src={item.src} alt="item.alt" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default GallerySlide;