/* CSS Module */
import styles from "../../css/module/common/TextareaWrapperCount.module.scss";

const TextareaWapperCount = ({ id, name, placeholder, value, onChange, maxLength }) => {
  return (
    <div className={styles.textarea__wrap}>
      <textarea name={name} id={id} value={value} onChange={onChange} placeholder={placeholder} maxLength={maxLength} />
      <span>{value.length}/{maxLength}</span>
    </div>
  )
}

export default TextareaWapperCount;