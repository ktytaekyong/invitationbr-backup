/* Import */
import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
/* Component */
import InvitationModalGallery from "../layout/modal/InvitationModalGallery.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/GalleryMix.module.scss";
/* Image */
import galleryPhoto from "../../img/gallery/slide_photo_test.png";
/* Context */
import { GalleryContext } from "../../store/option-gallery-context.js";

const GalleryMix = () => {
  const { selectGalleryPhotoList, setSelectGalleryPhotoList } = useContext(GalleryContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [clickedSlideIndex, setClickedSlideIndex] = useState(0); 
  const [open, setOpen] = useState(false);
  const handleOpen = (index) => {
    setOpen(true);
    setClickedSlideIndex(index);
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={`${styles.gallery__type} ${styles.mix}`}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {
          selectGalleryPhotoList.length !== 0 ?
          selectGalleryPhotoList.map((item, idx) => (
            <SwiperSlide onClick={() => handleOpen(idx)}>
              <img src={item.src} alt={item.alt} />
            </SwiperSlide>
          ))
          :
          <>
            <SwiperSlide onClick={() => handleOpen(1)}>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide onClick={() => handleOpen(2)}>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
          </>
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={8}
        slidesPerView={4}
        slidesPerGroup={4}
        pagination={true}
        freeMode={false}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper"
      >
        {
          selectGalleryPhotoList.length !== 0 ?
          selectGalleryPhotoList.map((item, idx) => (
            <SwiperSlide>
              <img src={item.src} alt={item.alt} />
            </SwiperSlide>
          ))
          :
          <>
            <SwiperSlide>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
          </>
        }
      </Swiper>
      <InvitationModalGallery openvar={open} onClose={handleClose} clickidx={clickedSlideIndex}></InvitationModalGallery>
    </div>
  )
}

export default GalleryMix;