/* Import */
import { useState, useEffect, useContext, useRef } from "react";
/* Component */
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Outro.module.scss";
/* Image */
import introRing from "../../img/intro/intro_theme_1_ring.png";
import outroImg from "../../img/outro/outro_photo_test1.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const Outro = () => {
  const { outroList, setOutroList } = useContext(SetContext);
  return (
    <div className={`${styles.outro} ${styles.style_theme_1}`}>
      <div className={styles.outro__wrap}>
        <div className={`${styles.outro__content} ${styles[outroList.position]}`}>
          <div className={styles.img__wrap}>
            <img src={outroList.src ? outroList.src : outroImg} alt="" />
          </div>
          <div className={styles.content__wrap}>
            <img src={introRing} alt="" />
            <p>
              {outroList.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Outro;