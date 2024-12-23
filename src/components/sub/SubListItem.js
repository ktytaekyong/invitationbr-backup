/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DateConverterDot } from "../../utils/helpers.js";
/* CSS Module */
import styles from "../../css/module/sub/SubListItem.module.scss";
/* Component */
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import SubListSearch from "./SubListSearch.js";
import iconClipImg from "../../img/icon/icon_clip.png";

const SubListItem = ({ item, idx }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <li className={styles.sub__list_ltem}>
      <Link to={item.src}>
        <div className={styles.info}>
          {
            !isMobile ? <div className={styles.index}><p>{idx + 1}</p></div> : null
          }
          <div className={styles.badge}><p>{item.type}</p></div>
          <div className={styles.title}>
            <p>{item.title}</p>
            {item.file ? 
              <img src={iconClipImg} alt="" />
              : null
            }
          </div>
        </div>
        <div className={styles.date}><p>{DateConverterDot(item.date)}</p></div>
      </Link>
    </li>
  )
}

export default SubListItem;