/* Import */
import { useEffect, useState, useContext } from "react";
/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import BackgroundSettingTheme from "./BackgroundSettingTheme.js";
import BackgroundSettingEffect from "./BackgroundSettingEffect.js";
import BackgroundSettingCheckbox from "./BackgroundSettingCheckbox.js";
import TabSelector from "./TabSelector.js";
/* CSS Module */
import styles from "../../css/module/common/GallerySettingType.module.css";

const typeList = [
  {
    title: "슬라이드",
    id: "gallerySlideType"
  }, 
  {
    title: "바둑판",
    id: "galleryBoardType"
  }, 
  {
    title: "혼합",
    id: "galleryMixedType"
  }, 
]

const GallerySettingType = () => {
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
      <TabSelector listName={typeList} onChange={setRadioActive} />
      <div className={`${styles.radio__wrap} ${radioActive ? styles["active"] : ""}`}>
        <div>
          <input type="radio" name="galleryTypeOption" id="galleryTypeOption" defaultChecked />
          <label htmlFor="galleryTypeOption">사진이 3줄이</label>
        </div>
      </div>
    </>
  )
}

export default GallerySettingType;