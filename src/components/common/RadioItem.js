/* Import */
import { useState, useEffect } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/common/RadioItem.module.scss";

const RadioItem = ({ id, radioName, content, defaultChecked }) => {
  const [radioActive, setRadioActive] = useState(false);
  return (
    <div className={styles.radio__item}>
      <input type='radio' name={radioName} id={id} defaultChecked={defaultChecked} />
      <label htmlFor={id}>{content}</label>
    </div>
  );
};

export default RadioItem;
