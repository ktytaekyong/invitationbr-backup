/* CSS Module */
import styles from "../../css/module/common/LetterSettingTitle.module.scss";

const LetterSettingTitle = ({ value, onChange, dataName }) => {
  return (
    <input type="text" 
      id="letterSettingTitle" 
      name={dataName}
      value={value}
      className={styles.input__letter_title} 
      onChange={onChange}
      placeholder="제목을 입력하세요."
    />
  )
}

export default LetterSettingTitle;