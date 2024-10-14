/* Import */
import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/GalleryMix.module.scss";
/* Image */
// import tempMapImg from "../../img/location/temp_map.png";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const GalleryMix = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  return (
    <div className={`${styles.gallery__type} ${styles.mix}`}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        // scrollbar={{
        //   hide: false,
        // }}
        modules={[Scrollbar]}
        className="mySwiper"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className={styles.top}>
            <img src="" alt="" />
            1
          </div>
          <div className={styles.bottom}>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.top}>
            <img src="" alt="" />
            21
          </div>
          <div className={styles.bottom}>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.top}>
            3
            <img src="" alt="" />
          </div>
          <div className={styles.bottom}>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default GalleryMix;