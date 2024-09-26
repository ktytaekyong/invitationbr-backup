/* Import */
import { useState } from "react";
/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import TabSelector from "./TabSelector.js";
/* CSS Module */
import styles from "../../css/module/common/IntroSetting.module.css";
/* Image */
import templateImage1 from "../../img/intro/intro_photo_temp1.png";

const basicIntroList = [
  {
    imgSrc: templateImage1,
    altVal: "basicTemplate1",
  },
  {
    imgSrc: templateImage1,
    altVal: "basicTemplate2",
  },
  {
    imgSrc: templateImage1,
    altVal: "basicTemplate3",
  },
  {
    imgSrc: templateImage1,
    altVal: "basicTemplate4",
  },
]

const fillIntroList = [
  {
    imgSrc: templateImage1,
    altVal: "fillTemplate1",
  },
  {
    imgSrc: templateImage1,
    altVal: "fillTemplate2",
  },
  {
    imgSrc: templateImage1,
    altVal: "fillTemplate3",
  },
  {
    imgSrc: templateImage1,
    altVal: "fillTemplate4",
  },
]

const IntroSetting = () => {
  const [isBasicActive, setIsBasicActive] = useState(0);
  const [isFillActive, setIsFillActive] = useState(null);
  const [isActiveTab, setIsActiveTab] = useState(0);
  const setBasicActiveHandler = (idx) => {
    setIsBasicActive(idx);
    setIsFillActive(null);
  }
  const setFillActiveHandler = (idx) => {
    setIsFillActive(idx);
    setIsBasicActive(null);
  }
  const setActiveTabHandler = (idx) => {
    setIsActiveTab(idx);
  }

  return (
    <div className="content__wrapper">
      <ul className={styles.tab__list}>
        <li className={`${styles.tab__item} ${isActiveTab === 0 ? styles.active : ''}`} onClick={() => setActiveTabHandler(0)}>기본</li>
        <li className={`${styles.tab__item} ${isActiveTab === 1 ? styles.active : ''}`} onClick={() => setActiveTabHandler(1)}>채우기</li>
      </ul>
      <ul className={styles.option__list}>
        <CommonItemWrapper>
          <ul className={`${styles.intro__selector} ${isActiveTab === 0 ? styles.active : ''}`} id="introBasic">
            {basicIntroList.map((item, idx) => (
              <li className={`${styles.intro__item} ${isBasicActive === idx ? styles["active"] : ""}`} key={`${item.imgSrc} ${idx}`} onClick={() => setBasicActiveHandler(idx)}>
                <img src={item.imgSrc} alt={item.altVal} />
              </li>
            ))}
          </ul>
          <ul className={`${styles.intro__selector} ${isActiveTab === 1 ? styles.active : ''}`} id="introFill">
            {fillIntroList.map((item, idx) => (
              <li className={`${styles.intro__item} ${isFillActive === idx ? styles["active"] : ""}`} key={`${item.imgSrc} ${idx}`} onClick={() => setFillActiveHandler(idx)}>
                <img src={item.imgSrc} alt={item.altVal} />
              </li>
            ))}
          </ul>
        </CommonItemWrapper>
      </ul>
    </div>
  )
}

export default IntroSetting;