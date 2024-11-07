/* Import */
import { useState, useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
/* Component */
import GalleryModal from "./GalleryModal.js";
/* CSS Module */
import styles from "../../../css/module/layout/modal/InvitationModalGallery.module.scss";
/* Image */
import galleryPhoto from "../../../img/gallery/slide_photo_test.png";
/* Context */
import { GalleryContext } from "../../../store/option-gallery-context.js";

const InvitationModalGallery = ({ src, onClose, openvar, clickidx }) => {
  const { selectGalleryPhotoList, setSelectGalleryPhotoList } = useContext(GalleryContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <GalleryModal 
      openvar={openvar} 
      onClose={onClose} 
      ButtonWrapperUse={false}
    >
      <div className="modal">
        <Swiper
          initialSlide={clickidx}  // 클릭된 슬라이드부터 시작
          loop={true}
          spaceBetween={8}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          className="modalSwiper"
          navigation={true}
        >
          {selectGalleryPhotoList.length !== 0 ? (
            selectGalleryPhotoList.map((item, idx) => (
              <SwiperSlide key={idx}>
                <img src={item.src} alt={item.alt} />
              </SwiperSlide>
            ))
          ) : (
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
          )}
        </Swiper>
      </div>
    </GalleryModal>
  );
}

export default InvitationModalGallery;