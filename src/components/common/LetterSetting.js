/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import LetterSettingTitle from "./LetterSettingTitle.js";
import TextEditor from "./TextEditor.js";
/* CSS Module */
// import styles from "../../css/module/common/LetterSetting.module.css";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const LetterSetting = () => {
  const { letterList, setLetterList } = useContext(SetContext);
  const letterTitleChangeHandler = (e) => {
    setLetterList((prev) => ({
        ...prev,
        title: e.target.value
      }))
  }
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="제목">
            <LetterSettingTitle value={letterList.title} onChange={letterTitleChangeHandler} />
          </CommonItemContent>
          
          <CommonItemContent title="내용" multi={true}>
            <TextEditor type="letter" textValue={letterList.content} setLetterList={setLetterList} />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default LetterSetting;