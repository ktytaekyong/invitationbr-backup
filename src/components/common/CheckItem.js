/* Import */
import { useState, useEffect, useContext } from "react";
/* CSS Module */
import styles from "../../css/module/common/CheckItem.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const CheckItem = ({ name, id, content, labelImgSrc, children, groupType, checkidx }) => {
  const { selectOptionList, setSelectOptionList, accountInfoList, setAccountInfoList } = useContext(SetContext);
  const [ isChecked, setIsChecked ] = useState();
  const [ isAccountChecked, setIsAccountChecked ] = useState();
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
  const checkedChangeAccountHandler = (e, idx) => {
    const { name, checked } = e.target;
    setAccountInfoList((prev) => ({
      ...prev,
      [groupType]: prev[groupType].map((item, gidx) =>
        gidx === idx
          ? { ...item, [name]: checked }  // 해당 인덱스의 항목만 업데이트
          : item  // 나머지는 그대로 유지
      )
    }));
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
  useEffect(() => {
    if (name === "kakaopayUse") {
      setIsChecked(accountInfoList[groupType][checkidx]?.kakaopayUse || false);
    } else {
      const selectedOption = selectOptionList[name];
      if (typeof selectedOption === "boolean") {
        setIsChecked(selectedOption);
      }
    }
  }, [accountInfoList, selectOptionList, name, groupType, checkidx]);
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
        onChange={(e) => checkedChangeAccountHandler(e, checkidx)}
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