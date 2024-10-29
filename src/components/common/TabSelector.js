/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/common/TabSelector.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const TabSelector = ({ listName, name, onClick }) => {
  const { selectOptionList, setSelectOptionList, selectNoticeT, setSelectNoticeT } = useContext(SetContext);
  const tabChangeHandler = (e, idx) => {
    const { name } = e.currentTarget.dataset;
    const { id } = e.currentTarget;
    setSelectOptionList((prev) => ({
      ...prev,
      [name]: id
    }))
    if (id && id.indexOf("noticeTab") !== -1) {
      setSelectNoticeT(idx);
    }
    console.log(selectOptionList);
  }
  useEffect(()=>{
    console.log(selectOptionList.name);
  })
  return (
    <ul className={styles.tab__selector}>
      {
        listName.map((item, idx) => (
          <li 
            className={`
              ${styles.selector__item} 
              ${((selectOptionList[name] === item.id) || (item.id && item.id.indexOf("noticeTab") !== -1 && selectNoticeT === idx)) ? styles["active"] : ""} 
              ${item.id && item.id.indexOf("noticeTab") !== -1 ? styles["tab"] : ""}
            `} 
            key={item + idx} 
            id={item.id}
            data-name={name}
            onClick={(e) => {
              tabChangeHandler(e, idx);
            }}
          >
            <span>{item.title}</span>
            {/* 탭형 안내사항을 선택했을 경우 */}
            {
              item.id && item.id.indexOf("noticeTab") !== -1 ?
              <Button 
                styleType="tab__delete" 
                onClick={onClick} 
              />
              : null
            }
          </li>
        ))
      }
    </ul>
  )
}

export default TabSelector;