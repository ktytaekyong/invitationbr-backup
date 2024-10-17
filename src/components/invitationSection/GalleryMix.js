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
// import tempMapImg from "../../img/location/temp_map.png";
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
          selectGalleryPhotoList.length === 0 ?
          
          :
        }
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default GalleryMix;