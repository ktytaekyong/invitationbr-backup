/* Import */
import InputBasicDeleteButton from "../layout/InputBasicDeleteButton";
/* CSS Module */
import styles from "../../css/module/common/TextareaWrapperAttend.module.scss";

// C: 참석 의사 - 식사 여부, 탑승 여부 신랑측/신부측, 글자 수
const TextareaWapperAttend = ({ id, content, division, gender, placeholder, value, onChange, onClear }) => {
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
      <div className={styles.textarea__container}>
        <textarea 
          name={id} 
          id={id} 
          value={value} 
          onChange={onChange} 
          placeholder={placeholder} 
          maxLength={50} 
        />
        {
          value !== "" ? 
          <InputBasicDeleteButton
            inputName={id}
            onClear={onClear}
          /> : null
        }
        <span>{value.length}/50</span>
      </div>


    </div>
  )
}

export default TextareaWapperAttend;