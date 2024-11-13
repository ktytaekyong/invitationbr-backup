/* Import */
import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
/* Component */
import SettingNotice from "../layout/SettingNotice.js";
import BasicModalGiftKakao from '../layout/modal/BasicModalGiftKakao.js';
/* CSS Module */
import styles from "../../css/module/common/GiftSettingKaKaoDesc.module.scss";
/* Image */
import iconKakaoImg from "../../img/icon/icon_kakao.png"

const GiftSettingKaKaoDesc = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className={styles.kakao__desc}>
        <button onClick={handleOpen}>
          <img src={iconKakaoImg} alt="" />
          <p>카톡 송금 링크 복사 방법</p>
        </button>
      </div>
      {
        ReactDOM.createPortal(<BasicModalGiftKakao onClose={handleClose} openvar={open} />, document.body)
      }
    </>
  )
}

export default GiftSettingKaKaoDesc;