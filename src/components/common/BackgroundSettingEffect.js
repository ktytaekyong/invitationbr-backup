/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import TabSelector from "./TabSelector"
import RadioList from "./RadioList";
import RadioItem from "./RadioItem";
/* CSS Module */
// import styles from "../../css/module/common/BackgroundSettingEffect.module.css";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

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
  const { selectOptionList, setSelectOptionList } = useContext(SetContext);
  const [isActive, setIsActive] = useState(0);
  const optionChangeHandler = (option, type) => {
    setSelectOptionList((prev) => ({
      ...prev,
      [type]: option
    }))
    console.log(selectOptionList);
  }
  return (
    <>
      <TabSelector listName={effectList} onChange={setIsActive} optionSet={(option) => optionChangeHandler(option, "effectType")} />
      {
        isActive === 1 || isActive === 2 || isActive === 3 ? 
        <RadioList>
          <RadioItem radioName="effectSection" id="effectIntro" content="인트로 화면" optionSet={(option) => optionChangeHandler(option, "effectRange")} defaultChecked />
          <RadioItem radioName="effectSection" id="effectAll" content="전체 화면" optionSet={(option) => optionChangeHandler(option, "effectRange")} />
        </RadioList>
        :
        null
      }
    </>
  )
}

export default BackgroundSettingEffect;