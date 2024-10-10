/* Import */
import { useState, useEffect } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/common/LetterSettingTitle.module.scss";

const LetterSettingTitle = () => {
  return (
    <input type="text" 
    id="letterSettingTitle" 
      className={styles.input__letter_title} 
      placeholder="제목을 입력하세요."
    />
  )
}

export default LetterSettingTitle;