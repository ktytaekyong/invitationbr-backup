/* Import */
import { useState, useEffect, useContext, useRef } from "react";
/* Component */
import NoticeTItem from "./NoticeTItem.js";
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/NoticeD.module.scss";
/* Image */
import defaultImg from "../../img/notice/notice_photo_test2.png"
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const NoticeD = () => {
  const { noticeDList, setNoticeDList } = useContext(SetContext);
  return (
    <div className={`${styles.notice} ${styles.style_theme_1}`}>
      <div className={styles.notice__wrap}>
        <HeadLine title="공지사항" content="notice" />
        <div className={styles.notice__content}>
          {
            noticeDList.map((item, idx) => (
              <div 
                key={item.title + idx} 
                className={`${styles.content} ${styles[noticeDList[idx].position]}`}
              >
                <div className={styles.title}>
                  <p>{item.title}</p>
                </div>
                <p>
                  {item.content}
                </p>
                <img src={item.src === "" ? defaultImg : item.src} alt="" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default NoticeD;