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
// import tempMapImg from "../../img/location/temp_map.png";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const GallerySlide = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default GallerySlide;