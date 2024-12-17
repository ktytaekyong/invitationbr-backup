/* Import */
import { useEffect } from "react";
import InputBasicDeleteButton from "./InputBasicDeleteButton.js";
/* CSS Module */
import styles from "../../css/module/layout/InputBasic.module.scss";

const InputBasic = ({ inputType, inputName, inputValue, maxLength, onChange, onClear, placeholder, inputStyle }) => {
  return (
    <div className={styles.input__wrap_basic}>
      <input 
        type={inputType} 
        name={inputName} 
        value={inputValue} 
        maxLength={maxLength}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.input__style_basic} ${styles[inputStyle]}`}
      />
      {
        inputValue !== "" ? 
        <InputBasicDeleteButton
          inputName={inputName}
          onClear={onClear}
        /> : null
      }

    </div>
  )
}

export default InputBasic;