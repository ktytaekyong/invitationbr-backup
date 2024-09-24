/* Import */
import { useState, useEffect } from "react";
/* Component */
import TabSelector from "./TabSelector"
/* CSS Module */
import styles from "../../css/module/common/BackgroundSettingEffect.module.css";

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
  const [radioActive, setRadioActive] = useState(false);
  return (
    <>
      {/* <ul className={styles.effect__selector}>
        {effectList.map((item, idx) => (
          <li className={`${styles.effect__item} ${isActive === idx ? styles["active"] : ""}`} 
          key={item + idx} id={"effect" + idx} onClick={() => setActiveHandler(idx)} 
          >{item.title}</li>
        ))}
      </ul> */}
      <TabSelector listName={effectList} onChange={setRadioActive} />
      <div className={`${styles.radio__wrap} ${radioActive ? styles["active"] : ""}`}>
        <div>
          <input type="radio" name="effectSection" id="effectIntro" defaultChecked />
          <label htmlFor="effectIntro">인트로 화면</label>
        </div>
        <div>
          <input type="radio" name="effectSection" id="effectAll" />
          <label htmlFor="effectAll">전체 화면</label>
        </div>
      </div>
    </>
  )
}

export default BackgroundSettingEffect;