/* Component */
/* CSS Module */
import styles from "../../css/module/common/TextareaWrapper.module.scss";

const TextareaWapper = ({ id, content, division, gender, placeholder, value, onChange }) => {
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
      <textarea name={id} id={id} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default TextareaWapper;