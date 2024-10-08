/* Component */
/* CSS Module */
import styles from "../../css/module/common/TextareaWrapper.module.scss";

const TextareaWapper = ({ id, content, division, gender }) => {
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
      <textarea name={id} id={id}></textarea>
    </div>
  )
}

export default TextareaWapper;