/* Component */
import CheckList from "./CheckList.js";
import CheckItem from "./CheckItem.js";

// C: 배경 편집 - 옵션 (BackgroundSetting)
const BackgroundSettingCheckbox = () => {
  return (
    <CheckList>
      <CheckItem 
        id="zoomOption" 
        name="zoomOption" 
        content="청첩장 확대 방지" 
      />
      <CheckItem 
        id="scrollEffectOption" 
        name="scrollEffectOption" 
        content="스크롤 시 등장 효과 적용" 
      />
      <CheckItem 
        id="lockOption" 
        name="lockOption" 
        content="예식일 이후 청첩장 비노출" 
      />
    </CheckList>
  )
}

export default BackgroundSettingCheckbox;