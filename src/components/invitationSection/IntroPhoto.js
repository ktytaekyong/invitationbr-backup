/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/Intro.module.scss";
/* Image */
import intro1Ring from "../../img/intro/intro_theme_1_ring.png";
import intro1Letter from "../../img/intro/intro_theme_1_lettering.png";
import intro2Letter from "../../img/intro/intro_theme_2_lettering.png";
import intro3Letter from "../../img/intro/intro_theme_3_flower.png";
import intro4Letter from "../../img/intro/intro_theme_4_lettering.png";
import introPhoto from "../../img/intro/intro_photo_test.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { InfoContext } from "../../store/option-info-context.js";
import { IntroContext } from "../../store/option-intro-context.js";

const IntroPhoto = () => {
  return (
    <div className={styles.intro__photo}>
      {
        selectIntroPhoto.length === 0 ?
        <img src={introPhoto} alt="표지 사진" />
        : <img src={selectIntroPhoto[0].src} alt="표지 사진" />
      }
    </div>
  )
}

export default IntroPhoto;