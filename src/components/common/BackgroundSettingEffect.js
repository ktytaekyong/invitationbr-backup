/* Import */
import { useState, useEffect } from "react";
/* Component */
import TabSelector from "./TabSelector"
import RadioList from "./RadioList";
import RadioItem from "./RadioItem";
/* CSS Module */
// import styles from "../../css/module/common/BackgroundSettingEffect.module.css";

const effectList = [
  {
    title: "없음",
    id: "bgEffectNoSelect"
  }, 
  {
    title: "벚꽃잎",
    id: "bgEffectBlossoms"
  }, 
  {
    title: "하트",
    id: "bgEffectHeart"
  }, 
  {
    title: "눈송이",
    id: "bgEffectSnowflake"
  }, 
]; 

const BackgroundSettingEffect = () => {
  const [isActive, setIsActive] = useState(0);
  return (
    <>
      {/* <ul className={styles.effect__selector}>
        {effectList.map((item, idx) => (
          <li className={`${styles.effect__item} ${isActive === idx ? styles["active"] : ""}`} 
          key={item + idx} id={"effect" + idx} onClick={() => setActiveHandler(idx)} 
          >{item.title}</li>
        ))}
      </ul> */}
      <TabSelector listName={effectList} onChange={setIsActive} />
      {
        isActive === 1 || isActive === 2 || isActive === 3 ? 
        <RadioList>
          <RadioItem radioName="effectSection" id="effectIntro" content="인트로 화면" />
          <RadioItem radioName="effectSection" id="effectAll" content="전체 화면" />
        </RadioList>
        :
        null
      }
    </>
  )
}

export default BackgroundSettingEffect;