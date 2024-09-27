/* Import */
import { useState, useEffect } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/common/LetterSettingTitle.module.css";

const LetterSettingTitle = () => {
  return (
    <input type="text" id="letterSettingTitle" className={styles.input__letter_title} />
  )
}

export default LetterSettingTitle;