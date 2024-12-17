/* Import */
import { useEffect } from "react";
import { DataDeleter_Object } from "../../utils/helpers.js";
/* CSS Module */
import styles from "../../css/module/layout/InputBasicDeleteButton.module.scss";
/* Image */
import deleteImg from "../../img/icon/icon_delete.png";

const InputBasicDeleteButton = ({ inputName, onClear }) => {
  return (
    <button 
      type="button"
      className={styles.basic__input_delete}
      name={inputName}
      onClick={(e) => {DataDeleter_Object(e, onClear); console.log(e)}}
    >
      <img src={deleteImg} alt="" />
    </button>
  )
}

export default InputBasicDeleteButton;