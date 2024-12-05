/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import NoticeTItem from "./NoticeTItem.js";
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/NoticeT.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { RefContext } from "../../store/option-ref-context.js";

const NoticeT = () => {
  const { noticeTList } = useContext(SetContext);
  const { noticeTRef } = useContext(RefContext);

  const [isActive, setIsActive] = useState(0);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }
  useEffect(() => {
    setIsActive(0);
  }, [noticeTList.length]);
  return (
    <div ref={noticeTRef} id="NoticeT" className={`${styles.notice}`}>
      <div className={styles.notice__wrap}>
        <HeadLine title="안내사항" content="information" />
        <div className={styles.notice__content}>
          <NoticeTItem onClick={setActiveHandler} isActive={isActive} />
          {
            noticeTList.map((item, idx) => (
              <div 
                key={item.id + idx} 
                id={item.id} 
                className={`${styles.content} ${isActive === idx ? styles["active"] : ""} ${styles[noticeTList[idx].position]}`}>
                {!item.src ? null : <img src={item.src} alt="" />}
                <p>
                  {item.content}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default NoticeT;