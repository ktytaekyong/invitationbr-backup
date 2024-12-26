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

const SubMngListItem = ({ guest }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={`${styles.sub__mng_list_item} ${styles.mng__container_wrapper}`}>
      <div>
        <input type="checkbox" id={"guest" + Math.random() * 10} />
      </div>
      <div className={styles.sub__mng_no__center}>
        <div className={`${styles.badge} ${guest.attendType === "attendTypeGroom" ? styles.typeM : styles.typeF}`}>
          {guest.attendType === "attendTypeGroom" ? <p>신랑측</p> : <p>신부측</p>}
        </div>
        {guest.attendCount === 0 ? 
          <p><span>{guest.attendName}</span></p> : 
          <p><span>{guest.attendName}</span> 외 <span>{guest.attendCount}명</span></p>
        }
      </div>
      <div>
        {guest.attendWhether ? <span>O</span> : <span>X</span>}
      </div>
      <div>
        {guest.attendMealYes ? <span>O</span> : <span>X</span>}
      </div>
      <div>
        {guest.attendBusYes ? <span>O</span> : <span>X</span>}
      </div>
      <div>
        <p className={styles.date}>{guest.attendDate}</p>
      </div>
    </div>
  )
}

export default SubMngListItem;