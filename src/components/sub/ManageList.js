/* import */
import { useContext } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/ManageList.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */

const ManageList = ({ noticeList }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.manage__list}>
      <div className={styles.manage__list_wrap}>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
    </div>
  )
}

export default ManageList;