/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/Effect.module.scss";
/* Image */
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const Effect = () => {
  const { selectOptionList } = useContext(SetContext);
  return (
    <div 
      className={`${styles.effect} 
                  ${selectOptionList.effectType !== "bgEffectNoSelect" && selectOptionList.effectType === "bgEffectBlossoms" ? styles.flower : ""}
                  ${selectOptionList.effectType !== "bgEffectNoSelect" && selectOptionList.effectType === "bgEffectHeart" ? styles.heart : ""}
                  ${selectOptionList.effectType !== "bgEffectNoSelect" && selectOptionList.effectType === "bgEffectSnowflake" ? styles.snowflake : ""}
                `}>
      {/* {selectOptionList.effectType} */}
      {/* {selectOptionList.effectRange} */}
    </div>
  )
}

export default Effect;