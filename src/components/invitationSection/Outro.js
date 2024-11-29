/* Import */
import { useContext } from "react";
/* CSS Module */
import styles from "../../css/module/invitationSection/Outro.module.scss";
/* Image */
import introRing from "../../img/intro/intro_theme_1_ring.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const Outro = () => {
  const { outroList } = useContext(SetContext);
  return (
    <div className={`${styles.outro} ${styles.style_theme_1}`}>
      <div className={styles.outro__wrap}>
        <div className={`${styles.outro__content} ${styles[outroList.position]}`}>
            {outroList.src ? 
            <div className={styles.img__wrap}>
              <img src={outroList.src} alt="" />
            </div> : null}
          <div className={styles.content__wrap}>
            <img src={introRing} alt="" />
            <p>
              {
                outroList.content ?
                outroList.content
                : "늘 사랑과 정성으로 키워주신 양가 부모님과\n곁에서 아껴주시는 모든 분들에게\n감사의 말씀 전합니다.\n\n지금의 고마운 마음 잊지 않고\n잘 살겠습니다."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Outro;