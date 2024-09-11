/* Import */
import { useState } from "react";
/* Component */
import OptionCommonItem from "./OptionCommonItem.js";
/* CSS Module */
import styles from "../../css/module/common/OptionIntroList.module.css";

const basicIntroList = [
  {
    imgSrc: "",
    altVal: "",
  },
  {
    imgSrc: "",
    altVal: "",
  },
  {
    imgSrc: "",
    altVal: "",
  },
  {
    imgSrc: "",
    altVal: "",
  },
  {
    imgSrc: "",
    altVal: "",
  },
]

const fillIntroList = [
  {
    imgSrc: "",
    altVal: "",
  },
  {
    imgSrc: "",
    altVal: "",
  },
  {
    imgSrc: "",
    altVal: "",
  },
  {
    imgSrc: "",
    altVal: "",
  },
]

const OptionIntroList = () => {
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
        <OptionCommonItem>
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
        </OptionCommonItem>
      </ul>
    </div>
  )
}

export default OptionIntroList;