/* Import */
import { useContext } from "react";
/* Component */
import TabSelector from "./TabSelector"
import RadioList from "./RadioList";
import RadioItem from "./RadioItem";
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

// C: 배경 편집 - 효과 (BackgroundSetting)
const BackgroundSettingEffect = () => {
  const { selectOptionList } = useContext(SetContext);
  return (
    <>
      <TabSelector listName={effectList} name="effectType" />
      {
        selectOptionList.effectType === "bgEffectBlossoms" 
        || selectOptionList.effectType === "bgEffectHeart"
        || selectOptionList.effectType === "bgEffectSnowflake" ? 
        <RadioList>
          <RadioItem 
            name="effectRange" 
            id="effectIntro" 
            content="인트로 화면" 
          />
          <RadioItem 
            name="effectRange" 
            id="effectAll" 
            content="전체 화면" 
          />
        </RadioList>
        :
        null
      }
    </>
  )
}

export default BackgroundSettingEffect;