/* CSS Module */
import styles from "../../css/module/common/LetterSettingTitle.module.scss";

const LetterSettingTitle = ({ value, onChange }) => {
  return (
    <input type="text" 
      id="letterSettingTitle" 
      name="title"
      value={value}
      className={styles.input__letter_title} 
      onChange={onChange}
      placeholder="제목을 입력하세요."
    />
  )
}

export default LetterSettingTitle;