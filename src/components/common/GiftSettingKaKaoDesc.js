/* Component */
import SettingNotice from "../layout/SettingNotice.js";
/* CSS Module */
import styles from "../../css/module/common/GiftSettingKaKaoDesc.module.scss";
/* Image */
import iconKakaoImg from "../../img/icon/icon_kakao.png"

const GiftSettingKaKaoDesc = () => {
  return (
    <div className={styles.kakao__desc}>
      <img src={iconKakaoImg} alt="" />
      <p>카톡 송금 링크 복사 방법</p>
    </div>
  )
}

export default GiftSettingKaKaoDesc;