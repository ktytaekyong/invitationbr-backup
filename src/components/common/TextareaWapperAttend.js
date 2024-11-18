/* Component */
/* CSS Module */
import styles from "../../css/module/common/TextareaWrapperAttend.module.scss";

const TextareaWapperAttend = ({ id, content, division, gender, placeholder, value, onChange }) => {
  return (
    <div className={styles.textarea__wrap}>
      {
        content ?
        <>
          <label htmlFor={id} className={`${gender === "M" ? styles["style__m"] : styles["style__f"]}`}>
            {content} <span>{division}</span>
          </label>
        </>
        :
        null
      }
      <textarea name={id} id={id} value={value} onChange={onChange} placeholder={placeholder} maxLength={50} />
      <span>{value.length}/50</span>
    </div>
  )
}

export default TextareaWapperAttend;