/* Import */
import { useState, useEffect } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import LetterSettingTitle from "./LetterSettingTitle.js";
import TextEditor from "./TextEditor.js";
/* CSS Module */
// import styles from "../../css/module/common/LetterSetting.module.css";

const LetterSetting = () => {
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="제목">
            <LetterSettingTitle />
          </CommonItemContent>
          
          <CommonItemContent title="내용" multi={true}>
            <TextEditor type="letter" />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default LetterSetting;