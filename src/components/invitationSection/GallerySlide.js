/* Import */
import { useState, useContext } from "react";
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
/* Component */
import InvitationModalGallery from "../layout/modal/InvitationModalGallery.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/GallerySlide.module.scss";
/* Context */
import { GalleryContext } from "../../store/option-gallery-context.js";

const GallerySlide = () => {
  const { selectGalleryPhotoList } = useContext(GalleryContext);
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
      >
        {
          selectGalleryPhotoList.map((item, idx) => (
            <SwiperSlide key={item + idx} onClick={() => handleOpen(idx)}>
              <img src={item.src} alt="item.alt" />
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

export default GallerySlide;