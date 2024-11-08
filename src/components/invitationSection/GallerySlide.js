/* Import */
import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
/* Component */
import InvitationModalGallery from "../layout/modal/InvitationModalGallery.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/GallerySlide.module.scss";
/* Image */
import galleryPhoto from "../../img/gallery/slide_photo_test.png";
/* Context */
import { GalleryContext } from "../../store/option-gallery-context.js";

const GallerySlide = () => {
  const { selectGalleryPhotoList, setSelectGalleryPhotoList } = useContext(GalleryContext);
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
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {
          selectGalleryPhotoList.length === 0 ?
          <>
            <SwiperSlide onClick={() => handleOpen(1)}>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
            <SwiperSlide onClick={() => handleOpen(2)}>
              <img src={galleryPhoto} alt="" />
            </SwiperSlide>
          </>
          :
          selectGalleryPhotoList.map((item, idx) => (
            <SwiperSlide key={item + idx} onClick={() => handleOpen(idx)}>
              <img src={item.src} alt="item.alt" />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <InvitationModalGallery openvar={open} onClose={handleClose} clickidx={clickedSlideIndex}></InvitationModalGallery>
    </div>
  )
}

export default GallerySlide;