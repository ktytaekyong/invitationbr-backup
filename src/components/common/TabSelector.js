/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/common/TabSelector.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const TabSelector = ({ listName, name, onClick, type, activeTab, onClickDel }) => {
  const { selectOptionList, setSelectOptionList, selectNoticeT, setSelectNoticeT } = useContext(SetContext);
  const tabChangeHandler = (e, tabidx) => {
    const { name } = e.currentTarget.dataset;
    const { id } = e.currentTarget;
    setSelectOptionList((prev) => ({
      ...prev,
      [name]: id
    }))
    if(id.indexOf("noticeTab") !== -1) {
      setSelectNoticeT(tabidx);
    }
    // console.log(selectOptionList);
    console.log(selectNoticeT);
  }
  return (
    <ul className={styles.tab__selector}>
      {
        listName.map((item, idx) => (
          type === "sample" ? 
          <li 
            className={`${styles.selector__item} ${activeTab === idx ? styles["active"] : ""} sample`} 
            key={item + idx} 
            id={item.id}
            data-name={name}
            onClick={() => onClick(idx)}
          >
            <span>{item.title}</span>
          </li>
          :
          <li 
            className={`
              ${styles.selector__item} 
              ${item.id.indexOf("noticeTab") !== -1 && selectNoticeT === idx ? styles["active"] : ""} 
              ${item.id.indexOf("noticeTab") !== -1 ? styles["tab"] : ""}
              ${item.id.indexOf("noticeTab") === -1 && name && selectOptionList[name] === item.id ? styles["active"] : ""} 
            `} 
            key={item + idx} 
            id={item.id}
            data-name={name}
            onClick={(e) => {tabChangeHandler(e, idx)}}
          >
            <span>{item.title}</span>
            {/* 탭형 안내사항을 선택했을 경우 */}
            {
              item.id && item.id.indexOf("noticeTab") !== -1 ?
              <Button 
                styleType="tab__delete"
                onClick={onClickDel} 
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