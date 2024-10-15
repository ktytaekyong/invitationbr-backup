/* Import */
import { useState, useEffect, useContext, useRef } from "react";
/* Component */
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Outro.module.scss";
/* Image */
import introRing from "../../img/intro/intro_theme_1_ring.png";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const Outro = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const [isActive, setIsActive] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.outro} ${styles.style_theme_1}`}>
      <div className={styles.outro__wrap}>
        <div className={styles.outro__content}>
          <div className={styles.img__wrap}>
            <img src="" alt="" />
          </div>
          <div className={styles.content__wrap}>
            <img src={introRing} alt="" />
            <p>
            늘 사랑과 정성으로 키워주신 양가 부모님과<br />
            곁에서 아껴주시는 모든 분들에게<br />
            감사의 말씀 전합니다.<br /><br />
            지금의 고마운 마음 잊지 않고<br />
            잘 살겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Outro;