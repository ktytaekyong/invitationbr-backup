/* Import */
import { useState, useEffect } from "react";
/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import LetterSettingTitle from "./LetterSettingTitle.js";
import LetterSettingContent from "./LetterSettingContent.js";
import Button from "../layout/Button.js"
/* CSS Module */
import styles from "../../css/module/common/IntroPhotoSetting.module.css";

const LetterSetting = () => {
  const [isActive, setIsActive] = useState(0);
  const [isActiveTab, setIsActiveTab] = useState(0);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }
  const setActiveTabHandler = (idx) => {
    setIsActiveTab(idx);
  }

  return (
    <div className="content__wrapper">
      <ul className={styles.option__list}>
        <CommonItemWrapper>
          <CommonItemContent title="제목">
            <LetterSettingTitle />
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="내용">
            <LetterSettingContent />
            <Button type="button" content="샘플 문구 보기"></Button>
          </CommonItemContent>
        </CommonItemWrapper>
      </ul>
    </div>
  )
}

export default LetterSetting;