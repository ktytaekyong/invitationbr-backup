/* Import */
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/NoticeTItem.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const NoticeTItem = ({ onClick, isActive }) => {
  const { noticeTList, setNoticeTList } = useContext(SetContext);
  return (
    noticeTList.length === 0 ?
    null
    :
    <ul className={styles.tab}>
    {
      noticeTList.map((item, idx) => {
        return (
          <li key={"tab" + idx}
            id={"noticeTab" + idx + "View"} 
            className={`${styles.tab__item} ${isActive === idx ? styles["active"] : ""}`}
            onClick={() => onClick(idx)}
            >
            <Link to="#" onClick={(e => e.preventDefault())}>{item.title}</Link>
          </li>
        )
      }
    )}
    </ul>
  )
}

export default NoticeTItem;