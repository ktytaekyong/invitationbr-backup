/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/BgMusic.module.scss";
/* Image */
import iconBgm from "../../img/icon/icon_bg.png";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const BgMusic = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const [isActive, setIsActive] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.bg}`}>
      <button>
        <img src={iconBgm} alt="" />
      </button>
    </div>
  )
}

export default BgMusic;