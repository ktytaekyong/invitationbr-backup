/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DateConverterDot } from "../../utils/helpers.js";
/* CSS Module */
import styles from "../../css/module/sub/SubMngItem.module.scss";
/* Component */
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import SubListSearch from "./SubListSearch.js";
import iconClipImg from "../../img/icon/icon_clip.png";

const SubMngItem = ({ img, type }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <li className={styles.sub__mng_ltem}>
      <div className={styles.img__wrap}>
        <img src={img} alt="" />
      </div>
      <p className={styles.total}>{type} {isMobile ? <br /> : null} <span>{0}</span>명</p>
      <div className={styles.detail}>
        <div>
          <p>신랑측</p>
          <p><span>{0}</span>명</p>
        </div>
        <div>
          <p>신부측</p>
          <p><span>{0}</span>명</p>
        </div>
      </div>
    </li>
  )
}

export default SubMngItem;