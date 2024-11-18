/* Import */
import { useState, useContext } from "react";
/* CSS Module */
import styles from "../../css/module/invitationSection/BgMusic.module.scss";
/* Image */
import iconBgm from "../../img/icon/icon_bg.png";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const BgMusic = () => {
  return (
    <div className={`${styles.bg}`}>
      <button>
        <img src={iconBgm} alt="" />
      </button>
    </div>
  )
}

export default BgMusic;