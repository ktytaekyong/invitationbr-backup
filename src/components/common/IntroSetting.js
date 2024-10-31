/* Import */
import { useState, useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
/* CSS Module */
import styles from "../../css/module/common/IntroSetting.module.scss";
/* Image */
import basicTemplateImage1 from "../../img/intro/intro_photo_basic1.jpg";
import basicTemplateImage2 from "../../img/intro/intro_photo_basic2.jpg";
import basicTemplateImage3 from "../../img/intro/intro_photo_basic3.jpg";
import basicTemplateImage4 from "../../img/intro/intro_photo_basic4.jpg";
import FillTemplateImage1 from "../../img/intro/intro_photo_fill1.jpg";
import FillTemplateImage2 from "../../img/intro/intro_photo_fill2.jpg";
import FillTemplateImage3 from "../../img/intro/intro_photo_fill3.jpg";
import FillTemplateImage4 from "../../img/intro/intro_photo_fill4.jpg";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const basicIntroList = [
  {
    imgSrc: basicTemplateImage1,
    altVal: "basicTemplate1",
  },
  {
    imgSrc: basicTemplateImage2,
    altVal: "basicTemplate2",
  },
  {
    imgSrc: basicTemplateImage3,
    altVal: "basicTemplate3",
  },
  {
    imgSrc: basicTemplateImage4,
    altVal: "basicTemplate4",
  },
]
const fillIntroList = [
  {
    imgSrc: FillTemplateImage1,
    altVal: "fillTemplate1",
  },
  {
    imgSrc: FillTemplateImage2,
    altVal: "fillTemplate2",
  },
  {
    imgSrc: FillTemplateImage3,
    altVal: "fillTemplate3",
  },
  {
    imgSrc: FillTemplateImage4,
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