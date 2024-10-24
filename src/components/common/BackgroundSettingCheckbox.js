/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import CheckList from "./CheckList.js";
import CheckItem from "./CheckItem.js";
/* CSS Module */
// import styles from "../../css/module/common/BackgroundSettingCheckbox.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const BackgroundSettingCheckbox = () => {
  const { selectOptionList, setSelectOptionList } = useContext(SetContext);
  const optionChangeHandler = (option, type) => {
    setSelectOptionList((prev) => ({
      ...prev,
      [type]: option
    }))
    console.log(selectOptionList);
  }
  return (
    <CheckList>
      <CheckItem 
        id="zoomOption" 
        name="zoomOption" 
        content="청첩장 확대 방지" 
        optionSet={(option) => optionChangeHandler(option, "zoomOption")}
      />
      <CheckItem 
        id="scrollEffectOption" 
        name="scrollEffectOption" 
        content="스크롤 시 등장 효과 적용" 
        optionSet={(option) => optionChangeHandler(option, "scrollEffectOption")}
      />
      <CheckItem 
        id="lockOption" 
        name="scrollEffectOption" 
        content="예식일 이후 청첩장 비노출" 
        optionSet={(option) => optionChangeHandler(option, "lockOption")}
      />
    </CheckList>
  )
}

export default BackgroundSettingCheckbox;