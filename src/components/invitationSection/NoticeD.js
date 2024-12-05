/* Import */
import { useContext } from "react";
/* Component */
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/NoticeD.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { RefContext } from "../../store/option-ref-context.js";

const NoticeD = () => {
  const { noticeDList } = useContext(SetContext);
  const { noticeDRef } = useContext(RefContext);

  return (
    <div ref={noticeDRef} id="NoticeD" className={`${styles.notice}`}>
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
                  <p>{item.title ? item.title : "답례품 안내"}</p>
                </div>
                <p>
                  {item.content ? item.content : "식사를 못하고 가시는 분들을 위해 피로연 출구에\n작은 선물을 준비했으니 잊지 마시고 챙겨 가세요."}
                </p>
                <img src={!item.src ? null : item.src} alt="" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default NoticeD;