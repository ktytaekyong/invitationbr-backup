/* Import */
import { useContext } from "react";
/* CSS Module */
import styles from "../../css/module/invitationSection/Effect.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const Effect = () => {
  const { selectOptionList } = useContext(SetContext);
  return (
    <div 
      className={`${styles.effect} ${selectOptionList.effectRange === "effectAll" ? styles[selectOptionList.effectRange] : ""} 
                  ${selectOptionList.effectType !== "bgEffectNoSelect" && selectOptionList.effectType === "bgEffectBlossoms" ? styles.flower : ""}
                  ${selectOptionList.effectType !== "bgEffectNoSelect" && selectOptionList.effectType === "bgEffectHeart" ? styles.heart : ""}
                  ${selectOptionList.effectType !== "bgEffectNoSelect" && selectOptionList.effectType === "bgEffectSnowflake" ? styles.snowflake : ""}
                `}>
    </div>
  )
}

export default Effect;