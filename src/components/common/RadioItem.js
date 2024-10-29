/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/common/RadioItem.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const RadioItem = ({ id, name, content, radioidx, radioChecked }) => {
  const { selectOptionList, setSelectOptionList, noticeTList, setNoticeTList } = useContext(SetContext);
  const [isChecked, setIsChecked] = useState(selectOptionList[name] === id);
  const checkedChangeHandler = (e) => {
    const { name, id } = e.target;
    setSelectOptionList((prev) => ({
      ...prev,
      [name]: id
    }));
  };
  const photoPositionChangeHandler = (e, idx) => {
    const { name, id } = e.target;
    setNoticeTList((prev) => (
      prev.map((item, previdx) => {
        if(idx === previdx) {
          if(name.includes("position")) {
            return {
              ...item,
              "position": id.includes("top") ? "top" : "bottom"
            }
          } else {
            return item;
          }
        } else {
          return item;
        }
      })
    ));
    console.log(noticeTList);
  };
  const functionChangeHandler = (e, name, idx) => {
    if(name === "effectRange") {
      checkedChangeHandler(e);
    } else {
      photoPositionChangeHandler(e, idx)
    }
    // else if(name === )
  }
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
        checked={radioChecked ? radioChecked : isChecked} 
        onChange={(e) => functionChangeHandler(e, name, radioidx)}
      />
      <label htmlFor={id}>{content}</label>
    </div>
  );
};

export default RadioItem;