/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubListItem.module.scss";
/* Component */
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import SubListSearch from "./SubListSearch.js";
import iconClipImg from "../../img/icon/icon_clip.png";

const SubListItem = ({ menuList }) => {
  return (
    <li className={styles.sub__list_ltem}>
      <div className={styles.info}>
        <div className={styles.index}><p>1</p></div>
        <div className={styles.badge}><p>공지</p></div>
        <div className={styles.title}>
          <p>고객 신뢰도 1위 프리미엄 브랜드상 수상</p>
          <Link>
            <img src={iconClipImg} alt="" />
          </Link>
        </div>
      </div>
      <div className={styles.date}><p>2024.12.03</p></div>
    </li>
  )
}

export default SubListItem;