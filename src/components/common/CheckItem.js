/* Import */
import { useState, useEffect, useContext } from "react";
/* CSS Module */
import styles from "../../css/module/common/CheckItem.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const CheckItem = ({ name, id, content, labelImgSrc, children, groupType }) => {
  const { selectOptionList, setSelectOptionList, accountInfoList, setAccountInfoList } = useContext(SetContext);
  const [ isChecked, setIsChecked ] = useState();
  const checkedChangeHandler = (e) => {
    const { name, id, checked } = e.target;
    const newArray = Object.entries(selectOptionList);
    newArray.map((item) => {
      if(item.includes(id)) {
        setIsChecked(checked);
        if(typeof item[1] === "boolean") {
          setSelectOptionList((prev) => ({
            ...prev,
            [name]: checked
          }))
        } else if(typeof item[1] === "string") {
          setSelectOptionList((prev) => ({
            ...prev,
            [name]: id
          }))
        }
      }
    })
    console.log(selectOptionList);
    console.log(checked);
  }
  const checkedChangeAccountHandler = (e) => {
    const { name, id, checked } = e.target;
    const newArray = Object.entries(accountInfoList[groupType]);
    newArray.map((item) => {
      setIsChecked(checked);
      setSelectOptionList((prev) => ({
        ...prev,
        [groupType]: {
          ...prev[groupType],
          [name]: checked
        }
      }))
    })
    console.log(accountInfoList[groupType]);
    console.log(checked);
  }
  useEffect(() => {
    const newArray = Object.entries(selectOptionList);
    newArray.map((item) => {
      if(item.includes(id)) {
        if(typeof item[1] === "boolean") {
          setIsChecked(item[1]);
        }
      }
    })
  }, [])
  return (
    name !== "kakaopayUse" ? 
    <div className={styles.check}>
      <input 
        type="checkbox" 
        name={name} 
        id={id} 
        checked={isChecked}
        onChange={(e) => checkedChangeHandler(e)}
      />
      <label htmlFor={id}>
        {labelImgSrc ? <img src={labelImgSrc} alt="" /> : null}
        {content}
      </label>
      {children}
    </div>
    :
    <div className={styles.check}>
      <input 
        type="checkbox" 
        name={name} 
        id={id} 
        checked={isChecked}
        onChange={(e) => checkedChangeAccountHandler(e)}
      />
      <label htmlFor={id}>
        {
          labelImgSrc ?
          <img src={labelImgSrc} alt="" />
          : null
        }
        {content}
      </label>
      {children}
    </div>
  )
}

export default CheckItem;