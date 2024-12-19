/* import */
import { useContext } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubTitleNotice.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */

const SubTitleNotice = ({ noticeList }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.sub__title_notice}>
      <div className={styles.sub__title_notice_wrap}>
        <ul>
          {
            noticeList.map((item, idx) => (
              <li key={item + idx}><span>·</span><span dangerouslySetInnerHTML={{ __html: item }} /></li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default SubTitleNotice;