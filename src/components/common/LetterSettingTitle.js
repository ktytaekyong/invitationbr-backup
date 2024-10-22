/* Import */
import { useState, useEffect } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/common/LetterSettingTitle.module.scss";

const LetterSettingTitle = ({ value }) => {
  return (
    <input type="text" 
      id="letterSettingTitle" 
      value={value}
      className={styles.input__letter_title} 
      placeholder="제목을 입력하세요."
    />
  )
}

export default LetterSettingTitle;