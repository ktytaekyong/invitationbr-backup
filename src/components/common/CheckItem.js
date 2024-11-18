/* Import */
import { useState, useEffect, useContext } from "react";
/* CSS Module */
import styles from "../../css/module/common/CheckItem.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { InfoContext } from "../../store/option-info-context.js";

const CheckItem = ({ name, id, content, labelImgSrc, children, groupType, checkidx, type, infoType }) => {
  const { selectOptionList, setSelectOptionList, accountInfoList, setAccountInfoList, setAttendList } = useContext(SetContext);
  const { setBasicInfoList } = useContext(InfoContext);
  const [ isChecked, setIsChecked ] = useState(false);
  const checkedOptionChangeHandler = (e) => {
    const { name, id, checked } = e.target;
    const newArray = Object.entries(selectOptionList);
    newArray.forEach((item) => {
      if(item.includes(name)) {
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
  }
  const checkedAccountChangeHandler = (e, idx) => {
    const { name, checked } = e.target;
    setAccountInfoList((prev) => ({
      ...prev,
      [groupType]: prev[groupType].map((item, gidx) =>
        gidx === idx
          ? { ...item, [name]: checked }
          : item
      )
    }));
  }
  const checkedInfoChangeHandler = (e, infoType) => {
    const { name, checked } = e.target;
    setIsChecked(checked);
    setBasicInfoList((prev) => ({
      ...prev,
      [infoType]: {
        ...prev[infoType],
        [name]: checked,
      },
    }));
    // console.log(infoType);
  };
  const checkedAttendChangeHandler = (e) => {
    const { name, checked } = e.target;
    setIsChecked(checked);
    setAttendList((prev) => ({
      ...prev,
      [name]: checked
    }));
    // console.log(attendList);
  };
  useEffect(() => {
    const newArray = Object.entries(selectOptionList);
    newArray.forEach((item) => {
      if(item.includes(name)) {
        if(typeof item[1] === "boolean") {
          setIsChecked(item[1]);
        }
      }
    })
  }, [selectOptionList, name])
  useEffect(() => {
    const newArray = Object.entries(selectOptionList);
    newArray.forEach((item) => {
      if(item.includes(name)) {
        if(typeof item[1] === "boolean") {
          setIsChecked(item[1]);
        }
      }
    })
  }, [selectOptionList, name])
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
  // useEffect(() => {
  //   const initialChecked = basicInfoList[infoType]?.[name] || false;
  //   setIsChecked(initialChecked);
  // }, [basicInfoList, infoType, name]);
  return (
    name !== "kakaopayUse" ? 
    <div className={styles.check}>
      <input 
        type="checkbox" 
        name={name} 
        id={id} 
        checked={isChecked}
        onChange={(e) => {
          if (type === "info") {
            checkedInfoChangeHandler(e, infoType);
          } else if (type === "attend") {
            checkedAttendChangeHandler(e);
          } else {
            checkedOptionChangeHandler(e);
          }
        }}
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
        onChange={(e) => checkedAccountChangeHandler(e, checkidx)}
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