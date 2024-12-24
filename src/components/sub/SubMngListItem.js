/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DateConverterDot } from "../../utils/helpers.js";
/* CSS Module */
import styles from "../../css/module/sub/SubMngList.module.scss";
/* Component */
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import SubListSearch from "./SubListSearch.js";
import iconClipImg from "../../img/icon/icon_clip.png";

const SubMngListItem = ({ item, idx }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={`${styles.sub__mng_list_item} ${styles.mng__container_wrapper}`}>
      <div>
        <input type="checkbox" />
      </div>
      <div className={styles.sub__mng_no__center}>
        <div className={`${styles.badge} ${styles.typeF}`}>
          <p>신부측</p>
        </div>
        <p><span>{"최보윤"}</span> 외 <span>{0}명</span></p>
      </div>
      <div>
        <span>O</span>
      </div>
      <div>
        <span>X</span>
      </div>
      <div>
        <span>X</span>
      </div>
      <div>
        <p className={styles.date}>2024.12.03</p>
      </div>
    </div>
  )
}

export default SubMngListItem;