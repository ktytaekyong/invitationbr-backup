/* Import */
import { useState, useEffect } from "react";
/* CSS Module */
import styles from "../../css/module/common/OptionEffectSelector.module.css";

const effectList = [
  {
    title: "없음"
  }, 
  {
    title: "벚꽃잎"
  }, 
  {
    title: "하트"
  }, 
  {
    title: "눈송이"
  }, 
]; 

const OptionEffectSelector = () => {
  const [isActive, setIsActive] = useState(false);
  const [radioActive, setRadioActive] = useState(false);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
    if(idx === 0) {
      setRadioActive(false);
    } else {
      setRadioActive(true);
    }
    console.log(radioActive);
  }

  useEffect(() => {
    // 초기(저장)값으로 변경(현재 무조건 첫 번째 항목_240904)
    setIsActive(0);
  }, []);

  return (
    <>
      <ul className={styles.effect__selector}>
        {effectList.map((item, idx) => (
          <li className={`${styles.effect__item} ${isActive === idx ? styles["active"] : ""}`} 
          key={item + idx} id={"effect" + idx} onClick={() => setActiveHandler(idx)} 
          >{item.title}</li>
        ))}
      </ul>
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

export default OptionEffectSelector;