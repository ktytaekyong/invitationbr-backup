/* Import */
import { useState, useContext } from "react";
import ReactDOM from 'react-dom';
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
  const { selectGalleryPhotoList } = useContext(GalleryContext);
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
        loop={false}
        centeredSlides={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {
          selectGalleryPhotoList.map((item, idx) => (
            <SwiperSlide key={item.src + idx} onClick={() => handleOpen(idx)}>
              <img src={item.src} alt={item.alt} />
            </SwiperSlide>
          ))
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
          selectGalleryPhotoList.map((item, idx) => (
            <SwiperSlide key={item.src + idx}>
              <img src={item.src} alt={item.alt} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      {
        ReactDOM.createPortal(<InvitationModalGallery openvar={open} onClose={handleClose} clickidx={clickedSlideIndex} />, document.body)
      }
    </div>
  )
}

export default GalleryMix;