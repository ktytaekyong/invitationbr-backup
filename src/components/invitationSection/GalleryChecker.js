/* Import */
import { useState, useEffect, useContext } from "react";
import ReactDOM from 'react-dom';
import 'swiper/css';
import 'swiper/css/scrollbar';
/* Component */
import InvitationModalGallery from "../layout/modal/InvitationModalGallery.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/GalleryChecker.module.scss";
/* Image */
/* Context */
import { GalleryContext } from "../../store/option-gallery-context.js";
import { SetContext } from "../../store/option-set-context.js";

const GalleryChecker = () => {
  const { selectGalleryPhotoList } = useContext(GalleryContext);
  const { selectOptionList } = useContext(SetContext);
  const [moreViewIdx, setMoreViewIdx] = useState(9);
  const [clickedSlideIndex, setClickedSlideIndex] = useState(0); 
  const [open, setOpen] = useState(false);
  const handleOpen = (index) => {
    setOpen(true);
    setClickedSlideIndex(index);
  }
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if(selectOptionList.galleryMoreOption) {
      setMoreViewIdx(9);
    } else {
      setMoreViewIdx(20);
    }
    console.log(selectOptionList.galleryMoreOption);
    console.log(moreViewIdx);
    console.log(selectGalleryPhotoList.length);
  }, [selectOptionList.galleryMoreOption])
  return (
    <div className={`${styles.gallery__type} ${styles.checker}`}>
      <div className={styles.checker__wrap}>
        {
          selectGalleryPhotoList.filter((_, idx) => idx < moreViewIdx)
          .map((item, idx) => (
            <div key={item + idx} onClick={() => handleOpen(idx)} className={styles.gallery__item}>
              <img src={item.src} alt="" />
            </div>
          ))
        }
      </div>
      {
        selectOptionList.galleryMoreOption && (moreViewIdx === 9) && (selectGalleryPhotoList.length > moreViewIdx) ?
        <ButtonWrapper styleType="center">
          <Button 
            content="더보기" 
            styleType="invitation__gallery_view"
            onClick={() => setMoreViewIdx(20)}
          />
        </ButtonWrapper>
        : null
      }
      {
        ReactDOM.createPortal(<InvitationModalGallery openvar={open} onClose={handleClose} clickidx={clickedSlideIndex} />, document.body)
      }
    </div>
  )
}

export default GalleryChecker;