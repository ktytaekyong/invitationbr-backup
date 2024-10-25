/* Import */
import { useState, useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
/* CSS Module */
import styles from "../../css/module/common/IntroSetting.module.scss";
/* Image */
import templateImage1 from "../../img/intro/intro_photo_temp1.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

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
  const { selectOptionList, setSelectOptionList } = useContext(SetContext);
  const [isActiveTab, setIsActiveTab] = useState(0);
  const setActiveTabHandler = (idx) => {
    setIsActiveTab(idx);
  }
  const introChangeHandler = (e) => {
    const { name } = e.currentTarget.dataset;
    const { id } = e.currentTarget;
    setSelectOptionList((prev) => ({
      ...prev,
      [name]: id
    }))
    console.log(selectOptionList);
  }
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <ul className={styles.tab__list}>
            <li 
              className={`${styles.tab__item} ${isActiveTab === 0 ? styles.active : ''}`} 
              onClick={() => setActiveTabHandler(0)}
            >
              기본
            </li>
            <li 
              className={`${styles.tab__item} ${isActiveTab === 1 ? styles.active : ''}`} 
              onClick={() => setActiveTabHandler(1)}
            >
              채우기
            </li>
          </ul>
          <ul className={`${styles.intro__selector} ${isActiveTab === 0 ? styles.active : ''}`} id="introBasic">
            {basicIntroList.map((item, idx) => (
              <li 
                className={`${styles.intro__item} ${selectOptionList.introFillType === item.altVal ? styles["active"] : ""}`} 
                key={`${item.imgSrc} ${idx}`} 
                data-name="introFillType"
                id={item.altVal}
                onClick={(e) => introChangeHandler(e)}
              >
                <img src={item.imgSrc} alt={item.altVal} />
              </li>
            ))}
          </ul>
          <ul className={`${styles.intro__selector} ${isActiveTab === 1 ? styles.active : ''}`} id="introFill">
            {fillIntroList.map((item, idx) => (
              <li 
                className={`${styles.intro__item} ${selectOptionList.introFillType === item.altVal ? styles["active"] : ""}`} 
                key={`${item.imgSrc} ${idx}`} 
                data-name="introFillType"
                id={item.altVal}
                onClick={(e) => introChangeHandler(e)}
              >
                <img src={item.imgSrc} alt={item.altVal} />
              </li>
            ))}
          </ul>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default IntroSetting;