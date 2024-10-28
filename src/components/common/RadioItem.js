/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/common/RadioItem.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const RadioItem = ({ id, name, content }) => {
  const { selectOptionList, setSelectOptionList } = useContext(SetContext);
  const [isChecked, setIsChecked] = useState(selectOptionList[name] === id);
  const checkedChangeHandler = (e) => {
    const { name, id } = e.target;
    setSelectOptionList((prev) => ({
      ...prev,
      [name]: id
    }));
  };
  useEffect(() => {
    setIsChecked(selectOptionList[name] === id);
  }, [selectOptionList, name, id, isChecked]);
  return (
    <div className={styles.radio__item}>
      <input 
        type="radio" 
        name={name} 
        id={id} 
        value={id} 
        checked={isChecked} 
        onChange={checkedChangeHandler}
      />
      <label htmlFor={id}>{content}</label>
    </div>
  );
};

export default RadioItem;